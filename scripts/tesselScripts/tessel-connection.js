var ws = require("nodejs-websocket");
//var hostname = OS.hostname();
var hostname = 'tessel.local';

var PORT = 15000;
var ready = false;

var K = {
    Koala_root_WS: {
        port: PORT,
        // INSERT SERVER IP ADDRESS HERE. Always prepend with 'ws://' to indicate websocket
        //host: 'ws://195.176.181.55:' // NEHA
        //host: 'ws://10.40.6.100:', //AGORA
        host: 'ws://10.40.2.139:' //AGORA_New

    },
    WS: {
        port: PORT,
        host: hostname,
    }
}

var connection = ws.connect(K.Koala_root_WS.host + K.Koala_root_WS.port, function() {
    var msg = {
        command: "tessel-data",
        port: K.WS.port,
        host: K.WS.host
    }
    connection.sendText(JSON.stringify(msg));
    ready = true;
});

/*
	Simple send function
*/
var send = function(message){
	if(!ready)
		return;
	connection.sendText(JSON.stringify(message));
};

var receiver = function(e,cb){
    if(!ready){
        return;
    }
    console.log(e);
    connection.on(e,cb)
};

exports.send = send;
exports.receiver = receiver;
exports.connection = connection;
exports.port = K.WS.port;
exports.hostname = hostname;