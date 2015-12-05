/**
 * Created by VeaVictis on 04/12/15.
 */



/**
 * Little class for a quick test for the Socket
 * @param _id
 */
var senderNodejs = function(_id) {
    this._id = _id;
    console.log('CALLED')
    this.ws = require('./producerWS.js');
    var self = this;
    this.main = function() {
        interval = setInterval(function () {
            var data = {
                _id: self._id,
                volume: 70,
                light: 100
            };
            self.ws.send(data)
        }, 400);
    };
    this.start = function(){
        this.main()
    }
};
/**
 * Quick socket generator
 * @param NumberOfSender The number of sender that you want
 */
var senderTestGenerator = function(NumberOfSender){
    for(var i = 0; i < NumberOfSender; i++){
        console.log(i)
        var t = new senderNodejs(i)
        t.start()

    }
};


senderTestGenerator(1);