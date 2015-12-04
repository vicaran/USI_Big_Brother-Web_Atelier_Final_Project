/**
 * Created by VeaVictis on 04/12/15.
 */


var ws = require('./producerWS.js')

interval = setInterval(function () {
    var data = {
        _id: 1,
        volume: 70,
        light: 100,
        time: Date.now()
    };
    ws.send(data)
}, 500);