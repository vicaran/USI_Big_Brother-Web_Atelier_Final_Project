/**
 This is the script that opens the socket
 and receive the data from the tessel.
 **/
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 15000
    });

var client = []

wss.on('connection', function (ws) {
    client.push({
        time: '',
        s: ws
    })

    ws.on('message', function (data) {
        console.log(ws)
        sendAll(data)
    });

    ws.on('close', function close() {
        client.splice(client.indexOf(ws), client.indexOf(ws) + 1)
        console.log('disconnected');
    });
    ws.on('disconnect', function close() {
        client.splice(client.indexOf(ws), client.indexOf(ws) + 1)
        console.log('disconnected');
    });
});

function sendAll(data) {
    console.log(client.length)
    for (var i = 0; i < client.length; i++) {
        try {
            console.log(data)
            client[i].send(data)
        } catch (e) {
            console.log('Error: ' + e)
        }
    }
}