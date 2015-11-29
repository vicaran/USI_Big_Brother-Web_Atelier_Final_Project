var k = require('./../k_globals/koala.js')

var data = {header: 1, content: "hello"};
setInterval(function(msg) {

	k.send(JSON.stringify(data));

}, 1000);

console.log('Sending data... ');