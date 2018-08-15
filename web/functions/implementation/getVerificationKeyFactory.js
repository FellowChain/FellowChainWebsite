var factory = function(web3, functions, admin, generateKey) {
    var start = (new Date()).getTime() / 1000;
    var item = functions.https.onRequest((reqst, resp) => {
        var key = reqst.query.address;
        return new Promise((res, rej) => {
            console.log("Start ", (new Date()).getTime() / 1000 - start);
            admin.database()
                .ref("loggedUsers")
                .child(key)
                .on("value", function(x) {
                    x = x.val();
                    if (x == null || x.date == null) {
                        console.log("loggedUsers ", (new Date()).getTime() / 1000 - start);
                        return generateKey(key).then(function(y) {
                                console.log("resp.send from generateKey... " + y + " " + new Date());
                                resp.send(JSON.stringify({
                                    value: y,
                                    status: true
                                }));
                                res(true);
                            })
                            .catch(function(err) {
                                console.log("err ", err);
                                rej(false);
                            });
                    } else {
                        var time = new Date(x.date);
                        var now_ = new Date();
                        if (time > now_) { //id still valid
                            console.log("resp.send from cache... " + x.authKey + " " + new Date());
                            resp.send(JSON.stringify({
                                value: x.authKey,
                                status: true
                            }));
                            res(true);
                        } else {
                            console.log("too Short ", (new Date()).getTime() / 1000 - start);
                            generateKey(key).then(function(y) {
                                    console.log("resp.send Short2 from generateKey... " + y + " " + new Date());
                                    resp.send(JSON.stringify({
                                        value: y,
                                        status: true
                                    }));
                                    res(true);
                                })
                                .catch(function(err) {
                                    console.log("err ", err);
                                    rej(false);
                                });;
                        }
                    }
                });
        });

    });
    return item;
}

exports.getVerificationKeyFactory = factory;
