
var factory = function(functions,admin,isSignatureValid){
   var start = (new Date()).getTime()/1000;
    var item = functions.https.onRequest((req, res) => {
      console.log("start ",(new Date()).getTime()/1000-start);
          start = (new Date()).getTime()/1000;
          var address = req.query.address;
          var signature = req.query.signature;
          const additionalClaims = {
            address : address,
            isMetamask: true
          }

          admin.firestore()
           .collection("loggedUsers")
           .doc(address).get()
           .then(function(x){
             x= x.data();
             console.log("loggedUsers ",(new Date()).getTime()/1000-start);
             var stringToVerify ="Sign me in, SessionID:"+x.authKey;
             isSignatureValid(stringToVerify,signature,address)
                .then(function(){
                  console.log("isSignatureValid ",(new Date()).getTime()/1000-start);
                 return admin.auth().createCustomToken(address,additionalClaims).then(function(token){
                   res.send(JSON.stringify({value:token,status:true}));
                 });
               })
               .catch(function(err){
                 console.log("isSignatureValid catch",(new Date()).getTime()/1000-start);
          //       console.log("internal error "+JSON.stringify(arguments));
                 res.send(JSON.stringify({value:err,status:false}));
               });
             })
             .catch(function(err){
            //   console.log("External error "+JSON.stringify(arguments));

                console.log("loggedUsers catch"+(new Date()).getTime()/1000-start);
               res.send(JSON.stringify({value:err,status:false}));
             });
        });
    return item;
}

exports.verifySignature = factory;
