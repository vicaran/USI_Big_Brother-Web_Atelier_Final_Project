var k = require('./../k_globals/koala.js')

var addToDatabase = function(data, date) {
    var jsonParsed = JSON.parse(data);
    var jsonValue = {
    	"volume": jsonParsed["volume"],
    	"light": jsonParsed["light"],
    	"temperature": 0
    }
    console.log('Data received for database:', jsonValue);
    var keyDate = convertDate(date) + "-" + convertHour(date);
    console.log('And this is the date: ', keyDate);

    // k.stateful.set(key, value, cb);
}

function convertDate(inputFormat) {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }
    var d = new Date(inputFormat);
    datetext = d.toTimeString();
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}

function convertHour(inputFormat){
	var d = new Date(inputFormat);
    datetext = d.toTimeString();
    return datetext = datetext.split(' ')[0];
}

exports.addToDatabase = addToDatabase;