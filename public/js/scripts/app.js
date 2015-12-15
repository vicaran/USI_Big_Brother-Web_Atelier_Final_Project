/**
 * GG A TUTTI, é stato fatto il miracolo !!
 * Commitozky alle 5 del mattino e si esce a comandare
 * https://www.youtube.com/watch?v=FrG4TEcSuRg
 */
var tesselIds = {};
var graphDimension = 10;
var minor = false;
var currentId;

Chart.defaults.global.responsive = true;

Chart.defaults.global.animation = false;
Chart.defaults.global.showTooltips = false;

function getDataChart() {
    var lineChartData = {
        labels: [],
        datasets: [{
            label: "volume Data Set",
            fillColor: "rgba(215,54,139,0.2)",
            strokeColor: "rgba(215,54,139,1)",
            pointColor: "rgba(215,54,139,1)",
            pointStrokeColor: "rgba(215,54,139,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
        }, {
            label: "light dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "rgba(151,187,205,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
        }, {
            label: "temp dataset",
            fillColor: "rgba(241,85,45,0.2)",
            strokeColor: "rgba(241,85,45,1)",
            pointColor: "rgba(241,85,45,1)",
            pointStrokeColor: "rgba(241,85,45,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(241,85,45,1)",
            data: []
        }]

    };
    return lineChartData;
}

function canvasCreate(id) {

    var container = document.getElementById("ChartDiv");
    var div = document.createElement('div')
    var p = document.createElement('p')
    p.innerHTML = id;
    div.className = "col-sm-6"
    var canvas = document.createElement('canvas')
    canvas.className = "chart"
    canvas.setAttribute('id', id)
    div.appendChild(p);
    div.appendChild(canvas)
    container.appendChild(div);


}


function graphCreate(id) {
    ctx = document.getElementById(id).getContext("2d");
    myLine = new Chart(ctx)
    myLineChart = myLine.Line(tesselIds[id].data, {
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
    });
    tesselIds[id].canvas = ctx;
    tesselIds[id].myLine = myLine;
    tesselIds[id].myLineChart = myLineChart;

}

function createNewVariable(id) {
    var waitMessage = document.getElementById("waitTest");
    if (waitMessage != undefined || waitMessage != null) {
        waitMessage.remove();
    }
    tesselIds[id] = {
        data: getDataChart()
    }

}

function convertDate(d) {
    var parseDate = new Date(d).toUTCString()
    return parseDate.split(' ')[4]
}

function updateChart(id, parse) {
    var myLineChart = tesselIds[id].myLineChart
    myLineChart.destroy();

    time = convertDate(parse.time)
    var lineChartData = tesselIds[id].data
    //push newly received data (time & data)
    lineChartData.datasets[0].data.push(parse.volume);
    lineChartData.datasets[1].data.push(parse.light);
    lineChartData.datasets[2].data.push(parse.temperature);
    if (minor) {
        console.log(lineChartData.labels.length - graphDimension)
        for (var i = 0; i < (lineChartData.labels.length - graphDimension); i++) {
            lineChartData.datasets[0].data.shift()
            lineChartData.datasets[1].data.shift()
            lineChartData.datasets[2].data.shift()
            lineChartData.labels.shift();
        }
    }

    lineChartData.labels.push(time);
    console.log('dimension:', graphDimension)
    //if longer than 20, remove the first one
    if (lineChartData.datasets[0].data.length > graphDimension || lineChartData.datasets[1].data.length > graphDimension || lineChartData.datasets[2].data.length > graphDimension) {
        lineChartData.datasets[0].data.shift();
        lineChartData.datasets[1].data.shift();
        lineChartData.datasets[2].data.shift();
        lineChartData.labels.shift();
    }
    var myLine = tesselIds[id].myLine
    //draw it
    myLine.Line(lineChartData);
    createIdSelector()

}


function chartHandler(parse) {
    //console.log(volume,light, time)
    if (tesselIds[parse._id] == undefined || tesselIds[parse._id] == null) {
        createNewVariable(parse._id)
        canvasCreate(parse._id)
        graphCreate(parse._id)
    }
    updateChart(parse._id, parse);
}

function createIdSelector() {
    var idArray = Object.keys(tesselIds);
    var container = document.getElementById("IdSelectorContainer");

    for (var i = 0; i < idArray.length; i++) {
        //s refers to 'section'
        var checkIfExist = document.getElementById('s' + idArray[i].toString());

        if (checkIfExist != undefined) {
            continue
        }
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', "IdSelector");
        newDiv.setAttribute('id', 's' + idArray[i].toString());
        var h2 = document.createElement('h2');
        h2.innerHTML = idArray[i];
        newDiv.appendChild(h2);
        newDiv.addEventListener('click', function (e) {
            currentId = this.id;
            console.log(currentId)
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

function changeDimension() {
    document.querySelector('paper-slider').addEventListener('change', function (event) {

        minor = event.target.value < graphDimension
        console.log('minor: ', minor)
        graphDimension = event.target.value;
        console.log(event.target.value);
    });
}
changeDimension();


function datePickerToUTC(dateFromDatapicker) {
    console.log(dateFromDatapicker)
    var d = new Date(dateFromDatapicker)
    var timestamp = d.getTime();
    console.log('Check data:', new Date(timestamp));
    return timestamp
}

function sendTimeStampToDB(from, to) {
    producer_handler(JSON.stringify({
        header: "browser",
        from: from,
        to: to,
        id: deviceID
    }), 'producer')
}

function handleDatabaseRequest() {
    var from;
    var to;

    $('#since').datetimepicker();
    $('#to').datetimepicker({
        useCurrent: false //Important! See issue #1075
    });
    $("#since").on("dp.change", function (e) {
        $('#to').data("DateTimePicker").minDate(e.date);
        var dateToParse = $('#since').datepicker(false, 'getDate')[0].childNodes[1].value
        from = datePickerToUTC(dateToParse)

    });
    $("#to").on("dp.change", function (e) {
        var dateToParse = $('#to').datepicker(false, 'getDate')[0].childNodes[1].value
        to = datePickerToUTC(dateToParse)

        $('#since').data("DateTimePicker").maxDate(e.date);
    });

    var btn = document.getElementById('reqDBbtn')
    btn.addEventListener('click', function () {
        if (from != undefined && to != undefined) {
            sendTimeStampToDB();
        }
        else{
            var sinceInp = document.getElementById('sinceInput')
            var toInp =   document.getElementById('toInput');
            if(sinceInp.value == ""){
                sinceInp.value = 'Please write a date'
            }
            if(toInp.value ==""){
                toInp.value = 'Please write a date'
            }

            throw new Error('write a Date')

        }
    })
}


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

waitForStreaming()
handleDatabaseRequest();
