/**
 * This module handle http connection
 */

var http = require('http');
http.post = require('http-post');

var port = 15000;
var hostname = "http://neha.inf.unisi.ch:";
var url = hostname + port.toString();

var send = function(message) {
    setImmediate(function start() {
        http.get("http://neha.inf.unisi.ch:15000/" + message, function(res) {
            var bufs = [];
            res.on('data', function(data) {
                bufs.push(new Buffer(data));
                console.log('# received', new Buffer(data).toString());
            })
            res.on('end', function() {
                console.log('done.');
            })
        }).on('error', function(e) {
            console.log('not ok -', e.message, 'error event')
            setImmediate(start);
        });
    });
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