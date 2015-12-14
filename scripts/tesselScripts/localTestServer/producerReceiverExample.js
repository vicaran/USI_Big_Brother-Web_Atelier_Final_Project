/**
 * Created by VeaVictis on 25/11/15.
 */

var pws = require("./../producerWS.js")

function mainExample() {
    pws.receive(function (data) {
        console.log(data + 'receiver!')
        pws.ack
    });
    //interval = setInterval(function () {
    //    var ack = {
    //        a: 'ACK'
    //    };
    //    pws.send(ack)
    //}, 4000)
}

mainExample();