var k = require('./../k_globals/koala.js')
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 15000
    });

wss.on('connection', function(ws) {
    console.log('____________New Connection Opened____________');
    ws.on('message', function(data) {
    	console.log("websocket " + data);
        }
    });
});

setInterval(function(msg) {
	var data = {
		header: {position: "x", type: "temp"}, 
		time: new Date().getTime(),
		content: Math.floor((Math.random()*100)+1),
		};
		
	var data1 = {
		header: {position: "x", type: "noise"}, 
		time: new Date().getTime(),
		content: Math.floor((Math.random()*100)+1),
		};
		
	var dataMilestone = {
			volume: Math.floor((Math.random()*100)+1),
			light: Math.floor((Math.random()*100)+1),
			time: Date.now()
		};
		
	
	k.send(JSON.stringify(dataMilestone));
	//k.send(JSON.stringify(data));
	//k.send(JSON.stringify(data1));

}, 1000);

k.createNode(function(msg){
	console.log("createNode " + msg);	
});




console.log('Sending data... ');
