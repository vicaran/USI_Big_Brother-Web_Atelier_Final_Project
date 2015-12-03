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

exports.MyTessel = MyTessel;