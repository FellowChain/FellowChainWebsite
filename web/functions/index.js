const functions = require('firebase-functions');
const admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fellowchain-network.firebaseio.com"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.

    var data = req.query.content;
    var key = req.query.key;
    console.log("data.query = "+JSON.stringify(req.query));
    console.log("data.params = "+JSON.stringify(req.params));
    if (req.method === "POST") {

      var data = req.body.content;
      var key = req.body.key;
    }
    console.log("data = "+data);
    console.log("key = "+key);
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
