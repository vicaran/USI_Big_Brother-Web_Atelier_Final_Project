
var pws = require("./producer_connection.js")

/**
 * Main function that receiver the data from network add turn on some leds
 */

var receiveData = function() {
    pws.send('browser');
    
    pws.receive(function(data) {
		console.log(data)
    var data = JSON.parse(data);
	var drawGraph = '';
	if(data.header.type == "temp"){
		drawGraph = "updateGraphTemp";
	}
	else if(data.header.type == "noise"){
		drawGraph =  "updateGraphNoise";
	}

});

//create the hidden div that will contain the received data
    
};

receiveData();