
var factory = function(web3,functions,admin,generateKey){
    var item =  functions.https.onRequest((reqst, resp) => {
      var key = reqst.query.address;

      admin.firestore()
       .collection("loggedUsers")
       .doc(key).get()
       .then(function(x){
         x= x.data();
         if(typeof x !== 'undefined' && typeof x.date !== 'undefined'){
           var time = new Date(x.date);
           var now_ = new Date();
           if(time>now_){//id still valid
        //     console.log("Get from cache... "+x.authKey+" "+new Date());
             resp.send(JSON.stringify({value:x.authKey,status:true}));
           }
           else{
             generateKey(key).then(function(y){
          //     console.log("Get from generateKey... "+y+" "+new Date());
               resp.send(JSON.stringify({value:y,status:true}));
             });
           }
         }
         else {
           generateKey(key).then(function(y){
            // console.log("Get from generateKey2... "+y+" "+new Date());
             resp.send(JSON.stringify({value:y,status:true}));
           });
         }
       }).catch(function(err){
      //   console.error(err);
         resp.send(JSON.stringify({value:err,status:false}));
       });
    });
    return item;
}

exports.getVerificationKeyFactory = factory;
