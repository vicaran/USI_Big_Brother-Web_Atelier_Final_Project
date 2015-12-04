//require WLS
var k = require('./../../../k_globals/koala.js')


//script of the operator
k.createNode(function(data) {

	
	var data = JSON.parse(data);
	console.log(data);
	k.callFunction('updateGraphLine', [data.volume, data.light ,data.time]);
	k.callFunction('updateGraphBar', [data.volume, data.light, data.time]);

});

//create the hidden div that will contain the received data
var htmlString = '<div id="graph-container">' +
				'<i id="arrow" class="fa fa-refresh" style="color: white">SWITCH</i>' +
				'<div id="newdata" style="display:none;"></div>' +
				'<div id="canvas" class="">' + 
				'<canvas width="400px" height="400px"></canvas>' +
				'<div> LEGEND</div>' +
				'</div>' +
				'<div id="newdata1" style="display:none;"> Hello</div>' +
				'<div id="canvas1" class="" >' +
 				'<canvas width="400px" height="400px"></canvas>' +
				'<div> LEGEND</div>' +
				'</div>' +
				'</div>';
k.createHTML('pimmi', htmlString);
// k.createHTML('graph-container', '<div id="graph-container">');
// k.createHTML('data', '<div id="newdata" style="display:none;"></div>');
// k.createHTML('canvas', '<canvas id="canvas" width="400px" height="400px"></canvas>');
// k.createHTML('data1', '<div id="newdata1" style="display:none;"> Hello</div>');
// k.createHTML('canvas1', '<canvas id="canvas1" width="400px" height="400px"></canvas>');
// k.createHTML('graph-container-close','</div>');

//add the graph script
k.createScript('our_graph', 'js/scripts/milestone_graph.js');

//css
k.createCSS('csstest', '/css/test.css')
