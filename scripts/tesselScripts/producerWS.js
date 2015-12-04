/**
 * This module handle socket connection
 */

var ws = require("nodejs-websocket");

var port = 15000;
var hostname = "ws://195.176.181.55:";
var url = hostname + port.toString() ;
var ready = false;

var connection = ws.connect(url, function() {
    console.log('--Producer Connected on: ' + url, ' --');
    ready = true;
});

var send = function(message) {
    if (!ready)
        return;
    connection.sendText(JSON.stringify(message));
};
var ack = function() {
    console.log(ready)
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