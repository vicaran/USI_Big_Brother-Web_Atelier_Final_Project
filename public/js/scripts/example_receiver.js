//require WLS
var k = require('./../../../k_globals/koala.js')


//script of the operator
k.createNode(function(data) {
	var data = JSON.parse(data);
	var drawGraph = '';
	if(data.header.type == "temp"){
		drawGraph = "updateGraphTemp";
	}
	else if(data.header.type == "noise"){
		drawGraph =  "updateGraphNoise";
	}

	k.callFunction(drawGraph, [data.content, data.time]);
});

//create the hidden div that will contain the received data
k.createHTML('data', '<div id="newdata" style="display:none;"></div>');
k.createHTML('canvas', '<canvas id="canvas" width="500px" height="500px"></canvas>');
<<<<<<< HEAD
k.createHTML('canvas', '<canvas id="canvas1" width="500px" height="500px"></canvas>');
=======
k.createHTML('canvas', '<canvas id="canvas2" width="500px" height="500px"></canvas>');
>>>>>>> d53e3475a9f33cf26cb70a10b0984327cf8daec4


//add the graph script
k.createScript('our_graph', 'js/scripts/gau_graph.js');
