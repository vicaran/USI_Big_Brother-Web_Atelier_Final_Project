var k = require('./../k_globals/koala.js')

var addToDatabase = function(data, date) {
    var jsonParsed = JSON.parse(data);
    var valueJson = {
    	"id" : 1;
        "volume": jsonParsed["volume"],
        "light": jsonParsed["light"],
        "temperature": 0
    }
    var keyDate = convertDate(date) + "-" + convertHour(date);
    console.log('Key to store in the database:', keyDate);
    console.log('and this is the respective value:', valueJson);
    

    k.stateful.set(keyDate, valueJson, function(){
    	console.log('Saved on the database');
    });
}

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