/**
 * Created by VeaVictis on 27/11/15.
 */

var tessel = require('tessel');

var main = function () {
    var tempPin = tessel.port['GPIO'].pin['A3'];
    var voltage = 0;
    var temperature = 0.0
    interval = setInterval(function () {
        voltage = (tempPin.read() *3.3)/1024
        console.log('voltage: ', voltage )

        temperature = (voltage - 0.5) *100;
        console.log(temperature)

    }, 500)
};


main();