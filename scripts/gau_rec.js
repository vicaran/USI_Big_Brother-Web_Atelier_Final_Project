//require WLS
var k = require('./../../../k_globals/koala.js')


//script of the operator
k.createNode(function(data) {
	var data = JSON.parse(data);
	console.log(data);

});
