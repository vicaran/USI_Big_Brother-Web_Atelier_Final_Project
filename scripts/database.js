var k = require('./../k_globals/koala.js')
/**
 * This function save the data on Redis
 * @param data The json with the producer's data
 * @param d The Date.now()
 */
var addToDatabase = function (data, d) {

    var keyDate = convertDate(d) + "-" + convertHour(d);
    var parse = JSON.parse(data);
    // console.log('this is parse', parse);
    var _id = parse._id;
    console.log('------------------- REQUEST FROM SOCKET: ', _id, ' -------------------')
    var json = {
        volume: parse.volume,
        light: parse.light,
        temperature: parse.temperature
    };

    k.stateful.get(keyDate, function (res) {
        var a = res;
        var toSave = {};
        if (a == null || a == undefined) {
            //if there isn't create a array of json
            toSave[_id] = [json]


        } else {
            console.log('res', a);
            var parseRes = JSON.parse(a);
            if (parseRes[_id] != undefined) {
                parseRes[_id].push(json);
            } else {
                console.log('PUSH ON DATABASE ON NEW ID: ', _id);
                parseRes[_id] = [json]
            }

            toSave = parseRes;
            a = toSave;
        }
        k.stateful.set(keyDate, JSON.stringify(toSave), function () {
            console.log('saved, ', toSave)
        });

    })
};

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