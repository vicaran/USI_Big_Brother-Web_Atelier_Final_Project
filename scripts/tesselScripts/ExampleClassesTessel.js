/**
 * Created by VeaVictis on 03/12/15.
 */

var TesselsClasses = require('./TesselClasses.js')

 SenderT1 = new TesselsClasses.SenderTessel(1)
 SenderT1.main = function(){console.log('ciao');};
 SenderT1.start();
//console.log(SenderT1._id)

ReceiveT1 = new TesselsClasses.ReceiveTessel(2);
ReceiveT1.main = function something() {
    console.log('diocan')
    this.interval
};
ReceiveT1.start();