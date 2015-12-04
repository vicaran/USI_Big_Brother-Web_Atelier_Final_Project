/**
 * Created by VeaVictis on 04/12/15.
 */

var TesselClasses = require('./TesselClasses.js')

var SenderT1 = new TesselClasses.SenderTessel(1);
SenderT1.main = function(){
    this.ws.send('Sender T1');
};

SenderT1.start();