/**
 * Created by VeaVictis on 25/11/15.
 */
var pws = require("./../producerWS.js")

function mainExample() {
    pws.receive(function(data){console.log(data + '--')})

    interval = setInterval(function () {

        var dataTest = {
            a: 0
        };
        pws.send(dataTest)
    }, 2000)
}

mainExample();