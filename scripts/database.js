var k = require('./../k_globals/koala.js')

var addToDatabase = function(data, date){
	var rcv = JSON.parse(data);
	console.log('Data received:', rcv);
	console.log('And this is the date: ', date);
	// k.stateful.set(key, value, cb);
}

exports.addToDatabase = addToDatabase;