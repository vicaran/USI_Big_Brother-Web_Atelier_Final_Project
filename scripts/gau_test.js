var k = require('./../k_globals/koala.js')
var dataB = require('./database.js')

//var data = {header: "database", content: "data from database"};
k.createNode(function(msg){
	function(){
		var executed = false;
		return function(){
			if(!executed){
				executed = true;
				dataB.sendDataZero();
			}
		}
	}
	console.log("createNode " + msg);
	msg = JSON.parse(msg);


	// dataB.retrieveData(msg.id, msg.from, msg.to);

	dataB.retrieveData(msg.id, 1449953366000,1449953378440)
	// dataB.retrieveData(msg.id, 1449676695680,1449676698689)
	//k.send(JSON.stringify(data));
});

console.log('waiting for request');

