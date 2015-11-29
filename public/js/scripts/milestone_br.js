//require WLS
var k = require('./../../../k_globals/koala.js')


//script of the operator
k.createNode(function(data) {

	
	var data = JSON.parse(data);
	console.log(data);
	k.callFunction('updateGraph', [data.volume, data.light ,data.time]);

});

//create the hidden div that will contain the received data
k.createHTML('data', '<div id="newdata" style="display:none;"> Hello</div>');
k.createHTML('canvas', '<canvas id="canvas" width="400px" height="400px"></canvas>');




//add the graph script
k.createScript('our_graph', 'js/scripts/milestone_graph.js');