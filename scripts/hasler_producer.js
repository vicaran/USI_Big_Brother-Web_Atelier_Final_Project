//import WLS/libraries
var k = require('./../k_globals/koala.js');

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 15000 });

//create a websocket server
//var wss = new ws.Server({'port': 15000});

wss.on('connection', function(socket){
	console.log("new connection bla");
	socket.on("message", function(data){
		console.log('Prima di if', data);
		console.log('This is k:', k);
		console.log("Bound: ",k.isBound());
		if(k.isBound()){
			data = JSON.parse(data);
			console.log("Received:", data);
			data.time = new Date().getTime();
			k.send(data);
		}
	});
});

