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
         state.loadingLvl = state.loadingLvl+1;
      },
    },
    actions: {
      lock:function(context){
        context.commit('incLock');
      },
      unlock:function(context,obj){
        context.commit('decLock');
      }
    }
}


  export default loadingMod;
