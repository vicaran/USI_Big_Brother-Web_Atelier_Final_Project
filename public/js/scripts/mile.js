//require WLS
var k = require('./../../../k_globals/koala.js')

var sensors = {};
//script of the operator
k.createNode(function(data){ 

    var data = JSON.parse(data);

    sensors[data._id] = true;

    var table = {};

    for(e in sensors){
        if(sensors[data._id]){
            table[data._id] = "updateGraph" + data._id
        }
    }
    console.log(sensors);
    console.log(table);
    console.log(data);


    var ht = {
        1: ["updateGraphLine","updateGraphBar"],
        2: ["updateGraphLine1","updateGraphBar1"]
    }

    if(ht[data._id]){
        k.callFunction(ht[data._id][0], [data.volume, data.light, data.temperature, data.time])
        k.callFunction(ht[data._id][1], [data.volume, data.light, data.temperature, data.time])
    }
});

//create the hidden div that will contain the received data
var about_section = '<div class="fa card">'+
'TITLE' +
'<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis vulputate sem, commodo suscipit nisi congue ultricies. Sed a pharetra metus, at pulvinar neque. Maecenas porta suscipit ullamcorper. Mauris euismod rutrum eros ac bibendum. Curabitur eget quam ut augue sodales tristique a in quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit ipsum sed venenatis scelerisque. Vestibulum vulputate tellus a sapien condimentum interdum. Nam ut augue a diam vulputate consequat. Morbi vitae vestibulum tortor.<br><br>'+
'Donec molestie maximus velit, vitae venenatis massa tristique non. Aliquam erat volutpat. Duis imperdiet tempor elit ut sollicitudin. Fusce at purus vehicula, venenatis libero sit amet, faucibus eros. Maecenas id aliquam magna. Maecenas scelerisque sapien a metus iaculis facilisis. Duis tincidunt scelerisque sem et tempus. Phasellus iaculis tellus in ex pretium, a pellentesque justo pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum aliquet dui, sollicitudin pharetra lectus dapibus in. Nullam porta erat ut pellentesque tristique.</div>'+
'</div>'





var legend = '<div class="key">'+
            	'<div style="padding-left: 11px">LEGEND</div>'+
            	'<div class="key_entry">'+
                    '<div class="volume_graph_key"></div>'+
                    '<div class="light_graph_key"></div>'+
                    '<div class="temp_graph_key"></div>'+
                '</div>'+
            	'<div class="key_name">'+
                '<div>Volume</div>'+
            	'<div>Light</div>'+
                '<div>Temp</div>'+
                '</div>'+
        	'</div>'






var htmlString = 
// HEADER
'<div id="navbar">' +
    		'<div class="nav-panel">' +
    			'<div id="live-feed" class="fa fa-bar-chart-o"> &nbsp;LIVE FEED</div>' +
    			'<div class="nav-line"></div>' +
    		'</div>' +
    		'<div class="nav-panel">' +
    			'<div id="archives" class="fa fa-database">&nbsp; ARCHIVES</div>' +
    			'<div class="nav-line"></div>' +
    		'</div>' +
    		'<div class="nav-panel">' +
    			'<div id="activate-lights" class="fa fa-lightbulb-o"> &nbsp; ACTIVATE LIGHTS</div>' +
    			'<div class="nav-line"></div>' +
    		'</div>' +
    		'<div class="nav-panel">' +
    			'<div id="about" class="fa fa-info-circle">&nbsp; ABOUT</div>' +
    			'<div class="nav-line"></div>' +
    		'</div>' +
    	'</div>' +
    	'<div class="whitespace"></div>' +

    	// INDIVIDUAL SECTIONS BEGIN HERE
    	// ABOUT SECTION: This is where we write about the team, wls, etc
   		'<div id="info-page" class="hidden">'+ 
		about_section+
    	about_section +
    	'</div>' +
    	// DATABASE GRAPHS
    	'<div id="old-graphs" class="hidden">'+
        // ---Andrea's Implementation :)
        '<p>'+
            'Click the part of the openspace you want to receive information about.'+
        '</p>'+

    	'<canvas id="positionCanvas" class="canvasSize" style="border:5px solid #d3d3d3;">'+
            'Your browser does not support the canvas element.'+

            '<div class="text-input" id="block-input1">'+
                '<input type="text" name="From" placeholder="Enter date" id="db-from1"/>'+
                '<div class="fa fa-search search-button"></div>'+
            '</div>'+

            '<div class="text-input" id="block-input2">'+
                '<input type="text" name="From" placeholder="Enter date" id="db-from2"/>'+
                '<div class="fa fa-search search-button"></div>'+
            '</div>'+

            '<div class="text-input" id="block-input3">'+
                '<input type="text" name="From" placeholder="Enter date" id="db-from3"/>'+
                '<div class="fa fa-search search-button"></div>'+
            '</div>'+

        '</canvas>'+
            
        '</div>' +
    	
    	// ACTIVATE LIGHTS SECTION
    	'<div id="light-bulb" class="hidden">'+
    	// Here we make the buttons for the tessel
    	// ---Andrea's Implementation :)
		'<canvas id="lightCanvas" class="canvasSize">'+
        'Your browser does not support the canvas element.'+
        '</canvas>'+
		// ---------------------------
    	// '<div id="tessel1" class="tessel-button">Sector 1</div>'+
    	'</div>' +
    	'<div id="graph-container" class="">' +
				'<span id="arrow" class="fa fa-refresh" ></span>' +
                '<div class="graph-group">'+
				    '<div id="newdata0" style="display:none;">'+sensors.length +
                    '</div>' +
				    '<div id="c" class="">' + 
				    '<canvas id="canvas0"  width="400px" height="400px"></canvas>' +
				    legend + 
				    '</div>' + 
				    '<div id="newdata1" style="display:none;"> Hello</div>' +
				    '<div id="c1" class="">' +
 				   '<canvas id="canvas1"  width="400px" height="400px"></canvas>' +
 				   legend +
				    '</div>' +
                    '<br>'+
                '</div>' +
                '<div class="graph-group">'+

                '<div id="newdata2" style="display:none;"> Hello</div>' +
                '<div id="c2" class="">' +
                '<canvas id="canvas2"  width="400px" height="400px"></canvas>' +
                legend +
                '</div>' +
                '<div id="newdata3" style="display:none;"> Hello</div>' +
                '<div id="c3" class="">' +
                '<canvas id="canvas3"  width="400px" height="400px"></canvas>' +
                legend +
                '</div>' +
                '</div>' +
				'</div>' + 
				// FOOTER
				'<div id="footer">' +
            '<div class="fa"> Provided with &nbsp;</div>' +
            '<i class="fa fa-heart "  style="color:#871F17;"></i>' +
            '<div class="fa">&nbsp; The Big Brother Team</div>' +
    '</div>';
k.createHTML('pimmi', htmlString);
// k.createHTML('graph-container', '<div id="graph-container">');
// k.createHTML('data', '<div id="newdata" style="display:none;"></div>');
// k.createHTML('canvas', '<canvas id="canvas" width="400px" height="400px"></canvas>');
// k.createHTML('data1', '<div id="newdata1" style="display:none;"> Hello</div>');
// k.createHTML('canvas1', '<canvas id="canvas1" width="400px" height="400px"></canvas>');
// k.createHTML('graph-container-close','</div>');

//add the graph script
k.createScript('our_graph', 'js/scripts/mile_g.js');

//css
k.createCSS('csstest', '/css/test.css')
