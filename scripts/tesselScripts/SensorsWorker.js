
var tessel = require('tessel');
var ws = require("nodejs-websocket");
//initialize RGB Led variables (R + G B)
var red = tessel.port['GPIO'].pwm[0];
var blue = tessel.port['GPIO'].pwm[1];
var green = tessel.port['GPIO'].pwm[2];
//set frequency to PWM pins
var port = tessel.port['GPIO'];
port.pwmFrequency(31250);

/**
 * Main function that take the data from the sensors
 */
var ports = 15000;

var connection = ws.connect('ws://10.40.2.139:' + ports, function () {
    console.log('--Tessel Connected--')
});

var gatherData = function () {

    //initialized sound sensor
    var soundPin = tessel.port['GPIO'].analog[0];
    //initialized light sensor
    var lightPin = tessel.port['GPIO'].analog[1];
    //initialized Led
    var led = tessel.port['GPIO'].pin['G3'];
    connection.on('disconnect', function close() {
        console.log('disconnected');
    });
    connection.on('text', function (data) {
        var parse = JSON.parse(data)
        var volume = parse.volume
        console.log('-receiver-')
        if (parse.light < 230) {
            led.write(1)
        }
        else {
            led.write(0)
        }
        setColor(volume);
    });
    interval = setInterval(function () {

        var volume = gatherSound(soundPin);
        var light = lightPin.read() * lightPin.resolution;
        var date =Date.now()
        var m = {
            volume: volume,
            light: light,
            time: date
        };
        connection.sendText(JSON.stringify(m));

    }, 2000)
};

/**
 * This function set the RGB Led. Low noise = green, medium = blue and high = red
 * @param {number} volume
 */
var setColor = function (volume) {

    if (volume < 10) {

        console.log('low')
        blue.write(1);
        red.write(1);
        green.pwmDutyCycle((255 - volume * 25.5) % 255 / 255);
    }

    else if (volume >= 10 && volume <= 30) {

        console.log('medium');
        blue.pwmDutyCycle((100 - ((volume - 10) * 5)) % 255 / 255);
        red.write(1);
        green.write(1);
    }

    else {

        console.log('high');
        blue.write(1);
        green.write(1);
        red.write(0)

    }
};

/**
 * Function for reading the input from a microphone, gathering data in a window of 50ms
 * @param pin - the analog pin of the sound sensor
 * @returns {number} volume
 */
var gatherSound = function (pin) {
    var volume = 0.0;   // peak-to-peak level

    var signalMax = 0;
    var signalMin = 1024;
    var sampleWindow = 50;

    var startMillis = new Date().getTime();  // Start of sample window

    while (new Date().getTime() - startMillis < sampleWindow) {
        var sample = pin.read() * pin.resolution;

        if (sample < 1024)  // toss out spurious readings
        {
            if (sample > signalMax) {
                signalMax = sample;  // save just the max levels
            }
            else if (sample < signalMin) {
                signalMin = sample;  // save just the min levels
            }
        }
    }
    volume = signalMax - signalMin;

    return volume
};

gatherData();