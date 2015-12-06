//require WLS
var k = require('./../../../k_globals/koala.js')


//script of the operator
k.createNode(function(data) {

	
	var data = JSON.parse(data);
	//console.log(data);
	k.callFunction('updateGraphLine', [data.volume, data.light ,data.time]);
	k.callFunction('updateGraphBar', [data.volume, data.light, data.time]);

});

//create the hidden div that will contain the received data
var htmlString ='<input name="fromDate" type="text" value="Insert date from to" id="inputDate"></input>'+
				'<div id="graph-container">' +
				'<div id="radarData" style="display:none;"></div>' +
				'<canvas id="canvasRadar" width="400px" height="400px"></canvas>' +
				'<div id="newdata" style="display:none;"></div>' +
				'<canvas id="canvas" width="400px" height="400px"></canvas>' +
				'<div id="legend" class="chart-legend"></div>'+
				'<button id="button">click me</button>'+
				'<div id="newdata1" style="display:none;"> Hello</div>' +
 				'<canvas id="canvas1" width="400px" height="400px"></canvas>' +
 				'<div id="legend1" class="chart-legend"></div>'+
				'</div>';

k.createHTML('html', htmlString);
// k.createHTML('graph-container', '<div id="graph-container">');
// k.createHTML('data', '<div id="newdata" style="display:none;"></div>');
// k.createHTML('canvas', '<canvas id="canvas" width="400px" height="400px"></canvas>');
// k.createHTML('data1', '<div id="newdata1" style="display:none;"> Hello</div>');
// k.createHTML('canvas1', '<canvas id="canvas1" width="400px" height="400px"></canvas>');
// k.createHTML('graph-container-close','</div>');

//add the graph script
k.createScript('our_graph1', 'js/scripts/g_graph.js');

//css
k.createCSS('css_g', '/css/g_t.css');
