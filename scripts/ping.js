/**
 * New node file
 */


var k = require('./../k_globals/koala.js')


setInterval(function(msg) {

	k.send('ping');

}, 1000);


k.send('sending ping... ');
console.log('ping started');