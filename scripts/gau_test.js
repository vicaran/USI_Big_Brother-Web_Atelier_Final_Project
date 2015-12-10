var k = require('./../k_globals/koala.js')
var dataB = require('./database.js')

var data = {header: "database", content: "data from database"};

k.createNode(function(msg){
	console.log("createNode " + msg);
	console.log("data in createNode", dataB.retrieveData(1449676695680,1449676698689))
	k.send(JSON.stringify(data));	
});

console.log('waiting for request');