var k = require('./../k_globals/koala.js')
var dataB = require('./database.js')

var data = {header: "database", content: "data from database"};

k.createNode(function(msg){
	console.log("createNode " + msg);
	d = dataB.retrieveData(1449676695680,1449676698689);
	console.log("data in createNode", d)
	k.send(JSON.stringify(data));	
});

console.log('waiting for request');