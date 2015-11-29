
/**
 * Main function that receiver the data from network add turn on some leds
 */
var WebSocket = require('ws');
var ws = new WebSocket('ws://195.176.181.55:15000');

ws.on('open', function open() {
    ws.send('BROWSER');
});

ws.on('message', function(data, flags) {
    console.log(data)
    // flags.binary will be set if a binary data is received.
    // flags.masked will be set if the data was masked.
});