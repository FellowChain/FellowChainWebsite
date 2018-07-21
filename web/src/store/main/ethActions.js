
import abi from './../abi'
import voteWorker from './../voting/web3vote'
var ethActions = {

  setAuth:function(context){
        context.commit('setAuthValue');
      },
  setAuthDetails:function(context,data){
            context.commit('setAuthValue',data);
          },
  getSignature:function(context,obj){

    var pad = function(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }
    var toHex = function(str) {
        var hex = '';
        for (var i = 0; i < str.length; i++) {
            hex += pad(str.charCodeAt(i).toString(16), 2);
        }
        return hex.toLowerCase();
    }
    var msg = obj.msg;
    web3.currentProvider.sendAsync({
                    method: 'personal_sign',
                    params: ["0x" + toHex(msg), web3.eth.accounts[0]],
                    from:  web3.eth.accounts[0],
                }, function (err, result) {
                    if (err) {
                      console.log(err);
                      /*
                        TODO: Log Error
                      */
                    }
                    else {
                        context.commit('setSignature',result.result);
                    }
                });
  },
  updateBlockNumber:function(context){
    var blockNumber = 0;
    context.state.inProcess = true;
      web3.eth.getBlockNumber(function(err,val){
            context.commit('setBlockNumber',val);
            context.state.inProcess = false;
        });
  },
  updateNetworkData:function(context){
    if(web3!=undefined && web3!=null && web3.eth.accounts.length>0){

      context.state.inProcess = true;
      web3.version.getNetwork(function(err,val){
         context.commit('setNetwork',val);
         context.commit('setAccount',web3.eth.accounts[0]);
         context.state.inProcess = false;
      });
    }
    else{

         context.commit('setNetwork',"0");
    }
  },
  readNewData:function(context,details){
      var prevNum = details.prevNum;
      var currNum = details.currNum;

      return Promise.all([context.state.contracts.tokenBalanceOf(context.getters.basicData.userAccount , context.state.contracts.Token),
        context.state.contracts.tokenBalanceOf(context.state.contracts.DevFund , context.state.contracts.Token),
        context.state.contracts.amountLocked(context.getters.basicData.userAccount , context.state.contracts.Locker, context.state.contracts.Token),
        context.state.contracts.getPrice(context.state.contracts.DevFund),
        context.state.contracts.allowenceOf(context.getters.basicData.userAccount,
          context.state.contracts.Locker,
          context.state.contracts.Token),
            context.state.contracts.lockEndTime(context.getters.basicData.userAccount , context.state.contracts.Locker),
            context.state.contracts.canWithdraw(context.state.contracts.Locker,context.getters.basicData.userAccount)
          ]).
        then(function(arrayVal){
          var obj = {
            userFree : arrayVal[0],
            remains : arrayVal[1],
            userLocked : arrayVal[2],
            price : arrayVal[3],
            devAllowence: arrayVal[4],
            lockEndTime: arrayVal[5]
          }
          context.commit('setTokenBalanceDetails',obj);
          context.commit('setWithdraw',arrayVal[6]);
        });
  },
  scanNameRegistry:function(context,nameRegArd){
      Promise.all([context.state.contracts.getRegistryAddress('tok',context.state.contracts.NameRegistry),
        context.state.contracts.getRegistryAddress('lkr',context.state.contracts.NameRegistry),
        context.state.contracts.getRegistryAddress('devFund',context.state.contracts.NameRegistry),
        context.state.contracts.getRegistryAddress('vote',context.state.contracts.NameRegistry)]).then(
          function(arrayVal){
            context.commit('setContractsInfo',{t:arrayVal[0],l:arrayVal[1],d:arrayVal[2],v:arrayVal[3]});
          }
      )
  },
  setVoteAllowence:function(context){
      var token = web3.eth.contract(abi.Token);
      var instance  = token.at(context.state.contracts.Token);
      return new Promise ((res,rej)=>{
        var allowenceLvl = (new web3.BigNumber("2")).pow(255);
        instance.approve(context.state.contracts.Locker,allowenceLvl,function(e,v){
          if(e==null || e==undefined){
             console.log("In call "+v);
             context.dispatch('waitPendingTx',v).then(function(){
               res(v);
             });
          }
          else {
            rej(e);
          }
        });
      });
  },
  buyTokens:function(context,amountOfEth){
    return new Promise((res,rej)=>{

      web3.eth.sendTransaction({
          to:context.state.contracts.DevFund,
          value:amountOfEth.toString()
        },function(err,val){
          if(err!=null && err!=undefined){
            rej(err);
          }else{
            console.log("In call "+val);
            context.dispatch('waitPendingTx',val).then(function(){
              res(true);
            });
          }
        });
    })
  },
  lockAllForVoting:function(context,amountOfTokens){
    //if 0 that meand all
    if(amountOfTokens===0 || amountOfTokens==undefined){
      var token = web3.eth.contract(abi.Locker);
      var instance  = token.at(context.state.contracts.Locker);
      return new Promise ((res,rej)=>{
        instance.lockAllForVoting(function(e,v){
          if(e==null || e==undefined){
             console.log("In call "+v);
             context.dispatch('waitPendingTx',v);
             res(v);
          }
          else {
            rej(e);
          }
        });
      });
    }
  },
  withdraw:function(context){
    //if 0 that meand all

      var token = web3.eth.contract(abi.Locker);
      var instance  = token.at(context.state.contracts.Locker);
      return new Promise ((res,rej)=>{
        instance.withdraw(function(e,v){
          if(e==null || e==undefined){
             console.log("In call "+v);
             context.dispatch('waitPendingTx',v);
             res(v);
          }
          else {
            rej(e);
          }
        });
      });

  },
  waitPendingTx:function(context,tx){
    context.commit('addPendingTransaction',tx);
    var waitForTransactionEnd = function(hash){
        return new Promise((res,rej)=>{
          var checkTrans = function(){
          console.log("checking "+hash);
          web3.eth.getTransactionReceipt(hash,function(err,val){
            if(val!=undefined){
              console.log("found "+hash);
              res(val);
            }
            else {
              if(err!=undefined){
                console.log("error "+hash);
                rej(err);
              }else{
                console.log("wait longer for "+hash);
                setTimeout(checkTrans,1000);
              }
            }
          });
        }
        checkTrans();
      })
    }
    return new Promise((res,rej)=>{

      context.dispatch('loading/lock');
      waitForTransactionEnd(tx).then(function(){
        context.dispatch('loading/unlock');
        context.commit('remPendingTransaction',tx);
        res(true);
      }).
      catch(function(err){
        context.dispatch('loading/unlock');
        context.commit('remPendingTransaction',tx);
        console.error(err);
        rej(false);
      });
    });
  },
  runProxyMethod:function(context,data){
    var addMnemonic = function(votingInstance,fullName,idx){

      return new  Promise((res,rej)=>{
        votingInstance.addMnemonic(fullName,idx,function(err,val){
          if(err!=null && err!=undefined){
            rej(err);
          }
          else {
            res(val);
            console.log("In call "+val);
            context.dispatch('waitPendingTx',val);
          }
        });
    });
  }
    return new Promise((res,rej)=>{


      data.args.push(function(e,v){
        /*callback of method*/
        context.rootState.voting.assignWatcher(v,function(event){
          addMnemonic(votingInstance,data.methodFullName,
            event.callIdx.toNumber()).then(function(tx){
              console.log("In call "+tx);
              waitForTransactionEnd(tx).then(function(){
                res(true);
              });

          }).catch(function(err){
            rej(err);
          })
        })

      });
      var adr = context.state.contracts[data.address];
      var cAbi = abi[data.abiName];
      var calledC = web3.eth.contract(cAbi);
      var voteAbi = abi.Voting;
      var votingC = web3.eth.contract(voteAbi);
      var votingInstance  = votingC.at(context.state.contracts.Voting);
      votingInstance.getProxy(adr,function(e,v){
        var proxyAddr = v;
        var instanceToCall = calledC.at(proxyAddr);
        var funcToCall = instanceToCall[data.methodName];
        return funcToCall.apply(instanceToCall,data.args);
      });
    });

  },
  exit:function(context){
    //exchange your
  }
};
export default ethActions;
