var k = require('./../k_globals/koala.js')

var data = {header: "browser", content: "hello"};

setInterval(function(msg) {

	k.send(JSON.stringify(data));

}, 1000);


k.createNode(function(msg){
	console.log("createNode " + msg);	
});

console.log('Sending data... ');