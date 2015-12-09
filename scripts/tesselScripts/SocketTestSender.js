/**
 * Created by VeaVictis on 04/12/15.
 */
/**
 * Little class for a quick test for the Socket
 * @param _id
 */
var senderNodejs = function (_id,n) {
    this._id = _id;
    this.n = n;
    console.log('CALLED')
    this.ws = require('./producerWS.js');
    var self = this;
    this.main = function () {
        interval = setInterval(function () {
            var data = {
                _id: self._id,
                volume: self.n++,
                light: 100,
                temperature: 0,
                time: Date.now()
            };
            self.ws.send(data)
        }, 1000);
    };
    this.start = function () {
        this.main()
    }
};

/**
 * Quick socket generator
 * @param NumberOfSender The number of sender that you want
 */
var senderTestGenerator = function (NumberOfSender) {
    for (var i = 0; i < NumberOfSender; i++) {
        var t = new senderNodejs(i+1, i + 10);
        t.start()

    }
};


senderTestGenerator(150);