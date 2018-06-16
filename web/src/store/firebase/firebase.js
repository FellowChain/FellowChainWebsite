
var firebase = {
  namespaced: true,
    state:{
      cache:{

      },
      db:firebase.firestore()
    },
    getters:ethGetters,
    mutations:ethMutations,
    actions: {
        saveContent:function(context,obj){
            context.state.db.collection("docs").doc(obj.key).set(obj.value);
        }
    }
}


  export default firebase;
