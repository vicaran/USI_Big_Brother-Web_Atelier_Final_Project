var k = require('./../k_globals/koala.js')
var dataB = require('./database.js')

//var data = {header: "database", content: "data from database"};

k.createNode(function(msg){
	console.log("createNode " + msg);
	msg = JSON.parse(msg);


	dataB.retrieveData(msg.id, msg.from, msg.to);

<<<<<<< HEAD
	dataB.retrieveData(msg.id, 1449860373114,1449860383144)
=======
	// dataB.retrieveData(msg.id, 1449676695680,1449676698689)
>>>>>>> origin/master
	//k.send(JSON.stringify(data));	
});

console.log('waiting for request');

