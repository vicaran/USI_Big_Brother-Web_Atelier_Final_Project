var k = require('./../k_globals/koala.js')
var dataB = require('./database.js')

k.createNode(function(msg){
	console.log("createNode *S*DAHVHDKSHJGDGSHGJKDSAKJADS " + msg);
	msg = JSON.parse(msg);

	dataB.retrieveData(msg.id, msg.from, msg.to);
});

console.log('waiting for request');

