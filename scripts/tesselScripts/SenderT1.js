/**
 * Created by VeaVictis on 03/12/15.
 */

var SenderTessel = require('./TesselClasses.js')

SenderT1 = new SenderTessel.SenderTessel(1)
SenderT1.main = function(){console.log('ciao')};
SenderT1.start();
console.log(SenderT1.getId())