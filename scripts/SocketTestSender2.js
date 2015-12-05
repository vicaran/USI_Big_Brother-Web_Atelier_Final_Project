/**
 * Created by VeaVictis on 05/12/15.
 */

var ws = require('./producerWS.js')

interval = setInterval(function () {
    var data = {
        _id: 2,
        volume: 80,
        light: 200,
    };
    ws.send(data)
}, 500);