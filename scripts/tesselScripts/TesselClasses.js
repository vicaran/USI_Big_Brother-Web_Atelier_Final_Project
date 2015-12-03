/**
 * Created by VeaVictis on 03/12/15.
 */

function MyTessel(id) {
    //this.tessel = require('tessel');
    //this.GPIO = this.tessel.port['GPIO'];
    this.ws = require("./producerWS.js");
    this._id = id;
    console.log('CONSTRUCTOR')
}

/**
 * This function set the RGB Led. Low noise = green, medium = blue and high = red
 * @param {number} volume
 */
function SenderTessel(id) {
    MyTessel.call(this,id);
    this.setColor = function (volume) {

        if (volume < 10) {

            console.log('low');
            blue.write(1);
            red.write(1);
            green.pwmDutyCycle((255 - volume * 25.5) % 255 / 255);
        } else if (volume >= 10 && volume <= 30) {

            console.log('medium');
            blue.pwmDutyCycle((100 - ((volume - 10) * 5)) % 255 / 255);
            red.write(1);
            green.write(1);
        } else {
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
    this.gatherSound = function (pin) {
        var volume = 0.0; // peak-to-peak level

        var signalMax = 0;
        var signalMin = 1024;
        var sampleWindow = 50;

        var startMillis = new Date().getTime(); // Start of sample window

        while (new Date().getTime() - startMillis < sampleWindow) {
            var sample = pin.read() * pin.resolution;

            if (sample < 1024) // toss out spurious readings
            {
                if (sample > signalMax) {
                    signalMax = sample; // save just the max levels
                } else if (sample < signalMin) {
                    signalMin = sample; // save just the min levels
                }
            }
        }
        volume = signalMax - signalMin;

        return volume
    };

    this.start = function () {
        this.main();
    };

    this.main = function () {
    };
}


SenderTessel.prototype = Object.create(MyTessel.prototype);
SenderTessel.prototype.constructor = SenderTessel;

function ReceiveTessel(id){
    MyTessel.call(this,id);

    this.main = function(f) {
        interval = setInterval(function () {
            pws.ack()
        }, 4500);
        f();
    }
}

ReceiveTessel.prototype = Object.create(MyTessel.prototype);
ReceiveTessel.prototype.constructor = ReceiveTessel;


exports.SenderTessel = SenderTessel;
