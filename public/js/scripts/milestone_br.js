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
var about_section = '<div class="fa card">'+
'TITLE' +
'<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis vulputate sem, commodo suscipit nisi congue ultricies. Sed a pharetra metus, at pulvinar neque. Maecenas porta suscipit ullamcorper. Mauris euismod rutrum eros ac bibendum. Curabitur eget quam ut augue sodales tristique a in quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit ipsum sed venenatis scelerisque. Vestibulum vulputate tellus a sapien condimentum interdum. Nam ut augue a diam vulputate consequat. Morbi vitae vestibulum tortor.<br><br>'+
'Donec molestie maximus velit, vitae venenatis massa tristique non. Aliquam erat volutpat. Duis imperdiet tempor elit ut sollicitudin. Fusce at purus vehicula, venenatis libero sit amet, faucibus eros. Maecenas id aliquam magna. Maecenas scelerisque sapien a metus iaculis facilisis. Duis tincidunt scelerisque sem et tempus. Phasellus iaculis tellus in ex pretium, a pellentesque justo pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum aliquet dui, sollicitudin pharetra lectus dapibus in. Nullam porta erat ut pellentesque tristique.</div>'+
'</div>'
var legend = '<div class="key">'+
            	'<div style="padding-left: 11px">LEGEND</div>'+
            	'<div class="key_entry"><div class="volume_graph_key"></div>'+
            	'<div class="light_graph_key"></div></div>'+
            	'<div class="key_name"><div>Volume</div>'+
            	'<div>Light</div></div>'+
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
    	// This is where we write about the team, wls, etc
   		'<div id="info-page" class="hidden">'+ 
		about_section+
    	about_section +
    	'</div>' +
    	// DATABASE GRAPHS
    	'<div id="old-graphs" class="hidden">'+
    	'<div class="fa card">'+
    	'<div class="postpone">KEEP WATCHING TO FIND OUT...</div>'+
    	'</div>'+
    	'</div>' +
    	// ACTIVATE LIGHTS SECTION
    	'<div id="light-bulb" class="hidden">'+
    	// Here we make the buttons for the tessel
    	'<div id="tessel1" class="tessel-button">Sector 1</div>'+
    	'</div>' +
    	'<div id="graph-container" class="">' +
				'<span id="arrow" class="fa fa-refresh" ></span>' +
				'<div id="newdata" style="display:none;"></div>' +
				'<div id="c" class="">' + 
				'<canvas id="canvas"  width="400px" height="400px"></canvas>' +
				legend + 
				'</div>' +
				'<div id="newdata1" style="display:none;"> Hello</div>' +
				'<div id="c1" class="">' +
 				'<canvas id="canvas1"  width="400px" height="400px"></canvas>' +
 				legend +
				'</div>' +
				'</div>' + 
				// FOOTER
				'<div id="footer">' +
            '<div class="fa"> With &nbsp;</div>' +
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
k.createScript('our_graph', 'js/scripts/milestone_graph.js');

//css
k.createCSS('csstest', '/css/test.css')
