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
var legend = '<div class="key">'+
           		'<div style="padding-left: 11px">LEGEND</div>'+
            	'<div class="key_entry"><div class="volume_graph_key"></div>'+
            	'<div class="light_graph_key"></div></div>'+
            	'<div class="key_name"><div>Volume</div>'+
            	'<div>Light</div></div>'+
        	'</div>'
var htmlString = '<div id="navbar">'+
            '<div class="nav-panel">'+
                '<div id="home" class="fa fa-home">&nbsp; HOME</div>'+
                '<div class="nav-line"></div>'+
            '</div>'+
            '<div class="nav-panel">'+
                '<div id="live-feed" class="fa">LIVE FEED</div>'+
                '<div class="nav-line"></div>'+
            '</div>'+
            '<div class="nav-panel">'+
                '<div id="archives" class="fa">ARCHIVES</div>'+
                '<div class="nav-line"></div>'+
            '</div>'+
            '<div class="nav-panel">'+
                '<div id="activate-lights" class="fa fa-lightbulb-o">&nbsp; ACTIVATE LIGHTS</div>'+
                '<div class="nav-line"></div>'+
            '</div>'+
        '</div>'+
       '<div id="homepage" > This is the Home </div>'+
        '<div id="old-graphs"  class="hidden"> Please choose a date and time</div>'+
        '<div id="light-bulb"  class="hidden"><i class="fa fa-lightbulb-o fa-5x fa-pulse"></i></div>'+
                    <'div id="graph-container" class="hidden" >'+
                        '<span id="arrow" class="fa fa-refresh" ></span>'+
                        '<div id="newdata" style="display:none;"></div>'+
                        '<div id="c" class="">'+
                            '<canvas id="canvas"  width="400px" height="400px"></canvas>'+
                            '<div class="key">'+
                                '<div style="padding-left: 11px">LEGEND</div>'+
                                '<div class="key_entry">'+
                                    '<div class="volume_graph_key"></div>'+
                                    '<div class="light_graph_key"></div>'+
                                '</div>'+
                                '<div class="key_name">'+
                                    '<div>Volume</div>'+
                                    '<div>Light</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div id="newdata1" style="display:none;"> Hello</div>'+
                        '<div id="c1" class="">'+
                            '<canvas id="canvas1"  width="400px" height="400px"></canvas>'+
                            '<div class="key">'+
                                '<div style="padding-left: 11px">LEGEND</div>'+
                                '<div class="key_entry"><div class="volume_graph_key"></div>'+
                                    '<div class="light_graph_key"></div></div>'+
                                '<div class="key_name"><div>Volume</div>'+
                                    '<div>Light</div></div>'+
                            '</div>'+
                        '</div>'+
       ' </div>';
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
