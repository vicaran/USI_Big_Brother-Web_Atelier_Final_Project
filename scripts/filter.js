var k = require('./../k_globals/koala.js')
var dataB = require('./database.js')
var clusterStorage = require('./../k_globals/cluster_storage')

k.createNode(function (msg) {
    console.log("createNode" + msg);
    msg = JSON.parse(msg);
    switch (msg.header) {
        case 'GET':
            clusterStorage.keys('*',function(res){
                var parse = JSON.parse(res)
                parse.header = 'GET'
                k.send(JSON.stringify(parse))
            })
            break
        default:
            dataB.retrieveData(msg.id, msg.from, msg.to);
    }
});

console.log('waiting for request');

