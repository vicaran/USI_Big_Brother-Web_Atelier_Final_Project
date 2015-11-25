/**
 * Created by VeaVictis on 25/11/15.
 */

var ws = require("nodejs-websocket");

var port = 15000;
var hostname = "ws://127.0.0.1:";
var url =  hostname +  port.toString();
var ready = false;

var connection = ws.connect(url, function () {
    console.log('--Producer Connected on: ' + url, ' --')
    ready = true;
});
var send = function(message){
    if(!ready)
        return;
    connection.sendText(JSON.stringify(message));
};

var receive = function(cb){connection.on('text',cb)};



exports.connection = connection;
exports.send = send;
exports.receive = receive;