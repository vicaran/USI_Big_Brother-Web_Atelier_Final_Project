var k = require('./../k_globals/koala.js')
/**
 * This function save the data on Redis
 *
 * Structure of the database: {TesselId(e.g. "1"): [jsonOfData,jsonOfData]}
 *
 * @param data The json with the producer's data
 * @param d The Date.now()
 */
var addToDatabase = function (data, d) {
    //var keyDate = convertDate(d) + "-" + convertHour(d);
    var parse = JSON.parse(data);
    // console.log('this is parse', parse);
    var _id = parse._id;
    console.log('------------------- REQUEST FROM SOCKET: ', _id, ' -------------------')
    var json = {
        volume: parse.volume,
        light: parse.light,
        temperature: parse.temperature,
        time: parse.time
    };

    k.stateful.get(_id, function (res) {
        var toSave;
        if (res === null || res === undefined) {
            //if there isn't  a array of json
            toSave = [json];

        } else {
            var parseRes = JSON.parse(res);
            parseRes.push(json);
            toSave = parseRes;
        }
        k.stateful.set(_id, JSON.stringify(toSave), function () {
            console.log('saved')
        });
    })
};

/**
 * This function will send the data in the Delta since - to
 *
 * @param id The unique id of the Tessel
 * @param since The starting point
 * @param to The finish point
 */
 var retrieveData = function (id, since, to) {
    k.stateful.get(id, function (res) {
        var parse = JSON.parse(res);
        var oldest = parse[0].time;
        console.log("Since: ", since, " to: ", to)
        var startPoint =  since - oldest;
        startPoint = convertMStoS(startPoint)
        var finishPoint = to - since;
        finishPoint = convertMStoS(finishPoint)
        var toRetrieveData = [];
        var i = startPoint;
        while (i < startPoint + finishPoint){
            i++;
            toRetrieveData.push(parse[i]);

        }
        var toSendJSON = {header: "database"};
        toSendJSON.content = toRetrieveData;
        k.send(JSON.stringify(toSendJSON))

    });

};


/**
 * This function converts Millisecond number into Seconds
 *
 * @param ms A millisecond number
 * @returns {number} The second from the milliseconds
 */
function convertMStoS(ms){

    return Math.floor(ms/1000);
}

/**
 * Convert the date into the form of: gg/mm/yyyy
 * @param date The Date.now() from receiver.js
 * @returns {string} gg/mm/yyyy
 */
function convertDate(date) {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }

    var d = new Date(date);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}

/**
 *  Convert the date from converDate() into the form of gg/mm/yyyy-h/m/s
 * @param date The Date.now() from receiver.js
 * @returns {*} Return the convertDate + '-h/m/s'
 */
function convertHour(date) {
    var d = new Date(date);
    var datetext = d.toTimeString();
    return datetext.split(' ')[0];
}

exports.addToDatabase = addToDatabase;
exports.retrieveData = retrieveData;