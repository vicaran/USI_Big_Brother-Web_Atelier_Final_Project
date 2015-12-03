/**
 * Created by VeaVictis on 03/12/15.
 */

var SenderTessel = require('./SenderTessel.js')

var SenderT1 = new SenderTessel(1);
console.log(SenderT1)
SenderT1.main = function(){console.log('ciao')};
SenderT1.start();