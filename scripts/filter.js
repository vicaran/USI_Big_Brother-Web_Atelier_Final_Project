var k = require('./../k_globals/koala.js')
var dataB = require('./database.js')
var clusterStorage = require('./../k_globals/cluster_storage')

k.createNode(function (msg) {
    console.log("createNode" + msg);
    msg = JSON.parse(msg);
    switch (msg.header) {
        case 'GET':
            console.log('FILTER, GET')

            clusterStorage.keys('*',function(res){
                console.log(res)
                var parse = JSON.parse(res)
                console.log("INSIDE DB GET")
                parse.header = 'GET'
                k.send(JSON.stringify(parse))
            })
            break
        default:
            dataB.retrieveData(msg.id, msg.from, msg.to);
    }
});

console.log('waiting for request');

