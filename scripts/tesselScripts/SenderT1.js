

var TesselClasses = require('./TesselClasses.js')

var SenderT1 = new TesselClasses.SenderTessel(1);
SenderT1.main = function(){
    this.ws.send({a:'test'});
};

SenderT1.start();