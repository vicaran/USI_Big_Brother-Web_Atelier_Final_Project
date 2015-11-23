/**
 * Created by VeaVictis on 23/11/15.
 */
var ws = require("nodejs-websocket");

var ports = 15000;
var ready = false;

var connection = ws.connect('ws://10.40.2.139:' + ports, function () {
    console.log('--Tessel Connected--')
});


var send = function(message){
    if(!ready)
        return;
    connection.sendText(JSON.stringify(message));
};

exports.connection = connection;
exports.send = send;
