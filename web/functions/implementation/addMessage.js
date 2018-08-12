
var factory = function(functions,admin){
    var item =  functions.https.onRequest((req, res) => {
      // Grab the text parameter.

        var data = req.query.content;
        var key = req.query.key;
        if (req.method === "POST") {

          var data = req.body.content;
          var key = req.body.key;
        }

      return admin.firestore()
        .collection("docs")
        .doc(key)
        .set({value:JSON.parse(data),str:data})
        .then((snapshot) => {
        res.send(JSON.stringify({value:"",status:true}));
        // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      }).catch(function(err){
        res.send(JSON.stringify({value:err,status:false}));
      });
    });
    return item;
}

exports.addMessage = factory;
