/**
 * New node file
 */


var k = require('./../k_globals/koala.js')


setInterval(function(msg) {

	k.send('ping');
	k.createNode(function(m){
		console.log(m);
	});

}, 1000);



console.log('ping started')