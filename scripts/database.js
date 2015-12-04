var k = require('./../k_globals/koala.js')

var addToDatabase = function (data, date) {
    var keyDate = convertDate(date) + "-" + convertHour(date);

    k.stateful.get(keyDate, function (res) {
        k.stateful.lpush(keyDate, [data], function () {
            console.log('Key existed and I pushed data into it.', keyDate);
        })
    });
};

function convertDate(inputFormat) {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }

    var d = new Date(inputFormat);
    datetext = d.toTimeString();
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}

function convertHour(inputFormat) {
    var d = new Date(inputFormat);
    datetext = d.toTimeString();
    return datetext = datetext.split(' ')[0];
}

exports.addToDatabase = addToDatabase;