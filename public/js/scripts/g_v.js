//require WLS
var k = require('./../../../k_globals/koala.js')

//script of the operator
k.createNode(function(data) {
	//console.log(data);
	var data = JSON.parse(data);
	//console.log(data)

	if(data.header === "browser"){
		// var data = JSON.parse(data);
		console.log("if", data)
		k.send(JSON.stringify(data));


	}
	else{

	var ht = {
		"1": ["updateGraphLine","updateGraphBar"],
		"2": ["updateGraphLine1","updateGraphBar1"]
	}

	// console.log("else", data)
	// var data = JSON.parse(data);
	//console.log(data);

	if(ht[data._id]){
		k.callFunction(ht[data._id][0], [data.volume, data.light, data.temperature, data.time])
		k.callFunction(ht[data._id][1], [data.volume, data.light, data.temperature, data.time])
	}
}
	//k.callFunction('updateGraphLine', [data.volume, data.light ,data.time]);
	//k.callFunction('updateGraphBar', [data.volume, data.light, data.time]);

});

//create the hidden div that will contain the received data
var htmlString ='<input name="fromDate" type="text" value="Insert date from to" id="inputDate"></input>'+
                '<button id="button">click me</button>'+
				'<div id="graph-container">' +
				'<div id="newdata0" style="display:none;"></div>' +
				'<canvas id="canvas0" width="400px" height="400px"></canvas>' +
				'<div id="legend0" class="chart-legend"></div>'+

				'<div id="newdata1" style="display:none;"></div>' +
				'<canvas id="canvas1" width="400px" height="400px"></canvas>' +
				'<div id="legend1" class="chart-legend"></div>'+

				'<div id="newdata2" style="display:none;"> Hello</div>' +
 				'<canvas id="canvas2" width="400px" height="400px"></canvas>' +
 				'<div id="legend2" class="chart-legend"></div>'+

 				'<div id="newdata3" style="display:none;"> Hello</div>' +
 				'<canvas id="canvas3" width="400px" height="400px"></canvas>' +
 				'<div id="legend3" class="chart-legend"></div>'+

 				'<div id="newdata4" style="display:none;"> Hello</div>' +
 				'<canvas id="canvas4" width="400px" height="400px"></canvas>' +
 				'<div id="legend4" class="chart-legend"></div>'+
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

k.registerProducer('producer');

//css
k.createCSS('css_g', '/css/g_t.css');
