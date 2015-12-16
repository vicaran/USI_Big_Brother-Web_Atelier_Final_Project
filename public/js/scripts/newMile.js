//require WLS
var k = require('./../../../k_globals/koala.js')

// //script of the operator
k.createNode(function(data) {
    var parse = JSON.parse(data);
    switch (parse.header){
        case 'browser':
            k.send(data);
            break;
        case 'GET':
            k.send(data)
            break
        default:
            k.callFunction("chartHandler", [parse])
    }

})
//var htmlString =
// HEADER
//k.createHTML('pimmi', htmlString);

//add the graph script
//k.createScript('our_graph', 'js/scripts/app.js');

//connect browser with browser operator
k.registerProducer('producer');

//css
//k.createCSS('csstest', '/css/newTest.css')
