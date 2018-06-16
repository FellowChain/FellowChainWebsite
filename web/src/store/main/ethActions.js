
import abi from './../abi'
var ethActions = {
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
             res(v);
          }
          else {
            rej(e);
          }
        });
      });
  },
  buyTokens:function(context,amountOfEth){
    web3.eth.sendTransaction({
        to:context.state.contracts.DevFund,
        value:amountOfEth.toString()
      },function(err,val){
        if(err!=null && err!=undefined){

        }else{
          context.commit('addPendingTransaction',val);
        }
      });
  },
  lockAllForVoting:function(context,amountOfTokens){
    //if 0 that meand all
    if(amountOfTokens===0 || amountOfTokens==undefined){
      var token = web3.eth.contract(abi.Locker);
      var instance  = token.at(context.state.contracts.Locker);
      return new Promise ((res,rej)=>{
        instance.lockAllForVoting(function(e,v){
          if(e==null || e==undefined){
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
             res(v);
          }
          else {
            rej(e);
          }
        });
      });

  },
  exit:function(context){
    //exchange your
  }
};
export default ethActions;
