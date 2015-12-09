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
    	'<canvas id="myCanvas" class="size"
      style="border:5px solid #d3d3d3;">
      Your browser does not support the canvas element.
      </canvas>
    <script>
    var audio1 = 10;
    var audio2 = 80;
    var audio3 = 23;
      function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
      }

      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRec();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

        img1 = new Image();
        img1.src = 'part1.png';
        img2 = new Image();
        img2.src = 'part2.png';
        img3 = new Image();
        img3.src = 'part3.png';

    window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/4;
    var context = canvas.getContext('2d');
    context.globalAlpha = 0.5
    context.drawImage(img1,0,0,canvas.width/3,canvas.height);
    context.drawImage(img2,canvas.width/3,0,canvas.width/3,canvas.height);
    context.drawImage(img3,(canvas.width/3)*2,0,canvas.width/3,canvas.height);

    var interval = setInterval(function(){
        audio1 ++;
        audio2 --;
        audio3 ++;
        if (audio1 == 80){
          audio1 = 0;
        }

        if (audio2 == 0){
          audio2 = 80;
        }

        if (audio3 == 80 || audio3 == 0){
          audio2 = 23;
        }

        if (audio1 < 20){
          context.drawImage(img1,0,0,canvas.width/3,canvas.height);
          context.fillStyle="#00FF00";
          context.fillRect(0,0,canvas.width/3,canvas.height);
        } else if(audio1 > 20 && audio1 < 50){
          context.drawImage(img1,0,0,canvas.width/3,canvas.height);
          context.fillStyle="#0000FF";
          context.fillRect(0,0,canvas.width/3,canvas.height);
        } else if(audio1 > 50){
          context.drawImage(img1,0,0,canvas.width/3,canvas.height);
          context.fillStyle="#FF0000";
          context.fillRect(0,0,canvas.width/3,canvas.height);
        }

        if (audio2 < 20){
          context.drawImage(img2,canvas.width/3,0,canvas.width/3,canvas.height);
          context.fillStyle="#00FF00";
          context.fillRect(canvas.width/3,0,canvas.width/3,canvas.height);
        } else if(audio2 > 20 && audio2 < 50){
          context.drawImage(img2,canvas.width/3,0,canvas.width/3,canvas.height);
          context.fillStyle="#0000FF";
          context.fillRect(canvas.width/3,0,canvas.width/3,canvas.height);
        } else if(audio2 > 50){
          context.drawImage(img2,canvas.width/3,0,canvas.width/3,canvas.height);
          context.fillStyle="#FF0000";
          context.fillRect(canvas.width/3,0,canvas.width/3,canvas.height);
        }

        if (audio3 < 20){
          context.drawImage(img3,(canvas.width/3)*2,0,canvas.width/3,canvas.height);
          context.fillStyle="#00FF00";
          context.fillRect((canvas.width/3)*2,0,canvas.width/3,canvas.height);
        } else if(audio3 > 20 && audio3 < 50){
          context.drawImage(img3,(canvas.width/3)*2,0,canvas.width/3,canvas.height);
          context.fillStyle="#0000FF";
          context.fillRect((canvas.width/3)*2,0,canvas.width/3,canvas.height);
        } else if(audio3 > 50){
          context.drawImage(img3,(canvas.width/3)*2,0,canvas.width/3,canvas.height);
          context.fillStyle="#FF0000";
          context.fillRect((canvas.width/3)*2,0,canvas.width/3,canvas.height);
        }
      },100)
};
    </script>'+
    	
    	'</div>'+
    	'</div>' +
    	// ACTIVATE LIGHTS SECTION
    	'<div id="light-bulb" class="hidden">'+
    	// Here we make the buttons for the tessel
    	// ---Andrea's Implementation :)
		'<a href="#" bubbletooltip="Light is currently: ON"><img src="http://i67.tinypic.com/bg5ovs.png" alt="p1" class="setDimension"></a>' +
        '<a href="#" bubbletooltip="Light is currently: OFF"><img src="http://i66.tinypic.com/2rzrhic.png" alt="p2" class="setDimension"></a>' +
        '<a href="#" bubbletooltip="Light is currently: OFF"><img src="http://i65.tinypic.com/2hmgady.png" alt="p3" class="setDimension"></a>' +
		// ---------------------------
    	// '<div id="tessel1" class="tessel-button">Sector 1</div>'+
    	'</div>' +
    	'<div id="graph-container" class="">' +
				'<span id="arrow" class="fa fa-refresh" ></span>' +
				'<div id="newdata0" style="display:none;">'+sensors.length +'</div>' +
				'<div id="c" class="">' + 
				'<canvas id="canvas0"  width="400px" height="400px"></canvas>' +
				legend + 
				'</div>' + 
				'<div id="newdata1" style="display:none;"> Hello</div>' +
				'<div id="c1" class="">' +
 				'<canvas id="canvas1"  width="400px" height="400px"></canvas>' +
 				legend +
				'</div>' +
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
k.createScript('our_graph', 'js/scripts/mile_g.js');

//css
k.createCSS('csstest', '/css/test.css')
