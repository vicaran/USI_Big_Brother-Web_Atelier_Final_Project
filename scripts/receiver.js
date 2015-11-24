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
        var date = new Date()
        client[ws._id].time = date;
        //send data
        sendAll(data, date)
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
        try {
            console.log('d: ', d)
            console.log('client[i].time: ', client[i].time)

            if (((d - client[i].time)/ 1000) > 5) {
                console.log('Something went wrong, close socket ' + i)
                //delete socket
                delete client[i]
            }
            else {
                console.log(data)
                client[i].ws.send(data)
            }
        } catch (e) {
            console.log('Error: ' + e)
        }
    }
}