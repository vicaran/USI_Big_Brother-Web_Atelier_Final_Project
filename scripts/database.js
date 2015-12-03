var k = require('./../k_globals/koala.js')

var addToDatabase = function(data){
	var rcv = JSON.parse(data);
	console.log('Data received', rcv);
}