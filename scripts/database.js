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
        if (res === null || res === undefined || res === '*') {
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
 * @param from The starting point
 * @param to The finish point
 */
 var retrieveData = function (id, from, to) {
    k.stateful.get(id, function (res) {
        console.log('retrivedata', from, to)
        var toRetrieveData = [];
        var parse = JSON.parse(res);
        console.log(parse)
        var nearestFrom = binary_search_recursive(parse,from,0,parse.length - 1)
        var nearestTo = binary_search_recursive(parse,to,0,parse.length - 1)
        console.log(nearestFrom,nearestTo)
        for(var i = 0; i < nearestTo - nearestFrom;i++){
            toRetrieveData.push(parse[nearestFrom + i]);
        }

        //var oldest = parse[0].time;
        //console.log("Since: ", since, " to: ", to)
        //var startPoint =  since - oldest;
        //startPoint = convertMStoS(startPoint)
        //var finishPoint = to - since;
        //finishPoint = convertMStoS(finishPoint)
        //var toRetrieveData = [];
        //var i = startPoint;
        //while (i <= startPoint + finishPoint){
        //    toRetrieveData.push(parse[i]);
        //    i++;
        //}
        //console.log('Found: ', toRetrieveData )
        var toSendJSON = {header: "database"};
        //console.log('*************************', toRetrieveData)
        toSendJSON.data = toRetrieveData;
        k.send(JSON.stringify(toSendJSON))

    });

};

/**
 * A modified binary search in order to find the nearest index of value
 * @param a The array
 * @param value What we wants to search
 * @param lo The lowest value
 * @param hi The highest value
 * @returns {*}
 */
function binary_search_recursive(a, value, lo, hi) {

    var mid = Math.floor((lo + hi) / 2);

    if(Math.abs(lo-hi) == 1){
        if(Math.abs(a[lo].time - value) >Math.abs(a[hi].time - value )){
            console.log('found: ', a[lo].time, ' value: ', value)
            return lo
        }
        else{
            console.log('found: ', a[hi].time, ' value: ', value)
            return hi
        }
    }
    if(value == a[mid].time){
        console.log('already in databae')
        return mid
    }
    if (a[mid].time > value) {
        return binary_search_recursive(a, value, lo, mid - 1);
    }
    if (a[mid].time < value) {
        return binary_search_recursive(a, value, mid + 1, hi);
    }
    return mid;
}

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