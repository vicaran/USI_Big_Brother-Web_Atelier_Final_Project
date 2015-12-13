//require WLS
var k = require('./../../../k_globals/koala.js')

// var sensors = {};
// //script of the operator
// k.createNode(function(data){ 

//     var data = JSON.parse(data);

//     sensors[data._id] = true;

//     var table = {};

//     for(e in sensors){
//         if(sensors[data._id]){
//             table[data._id] = "updateGraph" + data._id
//         }
//     }
//     // console.log("sensors", sensors);
//     // console.log("table", table);
//     // console.log("data", data);


//     if(data.header === "browser"){
//         // var data = JSON.parse(data);
//         // console.log("browser request", data)
//         k.send(JSON.stringify(data));
        


//     }else if(data.header === "database"){
//         console.log("database data", data)
//         k.callFunction("editArchives", [data.content])

//     }else{


//     var ht = {
//         1: ["updateGraphLine","updateGraphBar"],
//         2: ["updateGraphLine1","updateGraphBar1"]
//     }

//     if(ht[data._id]){
//         console.log('This is entire data before: ', data);
//         k.callFunction(ht[data._id][0], [data.volume, data.light, data.temperature, data.time])
//         k.callFunction(ht[data._id][1], [data.volume, data.light, data.temperature, data.time])
//         k.callFunction("monitorLights", [data._id, data.light])
//     }
// }
// });


var htmlString = 
// HEADER
'<nav class="navbar navbar-default navbar-fixed-top">
' +'        <div class="container">
' +'            <!-- Brand and toggle get grouped for better mobile display -->
' +'            <div class="navbar-header page-scroll">
' +'                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
' +'                    <span class="sr-only">Toggle navigation</span>
' +'                    <span class="icon-bar"></span>
' +'                    <span class="icon-bar"></span>
' +'                    <span class="icon-bar"></span>
' +'                </button>
' +'                <a class="navbar-brand" href="#page-top">Usi Big Brother</a>
' +'            </div>';

           
k.createHTML('pimmi', htmlString);

//add the graph script
k.createScript('our_graph', 'js/scripts/newMile_g.js');

//connect browser with browser operator
k.registerProducer('producer');

//css
k.createCSS('csstest', '/css/newTest.css')
