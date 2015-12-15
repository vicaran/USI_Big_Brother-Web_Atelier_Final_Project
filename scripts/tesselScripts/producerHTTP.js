/**
 * This module handle http connection
 */

var http = require('http');
http.post = require('http-post');

var port = 15000;
var hostname = "http://neha.inf.unisi.ch:";
var url = hostname + port.toString();


var send = function(message) {
    var req = http.post(url, message, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
        });
    })
    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    // write data to request body
    req.end(JSON.stringify(message));
};
var ack = function() {
    send('ACK');
};

var receive = function(cb) {
    connection.on('text', cb)
};


exports.connection = connection;
exports.send = send;
exports.receive = receive;
exports.ack = ack;