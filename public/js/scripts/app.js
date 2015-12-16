/**
 * @author Francesco Saverio Zuppichini with the help of Gotie Muller for Usi Big Brother project
 */
var producersIds = {};
var graphDimension = 10;
var minor = false;
var currentId;

/*
 Chart beavihor
 */
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleFontColor = "white";
Chart.defaults.global.animation = false;
//Chart.defaults.global.animationEasing = "linear";


Chart.defaults.global.showTooltips = false;

/*

 Charts part

 All the charts are create use chart.js

 */
/**
 * This function generate the Data for the chart
 *
 * @param data The data field from the Database respons
 * @returns {{labels: Array, datasets: *[]}}
 */
function getDataChart(data) {

    var lineChartData = {
        labels: data == undefined ? [] : convertDateArray(data.time),
        datasets: [{
            label: "volume",
            fillColor: "rgba(215,54,139,0.2)",
            strokeColor: "rgba(215,54,139,1)",
            pointColor: "rgba(215,54,139,1)",
            pointStrokeColor: "rgba(215,54,139,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: data == undefined ? [] : data.volume
        }, {
            label: "temperature",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "rgba(151,187,205,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: data == undefined ? [] : data.temperature
        }, {
            label: "light",
            fillColor: "rgba(241,85,45,0.2)",
            strokeColor: "rgba(241,85,45,1)",
            pointColor: "rgba(241,85,45,1)",
            pointStrokeColor: "rgba(241,85,45,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(241,85,45,1)",
            data: data == undefined ? [] : parseLight(data.light)
        }]

    };
    return lineChartData;
}

/**
 * This function create an array that correspond to the state of the light that can be True of False
 * @param ArrayOfLight
 * @returns {Array}
 */
function parseLight(ArrayOfLight) {
    var toReturn = []
    for (var i = 0; i < ArrayOfLight.length; i++) {
        var toPush = ArrayOfLight ? 100 : 0;
        toReturn.push(toPush)
    }
    return toReturn
}

/**
 * This function converts an array of time stamp in the form of hh:mm:ss
 * @param {Array} ArrayOfTimeSpamp an array formed by timestamp
 * @returns {Array} The new converted array
 */
function convertDateArray(ArrayOfTimeSpamp) {
    var toReturn = []
    for (var i = 0; i < ArrayOfTimeSpamp.length; i++) {
        toReturn.push(convertDate(ArrayOfTimeSpamp[i]))
    }
    return toReturn;
}

/**
 * This function create a cavans ad then it appends to the container
 *
 * @param id The unique producer's id
 * @param cont The container where u want to append the canvas
 */
function canvasCreate(id, cont) {

    var container = cont || document.getElementById("ChartDiv");
    var div;
    var p = document.createElement('p')
    p.innerHTML = id;
    if (id == 'DB') {
        div = document.getElementById('dbChart');
    }
    else {
        div = document.createElement('div')
        div.className = "chart"
        div.appendChild(p);

    }
    var canvas = document.createElement('canvas')
    canvas.className = "chart"
    canvas.setAttribute('id', id)
    div.appendChild(canvas)
    container.appendChild(div);


}

/**
 * This function is used for two this:
 * 1) store all the object that we will need for updating the graph
 * 2) create the first graph
 *
 * @param id The unique producer's id
 */
function graphCreate(id) {
    ctx = document.getElementById(id).getContext("2d");
    myLine = new Chart(ctx)
    myLineChart = myLine.Line(producersIds[id].data, {
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
    });
    producersIds[id].canvas = ctx;
    producersIds[id].myLine = myLine;
    producersIds[id].myLineChart = myLineChart;

}

/**
 * This functions puts the correct data in the dictionary producersId
 * @param id The unique producer's id
 * @param data
 */
function putInProducersIds(id, data) {
    var waitMessage = document.getElementById("waitTest");
    if (waitMessage != undefined || waitMessage != null) {
        waitMessage.remove();
    }
    producersIds[id] = {
        data: getDataChart(data)
    }

}

/**
 * This function is used to convert from timestamp to hh:mm:ss
 * since this is a streaming view we don't need the yy:mm:dd
 * @param timestamp
 * @returns {String} a date in the form hh:mm:ss
 */

function convertDate(timestamp) {
    var parseDate = new Date(timestamp).toUTCString()
    return parseDate.split(' ')[4]
}

function updateLegend() {
    var keys = Object.keys(producersIds)
    var lastVolume = 0
    var lastLight = 0
    var lastTemperature = 0
    var activeProducer = 0;
    for (var i = 0; i < keys.length; i++) {
        if (producersIds[keys[i]].data != undefined) {
            var dataset = producersIds[keys[i]].data.datasets
            console.log('dataset', dataset)
            activeProducer++
            lastVolume += (dataset[0][dataset[0].length - 1])
            lastLight += (dataset[1][dataset[1].length - 1])
            lastTemperature += (dataset[2][dataset[2].length - 1])
        }
    }
    console.log(lastLight,lastTemperature,lastVolume)
    var volume = document.getElementById('divVolumeColor')
    var light = document.getElementById('divLightColor')
    var tempereture = document.getElementById('divTemperatureColor')
    volume.innerHTML = 'Volume: ' + lastVolume / activeProducer
    light.innerHTML = 'Light: ' + lastLight / activeProducer
    tempereture.innerHTML = 'Temperature: ' + lastTemperature / activeProducer

}
/**
 * This function updates the current chart
 * @param id The unique producer's id
 * @param parse The new producer's data
 */
function updateChart(id, parse) {
    var myLineChart = producersIds[id].myLineChart
    myLineChart.destroy();
    console.log(producersIds, '____________________________________________')
    updateLegend()
    var time = convertDate(parse.time)
    var lineChartData = producersIds[id].data
    //push newly received data (time & data)
    var light = parse.light ? 100 : 0
    lineChartData.datasets[0].data.push(parse.volume);
    lineChartData.datasets[1].data.push(light);
    lineChartData.datasets[2].data.push(parse.temperature);
    if (minor) {
        for (var i = 0; i < (lineChartData.labels.length - graphDimension); i++) {
            lineChartData.datasets[0].data.shift()
            lineChartData.datasets[1].data.shift()
            lineChartData.datasets[2].data.shift()
            lineChartData.labels.shift();
        }
    }

    lineChartData.labels.push(time);
    //if longer than graphDimension, remove the first one
    if (lineChartData.datasets[0].data.length > graphDimension || lineChartData.datasets[1].data.length > graphDimension || lineChartData.datasets[2].data.length > graphDimension) {
        lineChartData.datasets[0].data.shift();
        lineChartData.datasets[1].data.shift();
        lineChartData.datasets[2].data.shift();
        lineChartData.labels.shift();
    }
    var myLine = producersIds[id].myLine
    //draw it
    myLine.Line(lineChartData);
    createIdSelector()

}

function compressData(parse) {
    console.log('COMPRESSION', parse)
    var length = parse.time.length
    var ratio = Math.ceil(length / 60)
    var toSend = {
        volume: [],
        light: [],
        temperature: [],
        time: []
    };
    for (var i = 0; i < length; i += ratio) {
        if ((i % ratio) == 0) {
            toSend.time.push(parse.time[i])
        }
        var light = 0;
        var temperature = 0;
        var volume = 0;
        for (var j = i; j < i + ratio; j++) {
            if (j == length) {
                break
            }
            light += parse.light[j]
            temperature += parse.temperature[j]
            volume += parse.volume[j]
        }
        light /= ratio;
        temperature /= ratio;
        volume /= ratio;
        toSend.light.push(light)
        toSend.temperature.push(temperature)
        toSend.volume.push(volume)

    }
    console.log(toSend)
    return toSend
}

/**
 * This function parse the Database answer in order to create a new set of data for a chart
 * @param parse The new producer's data
 * @returns {{volume: Array, light: Array, temperature: Array, time: Array}} An json that will be use in putInProducersIds
 */
function parseForDbChart(parse) {
    var toSend = {
        volume: [],
        light: [],
        temperature: [],
        time: []
    };
    for (var i = 0; i < parse.length; i++) {
        toSend.time.push(parse[i].time)
        toSend.volume.push(parse[i].volume)
        toSend.light.push(parse[i].light)
        toSend.temperature.push(parse[i].temperature)
    }
    console.log('LENGH: ', toSend.time.length)
    if (toSend.time.length > 60) {
        console.log('>60')
        toSend = compressData(toSend)
    }
    return toSend;
}

/**
 * This function initialized all the keys form the database
 * @param keys The keys from the database
 */
function initializedProducersIds(keys) {
    for (var i = 0; i < keys.length; i++) {
        producersIds[keys[i]] = {
            graph: false
        }
    }
}

/**
 * This function is the main chart handler
 * @param parse The new producer's data
 */
function chartHandler(parse) {
    switch (parse.header) {
        case 'database':
            removeOldChart()
            var data = parseForDbChart(parse.data);
            putInProducersIds('DB', data)
            console.log('DATA in dictonary', producersIds['DB'].data)
            canvasCreate('DB', document.getElementById('databaseRow'))
            graphCreate('DB');
            break;
        case 'DBGET':
            initializedProducersIds(parse.keys)
            createIdSelector()
            break;
        default:
            if (producersIds[parse._id] == undefined || producersIds[parse._id] == null || producersIds[parse._id].graph == false) {
                putInProducersIds(parse._id);
                canvasCreate(parse._id)
                graphCreate(parse._id)

            }
            updateChart(parse._id, parse);

        //if (parse.header == 'database') {
        //    console.log(parse, 'diocane')
        //    removeOldChart()
        //    putInProducersIds('DB', parseForDbChart(parse.data))
        //    canvasCreate('DB', document.getElementById('databaseRow'))
        //    graphCreate('DB');
        //    //drawChartDb('DB')
        //}
        //else {
        //    //check if data exists
        //    if (producersIds[parse._id] == undefined || producersIds[parse._id] == null) {
        //        putInProducersIds(parse._id);
        //        canvasCreate(parse._id)
        //        graphCreate(parse._id)
        //    }
        //    updateChart(parse._id, parse);
        //}

    }
}
/**
 * This function removes the DB old Chart
 */
function removeOldChart() {
    var oldChart = document.getElementById('DB')
    if (oldChart != undefined) {
        var parent = oldChart.parentNode
        parent.removeChild(oldChart)
    }

}

/**
 * This functions create the producers selectors that you can find in Database section in the UBB home page
 */
function createIdSelector() {
    var idArray = Object.keys(producersIds);
    var container = document.getElementById("IdSelectorContainer");

    for (var i = 0; i < idArray.length; i++) {
        var id = 's:' + idArray[i].toString()
        //s refers to 'section'
        var checkIfExist = document.getElementById(id);
        if (checkIfExist != undefined) {
            continue
        }
        if (idArray[i] == 'DB') {
            continue
        }
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', "IdSelector");
        newDiv.setAttribute('id', id);
        var h2 = document.createElement('h2');
        h2.innerHTML = idArray[i];
        newDiv.appendChild(h2);
        newDiv.addEventListener('click', function (e) {
            var id = Number(this.id.split(':')[1]);
            if (currentId == id) {
                currentId = undefined;
            }
            else {
                currentId = id
            }
            var allDivs = document.getElementsByClassName('IdSelector activeIdSelector')
            if (this.className == "IdSelector") {

                this.className = this.className + ' activeIdSelector'
                for (var i = 0; i < allDivs.length; i++) {
                    if (allDivs[i] != this) {
                        allDivs[i].className = "IdSelector"
                    }
                }
            }
            else {
                this.className = "IdSelector"
            }


        });
        container.appendChild(newDiv)
    }
}

/**
 * This function is the handler for the slider
 */
function changeDimension() {
    document.querySelector('paper-slider').addEventListener('change', function (event) {

        minor = event.target.value < graphDimension
        console.log('minor: ', minor)
        graphDimension = event.target.value;
        console.log(event.target.value);
    });
}

/**
 * This function converts the data from datapicker into UTC
 *
 * @param dateFromDatapicker It is the date gather from datapicker
 * @returns {Number} The UTC/timestamp data
 */
function datePickerToUTC(dateFromDatapicker) {
    console.log(dateFromDatapicker)
    var d = new Date(dateFromDatapicker)
    return d.getTime()
}

/**
 * This functions send the request to the DB
 * @param {Number} from The time of the first data that we want
 * @param {Number} to The time of the last data that we want
 */
function sendTimeStampToDB(from, to) {
    console.log('INSIDE sendTimeStampToDB')
    producer_handler(JSON.stringify({
        header: "browser",
        from: from,
        to: to,
        id: currentId
    }), 'producer')
}

/**
 * This function return only the dd/mm/yy part from a dd/mm/yy hh/mm AM/PM string
 * @param dateFromDatapicker Date from datepicker
 * @returns {String} Date in dd/mm/yy format
 */
function parseDatePicker(dateFromDatapicker) {
    return dateFromDatapicker.split(' ')[0]
}


/**
 * This function create the header for the DB chart
 * @param {Number} from The time of the first data that we want
 * @param {Number} to The time of the last data that we want
 */
//function createDBChartHeader(from, to) {
//    var chartHeader = document.createElement('h2')
//    chartHeader.innerHTML = parseDatePicker(from) + ' - ' + parseDatePicker(to)
//    chartHeader.className = 'text-center';
//    document.getElementById('dbChart').appendChild(chartHeader)
//
//}

/**
 * This function handle the request that we want to do
 */
function handleDatabaseRequest() {
    var from;
    var to;

    /*
     Jquery stuff for datapicker
     */
    $('#since').datetimepicker();
    $('#to').datetimepicker({
        useCurrent: false //Important! See issue #1075
    });
    $("#since").on("dp.change", function (e) {
        //$('#to').data("DateTimePicker").minDate(e.date);
        from = $('#since').datepicker(false, 'getDate')[0].childNodes[1].value

    });
    $("#to").on("dp.change", function (e) {
        //$('#since').data("DateTimePicker").maxDate(e.date);

        to = $('#to').datepicker(false, 'getDate')[0].childNodes[1].value
        console.log(to)

    });

    var btn = document.getElementById('reqDBbtn')
    btn.addEventListener('click', function () {
        /*
         Check if every input is complete
         */
        if (from != undefined && to != undefined && currentId != undefined) {
            //createDBChartHeader(from, to)
            console.log(from, to, '***(*(&**&(^*%^&^*%&^$&*$*&(%)^(*(%')
            sendTimeStampToDB(datePickerToUTC(from), datePickerToUTC(to));
        }
        else {
            /*
             Three are the cases:
             1) you don't select the first date input
             2) you don't select the second date input
             3) you don't select the correct Id
             */
            var sinceInp = document.getElementById('sinceInput')
            var toInp = document.getElementById('toInput');
            //no from input
            if (sinceInp.value == "") {
                sinceInp.value = 'Please write a date'
            }
            //no to input
            if (toInp.value == "") {
                toInp.value = 'Please write a date'
            }
            var count = 0;
            // no id
            if (document.getElementsByClassName('activeIdSelector').length == 0) {
                var divs = document.getElementsByClassName('IdSelector')
                //make them blink!
                var interval = setInterval(function () {
                    for (var i = 0; i < divs.length; i++) {
                        console.log(count % 2, '***********')
                        if (count % 2) {
                            divs[i].className += ' activeIdSelector'
                        }
                        else {
                            divs[i].className = 'IdSelector';
                        }
                    }
                    count++
                    if (count == 9) {
                        clearInterval(interval)
                    }
                }, 100)
            }
            throw new Error('write a Date')

        }

    })
}

/**
 * This function create the '... waiting for operators' write
 */
function waitForStreaming() {
    var existCharts = document.getElementById("ChartDiv").children.length == 0
    console.log(". . . . waiting for operators")
    if (existCharts) {
        var container = document.getElementById("ChartDiv");
        var containerH2 = document.createElement('div')
        var waitTest = document.createElement('h2')
        containerH2.className = 'col-sm 12 '
        waitTest.setAttribute('id', 'waitTest')
        waitTest.className = 'text-center'
        waitTest.innerHTML = '. . . . waiting for operators'
        containerH2.appendChild(waitTest)
        container.appendChild(containerH2)
    }
}

function getProducersIds() {
    console.log('waiting for conneting')

    setTimeout(function () {
        console.log('INside GET producers ids')
        producer_handler(JSON.stringify({
            header: "GET"
        }), 'producer')

    }, 5000);

}

function mainHandler() {
    /*
     functions call
     */
    getProducersIds()
    changeDimension();
    waitForStreaming();
    handleDatabaseRequest();
}


mainHandler()