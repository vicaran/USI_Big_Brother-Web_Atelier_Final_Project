var pws = require("./tesselScripts/producer_connection.js")

/**
 * Main function that receiver the data from network add turn on some leds
 */

var receiveData = function () {
    pws.send('BROWSER');

    pws.receive(function (data) {
        console.log(data)

    })
}


//create the hidden div that will contain the received data


receiveData();