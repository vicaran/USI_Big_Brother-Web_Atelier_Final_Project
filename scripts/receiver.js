/**
 This is the script that opens the socket
 and receive the data from the tessel.
 **/
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 15000
    });

var client = {}
var _id = 0

wss.on('connection', function(ws) {
    console.log('____________New Connection Opened____________');
    console.log('There are ' + Object.keys(client).length.toString() + ' connections');

    var fDate = new Date()
    ws._id = _id
    client[_id] = {
        time: fDate,
        ws: ws,
    }
    _id++
    ws.on('message', function(data) {
        //update date
        var date = new Date()
        client[ws._id].time = date;
        //send data
        if (data != "ACK") {
            sendAll(data, date)
        }
    });

    ws.on('close', function close() {
        console.log('disconnected');
    });
    ws.on('disconnect', function close() {
        console.log('disconnected');
    });
});

function sendAll(data, d) {
    var keys = Object.keys(client)
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        try {
            if (((d - client[key].time) / 1000) > 5) {
                console.log('Connection with client lost, close socket with id: ' + i + ".")
                keys = Object.keys(client)
                for (var i = 0; i < keys.length; i++) {
                    client[key].ws.send("RESET")
                }
                //delete socket
                delete client[key]
            } else {
                client[key].ws.send(data)
            }
        } catch (e) {
            console.log('Error: ' + e)
        }
    }
}