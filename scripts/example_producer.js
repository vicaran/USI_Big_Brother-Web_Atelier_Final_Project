var k = require('./../k_globals/koala.js')

setInterval(function(msg) {
	var data = {time: new Date().getTime() ,content: Math.floor((Math.random()*100)+1)};

	k.send(JSON.stringify(data));

}, 1000);

console.log('Sending data... ');
