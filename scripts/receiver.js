/**
This is the script that opens the socket 
and receive the data from the tessel.
**/
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 15000
    });

wss.on('connection', function(socket) {
    console.log("New Connection");

    socket.on("message", function(data) {
        console.log('This is data:', data);
        m = {
        	response: 'Test'
        }
        socket.send(m)
    });
});