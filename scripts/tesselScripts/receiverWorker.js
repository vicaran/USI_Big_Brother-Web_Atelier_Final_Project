// var k = require("./tessel-connection.js");
var tessel = require('tessel');

//get some data from the environment
var gatherData = function() {
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

gatherData()