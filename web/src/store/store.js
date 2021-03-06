import Vue from 'vue'
import Vuex from 'vuex'
import abi from './abi'
import web3iFactory from './main/web3i'
import ethGetters from './main/ethGetters'
import ethMutations from './main/ethMutations'
import ethActionsFactory from './main/ethActions'
import voteWorker from './voting/web3vote'
import votingGetters from './voting/votingGetters'
import firebase from './firebase/firebase'
import loadingMod from './loading/loading'

    Vue.use(Vuex);
    var vWrkr = undefined;
  var votingStore = {
    votings:[]
  };
  setInterval(function(){
    if(typeof web3 !== "undefined"){
    //updateNetworkData
      if(store.getters.basicData.inProcess==false){
        store.dispatch('updateNetworkData');
        if(store.getters.basicData.isEnabled){
          if(store.getters.contractsInfo.isNotReady){
            store.dispatch('scanNameRegistry',web3i.contracts.NameRegistry);
          }
          else{
            if(vWrkr===undefined){
              vWrkr = voteWorker(votingStore,web3i.contracts.Voting,0,abi,undefined);
            }
            if(web3i.latestBlock !== web3i.prevBlock){

              store.dispatch('readNewData',{prevNum:web3i.prevBlock,currNum:web3i.latestBlock});
              web3i.prevBlock = web3i.latestBlock;
            }
          }
          //updateBlockNumber
          store.dispatch('updateBlockNumber');
        }
      }
    }
  },1000);

  var web3i = web3iFactory(abi);
export const store = new Vuex.Store({
  modules:{
    web3:
      {
        state:web3i,
        getters:ethGetters,
        mutations:ethMutations,
        actions: ethActionsFactory(abi)
      },
    firebase:firebase,
    loading:loadingMod,
    voting:{
      namespaced: true,
      state:votingStore,
      getters:votingGetters,
      mutations:{},
      actions:{},
    }
  }

});
