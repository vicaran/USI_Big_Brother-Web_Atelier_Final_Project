/**
 This is the script that opens the socket
 and receive the data from the tessel.
 **/
var k = require('./../k_globals/koala.js')
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 15000
    });

var client = {}
var _id = 0

wss.on('connection', function (ws) {
    console.log('____________New Connection Opened____________');
    console.log('There are ' + Object.keys(client).length.toString() + ' connections');

    var fDate = new Date()
    ws._id = _id
    client[_id] = {
        time: fDate,
        ws: ws,
        browser: false
    }
    _id++
    ws.on('message', function (data) {
        console.log(data)
        if (data == 'BROWSER') {
            console.log('browser')

            client[ws._id].browser = true;
        }
        //update date
        var date = new Date()
        client[ws._id].time = date;
        //send data
        if (data != "ACK") {
            console.log(data, '***************************************************************')
            sendAll(data, date)
            k.send(data)
        }
    });

    ws.on('close', function close() {
        delete client[ws._id]

        console.log('close');
    });
    ws.on('disconnect', function close() {
        delete client[ws._id]
        console.log('disconnected');
    });
});

function sendAll(data, d) {
    var keys = Object.keys(client)
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        try {
            if (!client[key].browser) {
                if (((d - client[key].time) / 1000) > 5) {
                    console.log('Connection with client lost, close socket with id: ' + i + ".")
                    keys = Object.keys(client)
                    for (var i = 0; i < keys.length; i++) {
                        client[key].ws.send("RESET")
                    }
                    //delete socket
                    delete client[key]
                }
                else {
                    client[key].ws.send(data)
                }
            }
            else {
                client[key].ws.send(data)
                console.log('browser')
            }
        } catch (e) {
            console.log('Error: ' + e)
        }
    }
}