const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Web3 = require('web3');
//const HDWalletProvider = require("truffle-hdwallet-provider");
var serviceAccount = require("./serviceAccountKey.json");
var web3secrets = require("./secrets.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fellowchain-network.firebaseio.com"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.getVerificationKey =  functions.https.onRequest((reqst, resp) => {
  var key = reqst.query.address;
  var networkName = reqst.query.networkName;
  var networkUrl = "";
  if(typeof networkName === 'undefined'){
    networkUrl = 'https://rinkeby.infura.io/ht4yyh0j0UUoTa2p9nF2';
  }
  else{
    networkUrl = web3secrets[networkName];
  }
  console.log("data.query = "+JSON.stringify(reqst.query));
  console.log("networkUrl = "+networkUrl+ ""+new Date());

  //const provider = new HDWalletProvider(web3secrets.SECRET_MNEMONIC, web3secrets[networkName]);
  web3 = new Web3(new Web3.providers.HttpProvider(networkUrl))
  var generateKey = function(key){
    console.log("Generating key..."+key);
    return new Promise((res,rej)=>{
    //  var w3 = new Web3(web3.currentProvider);
      console.log("hash value ="+(key+((new Date()).getTime())));
      var authKey = web3.sha3(key+((new Date()).getTime()));
      admin.firestore()
       .collection("loggedUsers")
       .doc(key)
       .set({
         authKey:authKey,
         address:key,
         date:(new Date()).getTime()+60000
       })
       .then((snapshot) => {
         console.log("Generating key...done "+authKey);
         res(authKey);
       }).catch(function(err){
         console.log("Generating key...error "+err);
         rej(err);
       });
    });
  };
  admin.firestore()
   .collection("loggedUsers")
   .doc(key).get()
   .then(function(x){
     x= x.data();
     if(typeof x !== 'undefined' && typeof x.date !== 'undefined'){
       var time = new Date(x.date);
       var now_ = new Date();
       if(time>now_){//id still valid
         console.log("Get from cache... "+x.authKey+" "+new Date());
         resp.send(x.authKey);
       }
       else{
         generateKey(key).then(function(y){
           console.log("Get from generateKey... "+y+" "+new Date());
           resp.send(y);
         });
       }
     }
     else {
       generateKey(key).then(function(y){
         console.log("Get from generateKey2... "+y+" "+new Date());
         resp.send(y);
       });
     }
   }).catch(function(err){
     console.error(err);
     resp.send(err);
   });
});
exports.verifySignature function.https.onRequest((req, res) => {
      var address = req.query.address;
      var signature = req.query.signature;
});
exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.

    var data = req.query.content;
    var key = req.query.key;
  //  console.log("data.query = "+JSON.stringify(req.query));
    if (req.method === "POST") {

      var data = req.body.content;
      var key = req.body.key;
    }
  //  console.log("data = "+data);
  //  console.log("key = "+key);
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.firestore()
    .collection("docs")
    .doc(key)
    .set({value:JSON.parse(data),str:data})
    .then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.send(true);
  });
});
