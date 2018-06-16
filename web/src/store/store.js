import Vue from 'vue'
import Vuex from 'vuex'
import web3i from './main/web3i'
import ethGetters from './main/ethGetters'
import ethMutations from './main/ethMutations'
import ethActions from './main/ethActions'
import firebase from './firebase/firebase'


    Vue.use(Vuex);
  setInterval(function(){
    //updateNetworkData
    if(store.getters.basicData.inProcess==false){
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
export const store = new Vuex.Store({
  modules:{
    web3:
      {
        state:web3i,
        getters:ethGetters,
        mutations:ethMutations,
        actions: ethActions
      },
    firebase:firebase
  }

});
