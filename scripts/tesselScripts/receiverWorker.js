var tessel = require('tessel');
var ws = require("nodejs-websocket");

<<<<<<< HEAD
var ports = 15000;
var connection = ws.connect('ws://10.40.2.139:' + ports, function () {
    console.log('--Tessel Connected--')
});

/**
 * Main function that receiver the data from network add turn on some leds
 */

var receiveData = function () {
=======
// INSERT TESSEL IP ADDRESS HERE. Always prepend with 'ws://' to indicate websocket
var connection = ws.connect('ws://10.40.2.139:' + ports, function() {
    console.log('--Tessel Connected--')
});

var receiveData = function() {
>>>>>>> origin/master
    var green = tessel.port['GPIO'].pin['G5'];
    var blue = tessel.port['GPIO'].pin['G4'];
    var red = tessel.port['GPIO'].pin['G6'];
    var yell = tessel.port['GPIO'].pin['G3'];

    connection.on('text', function(data) {
        var parse = JSON.parse(data);
        var volume = parse.volume;

        if (parse.light < 230) {
            yell.write(1);
        } else {
            yell.write(0);
        }
        if(parse.light>=230){
            yell.write(0)

        }

        if (volume < 10) {
<<<<<<< HEAD
            green.write(1)
            blue.write(0)
            red.write(0)

        }
        else if (volume >= 10 && volume <= 30) {
            green.write(0)
            blue.write(1)
            red.write(0)

        }
        else if(volume > 30) {
            green.write(0)
            blue.write(0)
            red.write(1)

        }

    })

=======
            green.write(1);
            blue.write(0);
            red.write(0);
        } else if (volume >= 10 && volume <= 30) {
            green.write(0);
            blue.write(1);
            red.write(0);
        } else if (volume > 30) {
            green.write(0);
            blue.write(0);
            red.write(1);
        }

    })
>>>>>>> origin/master
};

receiveData()