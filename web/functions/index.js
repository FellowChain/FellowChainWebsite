var functions = undefined;
var admin = undefined;
var Web3 = undefined;
var serviceAccount = undefined;
var EthCrypto = undefined;
var initialized = false;
var web3 = undefined;
var networkUrl = undefined;
var generateKey = undefined;
var isSignatureValid = undefined;
console.log('Proj '+process.env.GCLOUD_PROJECT);
console.log('Function '+process.env.FUNCTION_NAME);

function init(){
  if(initialized==false){
    console.log('Initialization');
    var EthCrypto = require('eth-crypto');
    isSignatureValid = function(str,sign,expAddress){

      return new Promise((resp,rej)=>{

        var msgWithPrefix= "\x19Ethereum Signed Message:\n"+str.length+str;
        var address =  EthCrypto.recover(
                   sign,
                   EthCrypto.hash.keccak256(msgWithPrefix));
        console.log("address = "+address);
        if(address.toLowerCase()==expAddress.toLowerCase()){
          console.log("isSignatureValid true");
          resp(true);
        }
        else{
          console.log("isSignatureValid false");
          rej(address);
        }
      });
    }
    generateKey =  function(key){
      console.log("Generating key inner..."+key);
      return new Promise((res,rej)=>{
      //  var w3 = new Web3(web3.currentProvider);
        console.log("hash value ="+(key+((new Date()).getTime())));
        var authKey = web3.sha3(key+((new Date()).getTime()));
        admin.database()
         .ref("loggedUsers")
         .child(key)
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
    functions = require('firebase-functions');
    admin = require('firebase-admin');
    Web3 = require('web3');
    //const HDWalletProvider = require("truffle-hdwallet-provider");
    serviceAccount = require("./serviceAccountKey.json");
    if(process.env.GCLOUD_PROJECT==="fellowchain-network-test"){
      serviceAccount = require("./serviceAccountKeyTest.json");
    }
    var web3secrets = require("./secrets.json");

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://fellowchain-network.firebaseio.com"
    });
    networkUrl = web3secrets.INFURA_RINKEBY_URL;
    web3 = new Web3(new Web3.providers.HttpProvider(networkUrl));
    initialized = true;
  }
  else{
    console.log("No initialization");
  }
}

init();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'getVerificationKey') {
   var mod = require('./implementation/getVerificationKeyFactory');
   console.log("getVerificationKey start ",new Date());
   exports.getVerificationKey = mod.getVerificationKeyFactory(web3,functions,admin,generateKey);
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'addMessage')
{
   var mod = require('./implementation/addMessage');
   exports.addMessage = mod.addMessage(functions,admin);
}

if(!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'verifySignature')
{
   var mod = require('./implementation/verifySignature');
   exports.verifySignature = mod.verifySignature(functions,admin,isSignatureValid);
}
