/**
 * Created by VeaVictis on 25/11/15.
 */
var pws = require("./producer_connection.js")

function mainExample() {
    pws.receive(function(data){console.log(data + '--')})

    interval = setInterval(function () {

        var dataTest = {
            a: 0
        };
        pws.send(dataTest)
    }, 500)
}

mainExample();