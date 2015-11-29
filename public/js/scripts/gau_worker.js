var pws = require("./producer_connection.js")
var k = require('./../../../k_globals/koala.js')

/**
 * Main function that receiver the data from network add turn on some leds
 */

var receiveData = function() {
    pws.send('browser');
    
    pws.receive(function(data) {
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
k.createHTML('canvas', '<canvas id="canvas" width="400px" height="400px"></canvas>');
k.createHTML('data1', '<div id="newdata1" style="display:none;"></div>');
k.createHTML('canvas1', '<canvas id="canvas1" width="400px" height="400px"></canvas>');



//add the graph script
k.createScript('our_graph', 'js/scripts/gau_graph.js');
    
};

receiveData();