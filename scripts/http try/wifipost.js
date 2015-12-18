var querystring = require("querystring")
var http = require("http")
var tessel = require('tessel');

var wifi = require('wifi-cc3000');
var network = 'USI_BIG_BROTHER'; // put in your network name here
var pass = 'usibigbrother'; // put in your password here, or leave blank for unsecured
var security = 'wpa2'; // other options are 'wep', 'wpa', or 'unsecured'
var timeouts = 0;

gatherLight = function(lightPin) {
    var rawLight = lightPin.read() * lightPin.resolution;
    switch (this.module) {
        case 1:
            return rawLight > 550;
            break;
        case 2 || 3:
            return rawLight > 320;
            break;
    }
};
gatherSound = function(pin) {
    var volume = 0.0; // peak-to-peak level

    var signalMax = 0;
    var signalMin = 1024;
    var sampleWindow = 50;

    var startMillis = new Date().getTime(); // Start of sample window

    while (new Date().getTime() - startMillis < sampleWindow) {
        var sample = pin.read() * pin.resolution;

        if (sample < 1024) // toss out spurious readings
        {
            if (sample > signalMax) {
                signalMax = sample; // save just the max levels
            } else if (sample < signalMin) {
                signalMin = sample; // save just the min levels
            }
        }
    }
    volume = signalMax - signalMin;

    return volume
};

gatherTemperature = function(pin) {
    var voltage = (pin.read() * 3.3);
    return (voltage - 0.5) * 100;
}

wifi.on('connect', function(data) {
    // you're connected
    var interval = setInterval(function() {
        console.log("connect emitted", data);
        var soundPin = tessel.port['GPIO'].analog[0];
        //initialized light sensor
        var lightPin = tessel.port['GPIO'].analog[1];
        //initialized temp sensor
        var tempPin = tessel.port['GPIO'].analog[2];

        var volume = gatherSound(soundPin);
        var temperature = gatherTemperature(tempPin);
        var light = gatherLight(lightPin);

        var statusCode = 200;
        var count = 1;
        var data = {
            _id: 1,
            volume: volume,
            light: light,
            temperature: temperature,
            time: Date.now()
        };
        console.log('This is bllxm:', data);
        setImmediate(function start() {
            http.get("http://neha.inf.unisi.ch:15000/" + JSON.stringify(data), function(res) {

                var bufs = [];
                res.on('data', function(data) {
                    bufs.push(new Buffer(data));
                    console.log('# received', new Buffer(data).toString());
                })
                res.on('end', function() {
                    console.log('done.');
                })
            }).on('error', function(e) {
                console.log('not ok -', e.message, 'error event')
                setImmediate(start);
            });
        })
    }, 1000)
});

wifi.on('disconnect', function(data) {
    // wifi dropped, probably want to call connect() again
    console.log("disconnect emitted", data);
    connect();
})

wifi.on('timeout', function(err) {
    // tried to connect but couldn't, retry
    console.log("timeout emitted");
    timeouts++;
    if (timeouts > 2) {
        // reset the wifi chip if we've timed out too many times
        powerCycle();
    } else {
        // try to reconnect
        connect();
    }
});

wifi.on('error', function(err) {
    // one of the following happened
    // 1. tried to disconnect while not connected
    // 2. tried to disconnect while in the middle of trying to connect
    // 3. tried to initialize a connection without first waiting for a timeout or a disconnect
    console.log("error emitted", err);
});

// reset the wifi chip progammatically
function powerCycle() {
    // when the wifi chip resets, it will automatically try to reconnect
    // to the last saved network
    wifi.reset(function() {
        timeouts = 0; // reset timeouts
        console.log("done power cycling");
        // give it some time to auto reconnect
        setTimeout(function() {
            if (!wifi.isConnected()) {
                // try to reconnect
                connect();
            }
        }, 20 * 1000); // 20 second wait
    })
}

function connect() {
    wifi.connect({
        security: security,
        ssid: network,
        password: pass,
        timeout: 30 // in seconds
    });
}

// connect wifi now, if not already connected
if (!wifi.isConnected()) {
    connect();
}