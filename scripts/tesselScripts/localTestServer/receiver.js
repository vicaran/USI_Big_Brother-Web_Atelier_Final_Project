/**
 This is the script that opens the socket
 and receive the data from the tessel.
 **/
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 15000
    });

var client = {};
var _id = 0
wss.on('connection', function (ws) {
    ws._id = _id;
    client[_id] = {
        time: '',
        ws: ws
    };
    console.log('Socket ' + _id + ' connected', '*************************************')
    _id++;
    ws.on('message', function (data) {
        console.log(data)
        //update date
        var date = new Date()
        client[ws._id].time = date;
        //send data
        if (data != 'ACK') {
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
    console.log(keys.length)
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        try {
            console.log('SOCKET ', key, ' **********')
            console.log(keys)
            console.log('d: ', d)
            console.log('client[i].time: ', client[key].time)

            if (((d - client[key].time) / 1000) > 5) {
                console.log('Something went wrong, close socket ' + i)
                //delete socket
                delete client[key]
            }
            else {
                console.log(data)
                client[key].ws.send(data)
            }
        } catch (e) {
            console.log('Error: ' + e)
        }
    }
}