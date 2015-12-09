var k = require('./../k_globals/koala.js')

var data = {header: "database", content: "data from database"};

k.createNode(function(msg){
	console.log("createNode " + msg);
	k.send(JSON.stringify(data));	
});

console.log('waiting for request');