/**
 This is the script that opens the socket
 and receive the data from the tessel.
 **/
var k = require('./../k_globals/koala.js')
var dataB = require('./database.js')
var http = require('http');

const PORT = 15000;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});

var client = {};
var _id = 0;

function handleRequest(req, res) {
    req.on('data', function(data) {
        console.log('BODY: ' + data);
        var stringified = JSON.stringify(data);
        var replaced = stringified.replace('&', ' ');

        // //update date
        // var date = new Date()
        // client[ws._id].time = date;
        // //send data
        // if (JSON.parse(data) != "ACK") {
        //     sendAll(data, date);
        //     k.send(data)
        // }
        // });
    });
}




// var client = {};
// var _id = 0;

// wss.on('connection', function(ws) {
//     console.log('____________New Connection Opened____________');
//     console.log('There are ' + (Object.keys(client).length + 1).toString() + ' connections');

//     var fDate = new Date();
//     ws._id = _id;
//     client[_id] = {
//         time: fDate,
//         ws: ws,
//         browser: false
//     };
//     _id++;
//     ws.on('message', function(data) {

//         //update date
//         var date = new Date()
//         client[ws._id].time = date;
//         //send data
//         if (JSON.parse(data) != "ACK") {
//             sendAll(data, date);
//             k.send(data)
//         }
//     });

//     ws.on('close', function close() {
//         delete client[ws._id];
//         console.log('close socket: ' + _id);
//         _id--;
//     });
//     ws.on('disconnect', function close() {
//         delete client[ws._id];
//         console.log('disconnected socket: ' + _id);
//         _id--;

//     });
// });

// function sendAll(data, d) {
//     var keys = Object.keys(client)
//         //add data to database
//     dataB.addToDatabase(data, d);
//     // console.log('This is data:', data);
//     for (var i = 0; i < keys.length; i++) {
//         var key = keys[i]
//         try {
//             if (!client[key].browser) {
//                 if (((d - client[key].time) / 1000) > 5) {
//                     console.log('Connection with client lost, close socket with id: ' + i + ".")
//                     keys = Object.keys(client)
//                     for (var i = 0; i < keys.length; i++) {
//                         client[key].ws.send("RESET")
//                     }
//                     //delete socket
//                     delete client[key];
//                     _id--;

//                 } else {
//                     client[key].ws.send(data)
//                 }
//             } else {
//                 client[key].ws.send(data)
//                 //console.log('browser')
//             }
//         } catch (e) {
//             console.log('Error: ' + e)
//         }
//     }
// }