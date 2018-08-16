//

var firebaseMod = {

  namespaced: true,
    state:{
      cache:{

      },
      firebaseToken:"",
      db:firebase.firestore()
    },
    getters:{
      isAnonymous: state=>{
        var hasAuth = ((firebase.auth().currentUser)!==undefined  && (firebase.auth().currentUser)!==null );
        if(hasAuth){
          hasAuth = firebase.auth().currentUser.isAnonymous === false;
        }
        return hasAuth === false;
      },
      userAuthData: state =>{
        var x = {
          token:state.firebaseToken
        }
        return x;
      }
    },
    computed:{
      isAnon(){
        return this.$store.getters.loadedData;
      }
    },
    mutations:{

      setTokenValue:function(state,val){
        state.firebaseToken = val;
      },
    },
    actions: {
      setAuthData:function(context,obj){
        context.dispatch('setAuthDetails', obj,{root:true});
      },
      setToken:function(context,obj){
        context.commit('setTokenValue',obj.token);
        context.dispatch('setAuth', null,{root:true});
      },
      getData:function(context, obj) {
        return new Promise((res,rej)=>{
          context.state.db.collection("docs").doc(obj.key).get().then(function(x){
            if(x.exists){
              obj.storage[obj.property] = Object.assign(obj.storage[obj.property] ,x.data().value);
            }
            res(true);
          }).catch(function(ex){
            rej(ex);
          });
        });
      },
      saveContent:function(context,obj){
        var httpLib = obj.httpLib;
          return new Promise((res,rej)=>{
            httpLib.post('/api/addMessage',{
              key : obj.key,
              content: JSON.stringify(obj.value)
            }).then(response => {
                  res(true);
                 }, response => {
                   rej(response);
                  });
          });
        }
    }
}


  export default firebaseMod;
