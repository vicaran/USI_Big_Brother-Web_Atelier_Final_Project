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

        k.stateful.get(keyDate, function (res) {

            console.log('&&&&&&&& ', res)
            if (res == null || res == undefined) {
                var toSave = {}
                // gg luca
                toSave[_id] =
                    [{
                        volume: parse.volume,
                        light: parse.light,
                        temperature: parse.temperature
                    }]

                var json = JSON.stringify(toSave)
                k.stateful.set(keyDate, json, function () {
                });

            }
            else {
                var parseRes = JSON.parse(res)
                var find = false;
                var a = {
                    volume: parse.volume,
                    light: parse.light,
                    temperature: parse.temperature
                };
                console.log('----', parseRes)
                var keys = Object.keys(parseRes);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (_id == keys) {
                        console.log('Added at key: ', key)
                        parseRes[key].push(a)
                        find = true;
                    }
                }
                if (!find) {

                    parseRes[_id] = a
                }
                var newJson = JSON.stringify(parseRes)
                k.stateful.set(keyDate, newJson, function () {
                    console.log('saved: ', update)
                });
            }
            //console.log('****  ', res, '  ****')
        })

// k.stateful.get(keyDate, function (res) {
//     console.log(keyDate)
//     console.log('****  ', res, '  ****')
//     k.stateful.lpush(keyDate, data, function () {
//         k.stateful.get(keyDate, function (find) {
//             console.log(find)
//         })
//     })
// });
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