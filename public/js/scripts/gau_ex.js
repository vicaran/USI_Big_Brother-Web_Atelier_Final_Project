//require WLS
var k = require('./../../../k_globals/koala.js')


//script of the operator
k.createNode(function(data) {
	var ht = {
		"temp": "updateGraphTemp",
		"noise": "updateGraphNoise",
	};

	var data = JSON.parse(data);
	k.callFunction(ht['noise'], [data.volume,data.light, data.time]);
	console.log('fuck gotier')

});

//create the hidden div that will contain the received data
k.createHTML('data', '<div id="newdata" style="display:none;"> data</div>');
//k.createHTML('canvas', '<canvas id="canvas" width="400px" height="400px"></canvas>');



//add the graph script
k.createScript('our_graph', 'js/scripts/gau_graph.js');