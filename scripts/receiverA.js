var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 15000
    });


//var id= 0;
var client = []

//create a websocket server
//var wss = new ws.Server({'port': 15000});

setTimeout(function() {
    console.log(data)
    for (var i = 0; i < client.length; i++) {
        client[i].send('test')

    }
}, 200)