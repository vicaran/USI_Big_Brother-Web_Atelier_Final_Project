/**
 * This module exports two simple Tessel classes created for the USI big brothers project
 * SenderTessel gather the data from light, sound and temperature and send it through the network in a JSON format
 *
 * @author Francesco Saverio Zuppichini
 */

/**
 * This class holds a Tessel interface
 *
 * @param {int} id The unique identifier of the Tessel
 * @constructor
 */
function MyTessel(id) {
    this.tessel = require('tessel');
    this.GPIO = this.tessel.port['GPIO'];
    this.ws = require("./producerWS.js");
    //  TODO check if i can make id private
    this._id = id;
}

/**
 * This function is the main function - you MUST override it
 **/
MyTessel.prototype.main = function () {

};

/**
 * This function start the Tessel
 */
MyTessel.prototype.start = function () {
    this.main();
};

/**
 * This class implements the Tessel interface in order to send data
 *
 * @param {int} id The unique identifier of the Tessel
 * @constructor The Mytessel constructor
 */
function SenderTessel(id) {
    MyTessel.call(this, id);
    console.log('Sender Tessel ' + this._id + ' created');
    this.main = function () {
        var self = this;
        //------ analog pins ------
        //initialized sound sensor
        var soundPin = this.tessel.port['GPIO'].analog[0];
        //initialized light sensor
        var lightPin = this.tessel.port['GPIO'].analog[1];
        //initialized temp sensor
        var tempPin = tessel.port['GPIO'].analog[1];

        //------ digital pins ------
        //initialized Led
        var led = this.tessel.port['GPIO'].pin['G3'];
        this.ws.receive(function (data) {
            if (data == "RESET") {
            } else {
                var parse = JSON.parse(data)
                var volume = parse.volume;
                console.log('-receiver- ', parse);
                if (parse.light < 530) {
                    led.write(1)
                } else {
                    led.write(0)

                }
            }
        });
        interval = setInterval(function () {
            var volume = self.gatherSound(soundPin);
            var temperature = self.gatherTemperature(tempPin);
            var light = lightPin.read() * lightPin.resolution;
            var data = {
                _id: self._id,
                volume: volume,
                light: light,
                temperature: temperature,
                time: Date.now()
            };
            self.ws.send(data);

        }, 1000)
    };

    /**
     * This function set the RGB Led. Low noise = green, medium = blue and high = red
     * @param {number} volume
     */
    this.setColor = function (volume) {

        switch (volume) {
            case volume < 10:
                console.log('low');
                blue.write(1);
                red.write(1);
                green.pwmDutyCycle((255 - volume * 25.5) % 255 / 255);
                break;

            case volume >= 10 && volume <= 30:
                console.log('medium');
                blue.pwmDutyCycle((100 - ((volume - 10) * 5)) % 255 / 255);
                red.write(1);
                green.write(1);
                break;

            default:
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

    /**
     * Function for reading the input from a TMP36
     * @param pin The analog pin of the TMP36
     * @returns {number} The temperature in Celsius
     */
    this.gatherTemperature = function (pin) {
        var voltage = (pin.read() * 3.3);
        return voltage - 0.5 * 100;
    }
}

SenderTessel.prototype = Object.create(MyTessel.prototype);
SenderTessel.prototype.constructor = SenderTessel;

/**
 * This class implements the Tessel interface in order to receive data
 *
 * @param {int} id The unique identifier of the Tessel
 * @constructor The Mytessel constructor
 */
function ReceiveTessel(id) {
    MyTessel.call(this, id);
    console.log('Receive Tessel ' + this.id + ' created')

}

ReceiveTessel.prototype = Object.create(MyTessel.prototype);
ReceiveTessel.prototype.constructor = ReceiveTessel;

exports.SenderTessel = SenderTessel;
exports.ReceiveTessel = ReceiveTessel;