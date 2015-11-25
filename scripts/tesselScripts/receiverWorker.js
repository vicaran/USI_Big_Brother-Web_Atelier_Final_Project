var tessel = require('tessel');
var pws = require("./../producer_connection.js")


/**
 * Main function that receiver the data from network add turn on some leds
 */

var receiveData = function() {
    var green = tessel.port['GPIO'].pin['G5'];
    var blue = tessel.port['GPIO'].pin['G4'];
    var red = tessel.port['GPIO'].pin['G6'];
    var yell = tessel.port['GPIO'].pin['G3'];
    interval = setInterval(function() {
        pws.ack()
    }, 3000)

    connection.on('text', function(data) {
        var parse = JSON.parse(data)
        var volume = parse.volume
        if (parse.light < 230) {
            yell.write(1)
        }
        if (parse.light >= 230) {
            yell.write(0)
        }

        if (volume < 10) {
            green.write(1)
            blue.write(0)
            red.write(0)

        } else if (volume >= 10 && volume <= 30) {
            green.write(0)
            blue.write(1)
            red.write(0)

        } else if (volume > 30) {
            green.write(0)
            blue.write(0)
            red.write(1)
        }
    })

    interval = setInterval(function() {
        green.write(0)
        blue.write(0)
        red.write(0)
    }, 4000);

};

receiveData()