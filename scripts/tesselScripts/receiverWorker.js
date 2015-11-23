// var k = require("./tessel-connection.js");
var tessel = require('tessel');
var ws = require("nodejs-websocket");
var ports = 15000;

// INSERT TESSEL IP ADDRESS HERE. Always prepend with 'ws://' to indicate websocket
var connection = ws.connect('ws://10.40.2.139:' + ports, function () {
    console.log('--Tessel Connected--')
});


var receiveData = function() {
    connection.on('text', function (data) {
        console.log(data)
    })
    var greenLigthBulb = tessel.port['GPIO'].pin['G5'];
    var blueLigthBulb = tessel.port['GPIO'].pin['G4'];
    var redLigthBulb = tessel.port['GPIO'].pin['G6'];
    var yellowLigthBulb = tessel.port['GPIO'].pin['G3'];

    interval = setInterval(function() {
		greenLigthBulb.write(1);
		blueLigthBulb.write(1);
		redLigthBulb.write(1);
		yellowLigthBulb.write(1);
    }, 200)
}

receiveData()