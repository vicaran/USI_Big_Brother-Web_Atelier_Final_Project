var TesselClasses = require('./TesselClasses.js');

var SenderT1 = new TesselClasses.SenderTessel(2);
SenderT1.main = function() {
    //initialized sound sensor
    var soundPin = this.tessel.port['GPIO'].analog[0];
    //initialized light sensor
    var lightPin = this.tessel.port['GPIO'].analog[1];
    //initialized Led
    var led = this.tessel.port['GPIO'].pin['G3'];

    this.ws.receive(function(data) {
        if (data == "RESET") {} else {
            var parse = JSON.parse(data)
            var volume = parse.volume;
            console.log('-receiver- ', parse);
            if (parse.light < 530) {
                led.write(1)
            } else {
                led.write(0)

            }
            //setColor(volume);
        }
    });
    interval = setInterval(function() {

        var volume = this.gatherSound(soundPin);
        var light = lightPin.read() * lightPin.resolution;
        var data = {
            _id: this._id,
            volume: volume,
            light: light,
            time: Date.now()
        };
        this.ws.send(data);

    }, 1000)
};

SenderT1.start();