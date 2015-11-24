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
wss.on('connection', function (ws) {
    ws._id = _id
    client[_id] = {
        time: '',
        ws: ws
    }
    _id++
    console.log(client, '*************************************')
    ws.on('message', function (data) {
        //update date
        var date = Date.now()
        client[wss._id].time = date.getTime / 1000;
        //send data
        sendAll(data, d)
    });

    ws.on('close', function close() {
        console.log('disconnected');
    });
    ws.on('disconnect', function close() {
        console.log('disconnected');
    });
});

function sendAll(data, d) {
    console.log(client.length)
    for (var i = 0; i < client.length; i++) {
        try {
            if ((d - client[i].time) > 5) {
                console.log('Something went wrong, close socket ' + i)
                //delete socket
                delete client[i]
            }
            else {
                console.log(data)
                client[i].send(data)
            }
        } catch (e) {
            console.log('Error: ' + e)
        }
    }
}