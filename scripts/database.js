var k = require('./../k_globals/koala.js')

var addToDatabase = function(data, date) {
    var jsonValue = JSON.parse(data);
    console.log('Data received:', jsonValue);
    var keyDate = convertDate(date);
    console.log('And this is the date: ', keyDate);

    // k.stateful.set(key, value, cb);
}

function convertDate(inputFormat) {
    // function pad(s) {
    //     return (s < 10) ? '0' + s : s;
    // }
    // var d = new Date(inputFormat);
    // return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    dformat = [(inputFormat.getMonth() + 1).padLeft(),
        inputFormat.getDate().padLeft(),
        inputFormat.getFullYear()
    ].join('/') + ' ' +
        [inputFormat.getHours().padLeft(),
        inputFormat.getMinutes().padLeft(),
        inputFormat.getSeconds().padLeft()
    ].join(':');
    return dformat;
}



exports.addToDatabase = addToDatabase;