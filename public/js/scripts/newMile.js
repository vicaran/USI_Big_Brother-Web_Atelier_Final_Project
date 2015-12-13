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
    console.log("sensors", sensors);
    console.log("table", table);
    console.log("data", data);


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


var htmlString = 
// HEADER
'<nav class="nav">'+
        '<div class="burger">'+
            '<div class="burger__patty"></div>'+
        '</div>'+
        '<ul class="nav__list">'+
            '<li class="nav__item">'+
                '<a href="#liveData" class="nav__link c-blue"><i class="fa fa-camera-retro"></i></a>'+
            '</li>'+
            '<li class="nav__item">'+
                '<a href="#2" class="nav__link c-yellow scrolly"><i class="fa fa-bolt"></i></a>'+
            '</li>'+
            '<li class="nav__item">'+
                '<a href="#3" class="nav__link c-red"><i class="fa fa-music"></i></a>'+
            '</li>'+
            '<li class="nav__item">'+
                '<a href="#4" class="nav__link c-green"><i class="fa fa-paper-plane"></i></a>'+
            '</li>'+
        '</ul>'+
    '</nav>'+
    '<section class="panel b-blue" id="liveData">'+
        '<article class="panel__wrapper">'+
            '<div class="panel__content">'+
                '<h1 class="panel__headline"><i class="fa fa-camera-retro"></i>&nbsp;Live Data</h1>'+
                '<div class="panel__block"></div>'+
                '<div id="graph-container" class=""> '+
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
                '<div class="graph-group">'+
            '<div id="newdata0" style="display:none;">'+sensors.length+
                    '</div>'+
            '<div id="c" class="">'+ 
            '<canvas style="padding-left: 10%;" id="canvas0"  width="400px" height="400px"></canvas>'+
            '</div>'+
            '<div id="newdata1" style="display:none;"> Hello</div>'+
            '<div id="c1" class="">'+
           '<canvas style="padding-left: 10%;" id="canvas1"  width="400px" height="400px"></canvas>'+
            '</div>'+
                    '<br>'+
                    '<div class="data-projection">'+
                        '<div>'+
                            '<div class="fa fa-lg" style="color:rgba(215,54,139,1);">Current Volume</div>'+
                            '<div class="fa fa-lg value" style="color:rgba(215,54,139,1);">X</div>'+
                        '</div>'+
                        '<div>'+ 
                            '<div class="fa fa-lg" style="color:rgba(151,187,205,1);">Current Light</div>'+ 
                            '<div class="fa fa-lg value" style="color:rgba(151,187,205,1);">X</div>'+
                        '</div>'+
                        '<div>'+ 
                            '<div class="fa fa-lg" style="color:rgba(241,85,45,1);">Current Temperature</div>'+ 
                            '<div class="fa fa-lg value" style="color:rgba(241,85,45,1);">X</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+ 
                '<div class="graph-group">'+
                    '<div id="newdata2" style="display:none;"> Hello</div>'+ 
                    '<div id="c2" class="">'+
                        '<canvas style="padding-left: 10%;" id="canvas2"  width="400px" height="400px"></canvas>'+ 
                    '</div>'+ 
                    '<div id="newdata3" style="display:none;"> Hello</div>'+ 
                    '<div id="c3" class="">'+
                        '<canvas style="padding-left: 10%;" id="canvas3"  width="400px" height="400px"></canvas>'+ 
                    '</div>'+
                    '<div class="data-projection">'+
                        '<div>'+
                            '<div class="fa fa-lg" style="color:rgba(215,54,139,1);">Current Volume</div>'+ 
                            '<div class="fa fa-lg value" style="color:rgba(215,54,139,1);">X</div>'+
                        '</div>'+
                        '<div>'+ 
                            '<div class="fa fa-lg" style="color:rgba(151,187,205,1);">Current Light</div>'+ 
                            '<div class="fa fa-lg value" style="color:rgba(151,187,205,1);">X</div>'+
                        '</div>'+
                        '<div>'+
                            '<div class="fa fa-lg" style="color:rgba(241,85,45,1);">Current Temperature</div>'+ 
                            '<div class="fa fa-lg value" style="color:rgba(241,85,45,1);">X</div>'+
                        '</div>'+
                    '</div>'+
                    '</div>'+ 
        '</div>'+ 
        // <div id="footer"> 
        //     <div class="fa"> Provided with &nbsp;</div> 
        //     <i class="fa fa-heart "  style="color:#871F17;"></i> 
        //     <div class="fa">&nbsp; The Big Brother Team</div> 
        // </div>
            '</div>'+
        '</article>'+
    '</section>'+
    '<section class="panel b-yellow" id="2">'+
        '<article class="panel__wrapper">'+
            '<div class="panel__content">'+
                '<h1 class="panel__headline"><i class="fa fa-bolt"></i>&nbsp;Archive</h1>'+
                '<div class="panel__block"></div>'+
                '<p>'+
                    'Click the part of the openspace you want to receive information about.'+
                '</p>'+
                '<canvas id="positionCanvas" class="canvasSize" style="border:5px solid #d3d3d3;">'+
                    'Your browser does not support the canvas element.'+
                '</canvas>'+
                '<div class="text-input" id="block-input1">'+
                    '<br>'+
                    '<p>'+
                        'From:'+
                    '</p>'+
                    '<input type="text" name="From" placeholder="" mm/dd/yyyy hh:mm:ss "" id="db-from1" />'+
                    '<p>'+
                        '<br> To:'+
                    '</p>'+
                    '<input type="text" name="To" placeholder="Enter date" id="db-to1" />'+
                    '<span class="fa fa-search search-button" onclick="getDataFromDatabase(1)"></span>'+
                    // '<button class="fa fa-search search-button" onclick="getDataFromDatabase(1)"></button>'+
                '</div>'+
                '<div class="text-input" id="block-input2">'+
                    '<br>'+
                    '<p>'+
                        'From:'+
                    '</p>'+
                    '<input type="text" name="From" placeholder="" mm/dd/yyyy hh:mm:ss "" id="db-from2" />'+
                    '<p>'+
                        '<br> To:'+
                    '</p>'+
                    '<input type="text" name="To" placeholder="" mm/dd/yyyy hh:mm:ss "" id="db-to2" />'+
                    '<span class="fa fa-search search-button" onclick="getDataFromDatabase(2)"></span>'+
                    // '<button class="fa fa-search search-button" onclick="getDataFromDatabase(2)"></button>'+
                '</div>'+
                '<div class="text-input" id="block-input3">'+
                    '<br>'+
                    '<p>'+
                        'From:'+
                    '</p>'+
                    '<input type="text" name="From" placeholder="" mm/dd/yyyy hh:mm:ss "" id="db-from3" />'+
                    '<p>'+
                        '<br> To:'+
                    '</p>'+
                    '<input type="text" name="To" placeholder="" mm/dd/yyyy hh:mm:ss "" id="db-to3" />'+
                    '<span class="fa fa-search search-button" onclick="getDataFromDatabase(3)"></span>'+
                '</div>'+
                '<canvas id="canvasArch" width="400px" height="400px"></canvas>'+
            '</div>'+
            '</div>'+
            '</div>'+
        '</article>'+
    '</section>'+
    '<section class="panel b-red" id="3">'+
        '<article class="panel__wrapper">'+
            '<div class="panel__content">'+
                '<h1 class="panel__headline"><i class="fa fa-music"></i>&nbsp;Turn On Lights</h1>'+
                '<div class="panel__block"></div>'+
                '<p>'+
                    'When the light is off, you can choose to turn on the light in the desired part of the openspace.'+
                '</p>'+
                '<canvas id="lightCanvas" class="canvasSizeLights">'+
                    'Your browser does not support the canvas element.'+
                '</canvas>'+
                '<div class="orderSwitches">'+
                    '<div class="onoffswitch1" id="onoffswitch1">'+
                        '<p>'+
                            'Turn on?'+
                        '</p>'+
                        '<input type="checkbox" name="onoffswitch1" class="onoffswitch-checkbox1" id="myonoffswitch1" checked>'+
                        '<label class="onoffswitch-label1" for="myonoffswitch1">'+
                            '<span class="onoffswitch-inner1"></span>'+
                            '<span class="onoffswitch-switch1"></span>'+
                        '</label>'+
                    '</div>'+
                    '<div class="onoffswitch2" id="onoffswitch2">'+
                        '<p>'+
                            'Turn on?'+
                        '</p>'+
                        '<input type="checkbox" name="onoffswitch2" class="onoffswitch-checkbox2" id="myonoffswitch2" checked>'+
                        '<label class="onoffswitch-label2" for="myonoffswitch2">'+
                            '<span class="onoffswitch-inner2"></span>'+
                            '<span class="onoffswitch-switch2"></span>'+
                        '</label>'+
                    '</div>'+
                    '<div class="onoffswitch3" id="onoffswitch3">'+
                        '<p>'+
                            'Turn on?'+
                        '</p>'+
                        '<input type="checkbox" name="onoffswitch3" class="onoffswitch-checkbox3" id="myonoffswitch3" checked>'+
                        '<label class="onoffswitch-label3" for="myonoffswitch3">'+
                            '<span class="onoffswitch-inner3"></span>'+
                            '<span class="onoffswitch-switch3"></span>'+
                        '</label>'+
                    '</div>'+
                '</div>'+
        '</article>'+
    '</section>'+
    '<section class="panel b-green" id="4">'+
        '<article class="panel__wrapper">'+
            '<div class="panel__content">'+
                '<h1 class="panel__headline"><i class="fa fa-paper-plane"></i>&nbsp;ABOUT</h1>'+
                '<div class="panel__block"></div>'+
                '<div class="fa card">'+
                    '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis vulputate sem, commodo suscipit nisi congue ultricies. Sed a pharetra metus, at pulvinar neque. Maecenas porta suscipit ullamcorper. Mauris euismod rutrum eros ac bibendum. Curabitur eget quam ut augue sodales tristique a in quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit ipsum sed venenatis scelerisque. Vestibulum vulputate tellus a sapien condimentum interdum. Nam ut augue a diam vulputate consequat. Morbi vitae vestibulum tortor.'+
                        '<br>'+
                        '<br> Donec molestie maximus velit, vitae venenatis massa tristique non. Aliquam erat volutpat. Duis imperdiet tempor elit ut sollicitudin. Fusce at purus vehicula, venenatis libero sit amet, faucibus eros. Maecenas id aliquam magna. Maecenas scelerisque sapien a metus iaculis facilisis. Duis tincidunt scelerisque sem et tempus. Phasellus iaculis tellus in ex pretium, a pellentesque justo pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum aliquet dui, sollicitudin pharetra lectus dapibus in. Nullam porta erat ut pellentesque tristique.'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</article>'+
    '</section>';
k.createHTML('pimmi', htmlString);

//add the graph script
k.createScript('our_graph', 'js/scripts/newMile_g.js');

//connect browser with browser operator
k.registerProducer('producer');

//css
k.createCSS('csstest', '/css/newTest.css')
