/**
 * New node file
 */


var k = require('./../k_globals/koala.js')


setInterval(function(msg) {

	k.send('ping');
	console.log(msg);

}, 1000);



console.log('ping started')