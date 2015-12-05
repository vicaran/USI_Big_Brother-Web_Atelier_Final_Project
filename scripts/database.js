var k = require('./../k_globals/koala.js')

/**
 * This function save the data on Redis
 * @param data The json with the producer's data
 * @param d The Date.now()
 */
var addToDatabase = function (data, d) {

        var keyDate = convertDate(d) + "-" + convertHour(d);
        var parse = JSON.parse(data)
        var _id = parse._id;
        console.log('------------------- REQUEST FROM SOCKET: ', _id, ' -------------------')

        k.stateful.get(keyDate, function (res) {
            if (res == null || res == undefined) {
                var toSave = {};
                //if there isn't create a array of json
                toSave[_id] =
                    [{
                        volume: parse.volume,
                        light: parse.light,
                        temperature: parse.temperature
                    }];

                var json = JSON.stringify(toSave)
                k.stateful.set(keyDate, json, function () {
                });

            }
            else {
                var parseRes = JSON.parse(res);
                console.log('******************* ', _id, ' *******************')
                var a = {
                    volume: parse.volume,
                    light: parse.light,
                    temperature: parse.temperature
                };
                if (parseRes[_id] != undefined) {
                    parseRes[_id].push(a);
                }
                else {
                    parseRes[_id] = [a]
                }
                var newJson = JSON.stringify(parseRes)
                k.stateful.set(keyDate, newJson, function () {
                    console.log('saved')
                });
            }
        })
    }
    ;

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