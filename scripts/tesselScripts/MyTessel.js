/**
 * Created by VeaVictis on 03/12/15.
 */


var MyTessel = function (id) {
    this.tessel = require('tessel');
    this.GPIO = this.tessel.port['GPIO'];
    this.ws = require("./producerWS.js");
    this._id = id;
};

exports.MyTessel = MyTessel;