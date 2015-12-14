/**
 * Created by VeaVictis on 14/12/15.
 */

var ws = require("nodejs-websocket");

var port = 63342;
var hostname = "ws://127.0.0.1:";
var url = hostname + port.toString();
var ready = false;

var connection = ws.connect(url, function() {
    console.log('--Producer Connected on: ' + url, ' --');
    ready = true;
    //TODO WHEN CONNECTION ON SERVER CRASHES https://github.com/sitegui/nodejs-websocket
})


var send = function(message) {
    if (!ready)
        return;
    connection.sendText(JSON.stringify(message));
};
var ack = function() {
    if (!ready)
        return;
    send('ACK');
};

var receive = function(cb) {
    connection.on('text', cb)
};


exports.connection = connection;
exports.send = send;
exports.receive = receive;
exports.ack = ack;