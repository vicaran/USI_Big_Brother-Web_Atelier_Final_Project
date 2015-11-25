/**
 * Created by VeaVictis on 25/11/15.
 */

var ws = require("nodejs-websocket");

var port = 15000;
var hostname = "ws://10.40.2.139:";
var url = hostname + port.toString();
var ready = false;

var connection = ws.connect(url, function () {
    console.log('--Producer Connected on: ' + url, ' --')
    connection.sendText('ACK')
    ready = true;
});

var send = function (message) {
    if (!ready)
        return;
    connection.sendText(JSON.stringify(message));
};
var ack = function () {
    if (!ready)
        return;
    connection.sendText('ACK');
};

var receive = function (cb) {
    connection.on('text', cb)
};


exports.connection = connection;
exports.send = send;
exports.receive = receive;
exports.ack = ack;