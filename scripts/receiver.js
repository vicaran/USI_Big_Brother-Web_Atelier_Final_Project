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
    console.log('____________connection opened____________');
    ws._id = _id
    client[_id] = {
        time: '',
        ws: ws,
        listener: true
    }
    _id++

    ws.on('message', function(data) {
        //update date
        var date = new Date()
        console.log('fottuta data', date);
        client[ws._id].time = date;
        //send data
        console.log('TRY', data);
        console.log(client, '*************************************')
        if (data == "ACK") {
            return;
        } else {
            client[ws._id].listener = false
            sendAll(data, date);
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
    console.log(keys.length)
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        try {
            console.log('SOCKET ', key, ' **********')
            console.log(keys)
            if (client[key].listener == true) {
                setTimeout(function() {
                    console.log('Something went wrong, close receiver socket ' + i)
                    delete client[key]
                }, 5000)
                console.log("Sending to listener socket:", data)
                client[key].ws.send(data)
            } else if (((d - client[key].time) / 1000) > 5 && client[key].listener == false) {
                console.log('Something went wrong, close socket ' + i)
                //delete socket
                delete client[key]
            } else {
                console.log("Sending to listener and sender socket:", data)
                client[key].ws.send(data)
            }
        }
    } catch (e) {
        console.log('Error: ' + e)
    }
}
}