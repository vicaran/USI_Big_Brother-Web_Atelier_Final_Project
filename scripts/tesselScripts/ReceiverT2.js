/**
 * Created by VeaVictis on 04/12/15.
 */

var TesselClasses = require('./TesselClasses.js');
var ReceiverT2 = new TesselClasses.ReceiveTessel(2);
ReceiverT2.main = function() {
    var self = this;
    var green = this.tessel.port['GPIO'].pin['G5'];
    var blue = this.tessel.port['GPIO'].pin['G4'];
    var red = this.tessel.port['GPIO'].pin['G6'];
    var yell = this.tessel.port['GPIO'].pin['G3'];
    interval = setInterval(function() {
        self.ws.ack()
    }, 4500);

    this.ws.receive(function(data) {
        if (data == "RESET") {
            green.write(0);
            blue.write(0);
            red.write(0);
            yell.write(0);
        } else {
            var parse = JSON.parse(data)

            var volume = parse.volume;
            if (parse.light < 530) {
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
        }
    })
};

ReceiverT2.start();