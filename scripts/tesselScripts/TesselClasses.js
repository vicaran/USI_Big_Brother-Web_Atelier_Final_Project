/**
 * Created by VeaVictis on 03/12/15.
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


///**
// *  This function return the private field _id
// * @returns {*|number}
// */
//MyTessel.prototype.getId = function () {
//    return this._id;
//};

/**
 * This class implements the Tessel interface in order to send data
 *
 * @param {int} id The unique identifier of the Tessel
 * @constructor The Mytessel constructor
 */
function SenderTessel(id) {
    MyTessel.call(this, id);
    console.log('Sender Tessel ' +this._id+  ' created')

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
    console.log('Receive Tessel ' +this.id+  ' created')

    /**
     * This interval will send and ack every 4.5 s
     *
     * @type {number}
     */

    this.interval = setInterval(function () {
        this.ws.ack()
    }, 4500);


}

ReceiveTessel.prototype = Object.create(MyTessel.prototype);
ReceiveTessel.prototype.constructor = ReceiveTessel;


exports.SenderTessel = SenderTessel;
exports.ReceiveTessel = ReceiveTessel;

