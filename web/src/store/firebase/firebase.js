
var firebaseMod = {
  namespaced: true,
    state:{
      cache:{

      },
      db:firebase.firestore()
    },
    getters:{},
    mutations:{},
    actions: {
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
          return new Promise((res,rej)=>{
            context.state.db.collection("docs").doc(obj.key).set({value:obj.value,str:JSON.stringify(obj.value)}).then(function(){
              res(true);
            }).catch(function(err){
              rej (err);
            });
          });
        }
    }
}


  export default firebaseMod;
