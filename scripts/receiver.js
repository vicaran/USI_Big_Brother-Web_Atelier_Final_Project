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
var ws = require("nodejs-websocket")
var port = 15000;

// Create the websocket server, provide connection callback
var server = ws.createServer(function (conn) {
    console.log("New connection");

    // If we get text from the client, and echo it
    conn.on("text", function (str) {
        // print it out
        console.log("Received "+str)
        // Send it back (but more excited)
        conn.sendText(str.toUpperCase()+"!!!")
    });

    // When the client closes the connection, notify us
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    });
<<<<<<< HEAD
}).listen(port);
=======
    ws.send('something stupid');
});
>>>>>>> origin/master
//
//function sendAll(data) {
//    console.log(data)
//    for (var i = 0; i < client.length; i++) {
//        client[i].send('test')
//
//    }
//}