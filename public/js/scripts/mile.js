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
    // console.log("sensors", sensors);
    // console.log("table", table);
    // console.log("data", data);


    if(data.header === "browser"){
        // var data = JSON.parse(data);
        // console.log("browser request", data)
        k.send(JSON.stringify(data));
        


    }else if(data.header === "database"){
        console.log("database data", data)
        k.callFunction("editArchives", [data.content])

    }else{


    var ht = {
        1: ["updateGraphLine","updateGraphBar"],
        2: ["updateGraphLine1","updateGraphBar1"]
    }

    if(ht[data._id]){
        console.log('This is entire data before: ', data);
        k.callFunction(ht[data._id][0], [data.volume, data.light, data.temperature, data.time])
        k.callFunction(ht[data._id][1], [data.volume, data.light, data.temperature, data.time])
        k.callFunction("monitorLights", [data._id, data.light])
    }
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
    	// '<div class="whitespace"></div>' +

    	// INDIVIDUAL SECTIONS BEGIN HERE
    	// ABOUT SECTION: This is where we write about the team, wls, etc
   		'<div id="info-page" class="hidden">'+ 
        '<div class="whitespace"></div>'+
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
        '</canvas>'+

        '<div class="text-input" id="block-input1">'+
                '<br>'+
            '<p>'+
                'From: '+
            '</p>'+
            '<input type="text" name="From" placeholder=""mm/dd/yyyy hh:mm:ss"" id="db-from1"/>'+ 
            '<select id="sel-from11"/>' + '<select id="sel-from12"/>' + '<select id="sel-from13"/>' +
            '<p>'+
                '<br>'+
                'To: '+
            '</p>'+
            '<input type="text" name="To" placeholder="Enter date" id="db-to1"/>'+
            '<select id="sel-to11"/>' + '<select id="sel-to12"/>' + '<select id="sel-to13"/>' +
            '<span class="fa fa-search search-button" onclick="getDataFromDatabase(1)"></span>'+
            // '<button class="fa fa-search search-button" onclick="getDataFromDatabase(1)"></button>'+
        '</div>'+

        '<div class="text-input" id="block-input2">'+
            '<br>'+
            '<p>'+
            'From: '+
            '</p>'+
            '<input type="text" name="From" placeholder=""mm/dd/yyyy hh:mm:ss"" id="db-from2"/>'+ 
            '<select id="sel-from21"/>' + '<select id="sel-from22"/>' + '<select id="sel-from23"/>' +
            '<p>'+
            '<br>'+
            'To: '+
            '</p>'+
            '<input type="text" name="To" placeholder=""mm/dd/yyyy hh:mm:ss"" id="db-to2"/>'+
            '<select id="sel-to21"/>' + '<select id="sel-to22"/>' + '<select id="sel-to23"/>' +
            '<span class="fa fa-search search-button" onclick="getDataFromDatabase(2)"></span>'+
            // '<button class="fa fa-search search-button" onclick="getDataFromDatabase(2)"></button>'+
        '</div>'+

        '<div class="text-input" id="block-input3">'+
            '<br>'+
            '<p>'+
            'From: '+
            '</p>'+
            '<input type="text" name="From" placeholder=""mm/dd/yyyy hh:mm:ss"" id="db-from3"/>'+
            '<select id="sel-from31"/>' + '<select id="sel-from32"/>' + '<select id="sel-from33"/>' +
            '<p>'+
            '<br>'+
            'To: '+
            '</p>'+
            '<input type="text" name="To" placeholder=""mm/dd/yyyy hh:mm:ss"" id="db-to3"/>'+
            '<select id="sel-to31"/>' + '<select id="sel-to32"/>' + '<select id="sel-to33"/>' +
            '<span class="fa fa-search search-button" onclick="getDataFromDatabase(3)"></span>'+
            // '<button class="fa fa-search search-button" onclick="getDataFromDatabase(3)"></button>'+
        '</div>'+
       '<canvas id="canvasArch" width="400px" height="400px"></canvas>'+
    '</div>'+
    	// ACTIVATE LIGHTS SECTION
    	'<div id="light-bulb" class="hidden">'+
        '<div class="whitespace"></div>'+
        '<p>'+
            'When the light is off, you can choose to turn on the light in the desired part of the openspace.'+
        '</p>'+
    	// Here we make the buttons for the tessel
    	// ---Andrea's Implementation :)
		'<canvas id="lightCanvas" class="canvasSizeLights">'+
        'Your browser does not support the canvas element.'+
        '</canvas>'+
        '<div class="orderSwitches">'+
        '<div class="onoffswitch1" id="onoffswitch1">'+
            '<p>'+
            'Turn on the light?'+
            '</p>'+
            '<input type="checkbox" name="onoffswitch1" class="onoffswitch-checkbox1" id="myonoffswitch1" checked>'+
            '<label class="onoffswitch-label1" for="myonoffswitch1">'+
                '<span class="onoffswitch-inner1"></span>'+
                '<span class="onoffswitch-switch1"></span>'+
            '</label>'+
        '</div>'+
        // '<button class="fa fa-search search-button" onclick="turnOnLight(1)"></button>'+
        '<div class="onoffswitch2" id="onoffswitch2">'+
            '<p>'+
            'Turn on the light?'+
            '</p>'+
            '<input type="checkbox" name="onoffswitch2" class="onoffswitch-checkbox2" id="myonoffswitch2" checked>'+
            '<label class="onoffswitch-label2" for="myonoffswitch2">'+
                '<span class="onoffswitch-inner2"></span>'+
                '<span class="onoffswitch-switch2"></span>'+
            '</label>'+
        '</div>'+

        '<div class="onoffswitch3" id="onoffswitch3">'+
            '<p>'+
            'Turn on the light?'+
            '</p>'+
            '<input type="checkbox" name="onoffswitch3" class="onoffswitch-checkbox3" id="myonoffswitch3" checked>'+
            '<label class="onoffswitch-label3" for="myonoffswitch3">'+
                '<span class="onoffswitch-inner3"></span>'+
                '<span class="onoffswitch-switch3"></span>'+
            '</label>'+
        '</div>'+
        '</div>'+
		// ---------------------------
    	'</div>' +
    	'<div id="graph-container" class="">' +
        '<div class="whitespace"></div>'+
                '<div>'+
                    '<div id="graph-selector"> <div class="fa">Show graphs...</div>'+
                        '<div id="menu-button" class="fa fa-sort-down fa-lg"></div>'+
                    '</div>'+
                    '<div id="drop-down-menu" class="hidden">'+
                        '<div id="menu-useless-arrow" class="fa fa-sort-up fa-3x"></div>'+
                        '<div id="menu-box">'+
                            '<div id="all" class="fa menu-tab">Show All</div>'+
                            '<div id="one" class="fa menu-tab">Zone 1</div>'+
                            '<div id="two" class="fa menu-tab">Zone 2</div>'+
                            '<div id="three" class="fa menu-tab">Zone 3</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
				// '<span id="arrow" class="fa fa-refresh" ></span>' +
                '<div class="graph-group">'+
				    '<div id="newdata0" style="display:none;">'+sensors.length +
                    '</div>' +
				    '<div id="c" class="">' + 
				    '<canvas style="padding-left: 10%;" id="canvas0"  width="400px" height="400px"></canvas>' +
				    // legend + 
				    '</div>' + 
				    '<div id="newdata1" style="display:none;"> Hello</div>' +
				    '<div id="c1" class="">' +
 				   '<canvas style="padding-left: 10%;" id="canvas1"  width="400px" height="400px"></canvas>' +
 				   // legend +
				    '</div>' +
                    '<br>'+
                    '<div class="data-projection">'+
                        '<div>'+
                            '<div class="fa fa-lg volume_color">Current Volume</div>' +
                            '<div id="vol_1" class="fa fa-lg value volume_color"></div>'+
                        '</div>'+
                        '<div> '+
                            '<div class="fa fa-lg light_color">Current Light</div>' +
                            '<div id="light_1" class="fa fa-lg value light_color"></div>'+
                        '</div>'+
                        '<div> '+
                            '<div class="fa fa-lg temp_color" >Current Temperature</div>' +
                            '<div id="temp_1" class="fa fa-lg value temp_color" ></div>'+
                        '</div>'+
                    '</div>'+
                '</div>' +
                '<div class="graph-group">'+
                    '<div id="newdata2" style="display:none;"> Hello</div>' +
                    '<div id="c2" class="">' +
                        '<canvas style="padding-left: 10%;" id="canvas2"  width="400px" height="400px"></canvas>' +
                        // legend +
                    '</div>' +
                    '<div id="newdata3" style="display:none;"> Hello</div>' +
                    '<div id="c3" class="">' +
                        '<canvas style="padding-left: 10%;" id="canvas3"  width="400px" height="400px"></canvas>' +
                        // legend +
                    '</div>' +
                    '<div class="data-projection">'+
                        '<div>'+
                            '<div class="fa fa-lg volume_color" >Current Volume</div>' +
                            '<div id="vol_2" class="fa fa-lg value volume_color"></div>'+
                        '</div>'+
                        '<div> '+
                            '<div class="fa fa-lg light_color" >Current Light</div>' +
                            '<div id="light_2" class="fa fa-lg value light_color" ></div>'+
                        '</div>'+
                        '<div> '+
                            '<div class="fa fa-lg temp_color">Current Temperature</div>' +
                            '<div id="temp_2" class="fa fa-lg value temp_color"></div>'+
                        '</div>'+
                    '</div>'+
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
k.createScript('pikaday', 'js/scripts/pikaday.js');

//connect browser with browser operator
k.registerProducer('producer');

//css
k.createCSS('csstest', '/css/test.css');
k.createCSS('css_datepiker', '/css/pikaday.css');
