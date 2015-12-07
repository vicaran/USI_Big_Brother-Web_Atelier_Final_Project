var k = require('./../k_globals/koala.js')
var dataB = require('./database.js')

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 16000
    });


wss.on('connection', function(ws) {
    console.log('____________New Connection Opened____________');

    ws.on('message', function(data) {

        console.log('Here is data:', data);
    })
})

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
		
	var dataMilestone1 = {
			header: "tessel",
			_id: 1,
			volume: Math.floor((Math.random()*100)+1),
			light: Math.floor((Math.random()*100)+1),
			temperature: 0,
			time: Date.now()
		};

	var dataMilestone2 = {
			header: "tessel",
			_id: 2,
			volume: Math.floor((Math.random()*100)+1),
			light: Math.floor((Math.random()*100)+1),
			temperature: 0,
			time: Date.now()
		};


		
	
	k.send(JSON.stringify(dataMilestone1));
	k.send(JSON.stringify(dataMilestone2));
	//k.send(JSON.stringify(data));
	//k.send(JSON.stringify(data1));

}, 1000);

k.createNode(function(msg){
	console.log("createNode " + msg);	
});




// {
// 	_id: 0, 
// 	voluem: n,
// 	light: n ,
// 	temperature: 0
// }



// console.log('Sending data... ');
