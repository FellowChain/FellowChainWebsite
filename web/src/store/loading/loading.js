//

var loadingMod = {

  namespaced: true,
    state:{
      loadingLvl:0
    },
    getters:{
      isLocked: state=>{
        return state.loadingLvl>0;
      }
    },
    mutations:{

      incLock:function(state){
        state.loadingLvl = state.loadingLvl+1;
      },
      decLock:function(state){
         state.loadingLvl = state.loadingLvl-1;
      },
    },
    actions: {
      lock:function(context){
        context.commit('incLock');
        console.log('lock ui');
      },
      unlock:function(context,obj){
        context.commit('decLock');
        console.log('unlock ui');
      }
    }
}


  export default loadingMod;
