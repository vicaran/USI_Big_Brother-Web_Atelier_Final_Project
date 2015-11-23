/**
This is the script that opens the socket 
and receive the data from the tessel.
**/
// var WebSocketServer = require('ws').Server,
//     wss = new WebSocketServer({
//         port: 15000
//     });

// wss.on('connection', function(socket) {
//     console.log("New Connection");

//     socket.on("message", function(data) {
//         console.log('This is data:', data);
//         m = {
//         	response: data
//         }
//         console.log('I am going to send this:', m);
//         socket.send(m)
//     });
// });

//var k = require('./../k_globals/koala.js');
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 15000
    });


//var id= 0;
var client = []

//create a websocket server
//var wss = new ws.Server({'port': 15000});

wss.on('connection', function(ws) {
    client.push(ws)
    wss.broadcast = function broadcast(data) {
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    };
    ws.on('close', function close() {
        client.splice(client.indexOf(ws),client.indexOf(ws)+1)
        console.log('disconnected');
    });

});
//
function sendAll(data) {
    console.log(client.length)
    for (var i = 0; i < client.length; i++) {
        client[i].send(data)
        //console.log('VA DIOCANE')

    }
}