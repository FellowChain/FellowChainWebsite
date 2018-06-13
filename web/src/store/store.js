import Vue from 'vue'
import Vuex from 'vuex'
import abi from './abi'
var web3i=undefined;
(function(){


  var getAddress = function(key,regAdr){
    var nameReg = web3.eth.contract(abi.NameRegistry);
    var instance  = nameReg.at(regAdr);
    return new Promise ((res,rej)=>{

      instance.getAddress(key,function(e,v){
        if(e==null || e==undefined){
      	   res(v);
        }
        else {
          rej(e);
        }
      });
    });
  }
  var balanceOf = function(queriedAddress,tokAddr){
    var token = web3.eth.contract(abi.Token);
    var instance  = token.at(tokAddr);
    return new Promise ((res,rej)=>{

      instance.balanceOf(queriedAddress,function(e,v){
        if(e==null || e==undefined){
           res(v);
        }
        else {
          rej(e);
        }
      });
    });
  }
  var totalSupply = function(tokAddr){
    var token = web3.eth.contract(abi.Token);
    var instance  = token.at(tokAddr);
    return new Promise ((res,rej)=>{

      instance.totalSupply(function(e,v){
        if(e==null || e==undefined){
           res(v);
        }
        else {
          rej(e);
        }
      });
    });
  }
  var amountLocked = function(queriedAddress,lockerAdr){
    var lockerCntrct = web3.eth.contract(abi.Locker);
    var instance  = lockerCntrct.at(lockerAdr);
    return new Promise ((res,rej)=>{

      instance.getLockedAmount(queriedAddress,function(e,v){
        if(e==null || e==undefined){
           res(v);
        }
        else {
          rej(e);
        }
      });
    });
  }
  var getPrice = function(devAddr){
    var nameReg = web3.eth.contract(abi.DevFund);
    var instance  = nameReg.at(devAddr);
    return new Promise ((res,rej)=>{

      instance.price(function(e,v){
        if(e==null || e==undefined){
           res(v);
        }
        else {
          rej(e);
        }
      });
    });
  }

  Vue.use(Vuex);
  web3i = {
    isEnabled:false,
    pendingTx:[],
    contracts:{
      getRegistryAddress:getAddress,
      tokenBalanceOf:balanceOf,
      tokenTotalSupply:totalSupply,
      amountLocked:amountLocked,
      getPrice:getPrice,
      NameRegistry:"0xbc9dc8cd4b87af17ba41bae085ebdad81f573832"
    },
    inProcess:false,
    prevBlock:2,
    latestBlock:2,
    explorerUrl:"https://sokol-explorer.poa.network/account/",
    currentAddress:"0x94da43c587c515ad30ea86a208603a7586d2c25f",
    tokensBalance:123.000,
    exitPrice:0.07,
    votingPower:456.000,
    totalToBuy:9874567.000,
    price:1.00,
    pendingGovernanceVoting:[{
      votedAddress:"0x56947ac048452f75a64e2411ca140336cf939f7d",
      votedMethod:"transfer(address,uint256)",
      msgData:"0xa9059cbb0000000000000000000000002f2b7e3c46174d6934564f31d49dac025b9028b0000000000000000000000000000000000000000000000000000000009731971f",
      votesFor:5438,
      votesAgainst:1234,
      votingEnds:1528625532
    },
    {
      amount:234.00,
      currency:'POA',
      to:'0x56947ac048452f75a64e2411ca140336cf939f7d',
      msgHash:'5cc65c8468d19bdf0698582dd34c4d1f2d320d4cbdcfe590b3c110dec9f7dfee',
      votesFor:5438,
      votesAgainst:1234,
      votingEnds:1528625532
    }]
  }
  setInterval(function(){
    //updateNetworkData
    if(store.state.inProcess==false){
      store.dispatch('updateNetworkData');
      if(store.getters.basicData.isEnabled){
        if(store.getters.contractsInfo.isNotReady){
          store.dispatch('scanNameRegistry',web3i.contracts.NameRegistry);
        }
        else{

          if(web3i.latestBlock !== web3i.prevBlock){

            store.dispatch('readNewData',{prevNum:web3i.prevBlock,currNum:web3i.latestBlock});
            web3i.prevBlock = web3i.latestBlock;
          }
        }
        //updateBlockNumber
        store.dispatch('updateBlockNumber');
      }
    }
  },1000);
})()
export const store = new Vuex.Store({
  state:web3i,
    getters:{
      basicData: state=>{
        return {
          networkId : state.networkId,
          isEnabled : state.isEnabled,
          inProcess : state.inProcess,
          blockNumber : state.latestBlock,
          explorerUrl : state.explorerUrl,
          userAccount : state.currentAddress,
        }
      },
      tokenInfo: state =>{
        return {
          tokenAddress : state.contracts.Token,
          tokenUsersAmount : state.tokensBalance+state.votingPower,
          usersVotingPower : state.votingPower,
          totalToBuy : state.totalToBuy,
          tokenPrice : state.priceOfToken,
          exitPrice : state.exitPrice
        }
      },
      contractsInfo: state=>{
        return {
          voting : state.contracts.Voting ,
          token:state.contracts.Token,
          locker:state.contracts.Locker,
          dev:state.contracts.DevFund,
          nameReg:state.contracts.NameRegistry,
          isNotReady : state.contracts.Voting == undefined ||
            state.contracts.Token == undefined ||
            state.contracts.Locker == undefined ||
            state.contracts.DevFund == undefined
        }
      }
    },
    mutations:{
      setAccount:function(state,acc){
        state.currentAddress = acc;
      },
      setBlockNumber:function(state,num){
        state.latestBlock = num;
      },
      setNetwork:function(state,netId){
        state.networkId = netId ;
        state.isEnabled = true ;
        if(netId === 99){
          state.explorerUrl = "https://sokol-explorer.poa.network/account/";
        }
        if(netId === 77){
          state.explorerUrl = "https://poaexplorer.com/address/";
        }
      },
      setTokenBalanceDetails:function(state,details){
        state.tokensBalance=details.userFree;
        state.votingPower=details.userLocked;
        state.totalToBuy=details.remains;
        state.price=details.price;
      },
      addPendingTransaction:function(state,trans){
        state.pendingTx.push(trans);
      },
      setContractsInfo:function(state,data){
        state.contracts.Voting =data.v;
        state.contracts.Token =data.t;
          state.contracts.Locker =data.l;
          state.contracts.DevFund =data.d;
      }
    },
    actions: {
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
            context.state.contracts.amountLocked(context.getters.basicData.userAccount , context.state.contracts.Locker),
            context.state.contracts.getPrice(context.state.contracts.DevFund)]).
            then(function(arrayVal){
              var obj = {
                userFree : arrayVal[0].toString(),
                remains : arrayVal[1].toString(),
                userLocked : arrayVal[2].toString(),
                price : arrayVal[3].toString()
              }
              context.commit('setTokenBalanceDetails',obj);
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
      lockInVotingContract:function(context,amountOfTokens){
        //if 0 that meand all
      },
      exit:function(context){
        //exchange your
      }
    }
  });
