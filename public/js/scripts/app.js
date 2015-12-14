/**
 * GG A TUTTI, é stato fatto il miracolo !!
 * Commitozky alle 5 del mattino e si esce a comandare
 */

var tesselIds = {};
var graphDimension = 10;
var minor = false;

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
    tesselIds[id] = {
        data: getDataChart()
    }

}

function updateChart(id, parse) {
    var myLineChart = tesselIds[id].myLineChart
    myLineChart.destroy();

    var lineChartData = tesselIds[id].data
    //push newly received data (time & data)
    lineChartData.datasets[0].data.push(parse.volume);
    lineChartData.datasets[1].data.push(parse.light);
    lineChartData.datasets[2].data.push(parse.temperature);
    if(minor){
        console.log('******** MINOR')
        console.log(lineChartData.labels.length - graphDimension)
        for(var i = 0; i < (lineChartData.labels.length - graphDimension); i ++) {
            console.log('diocan')
            lineChartData.labels.shift();
        }
    }
    lineChartData.labels.push(parse.time);

    //if longer than 20, remove the first one
    if (lineChartData.datasets[0].data.length > graphDimension | lineChartData.datasets[1].data.length > graphDimension | lineChartData.datasets[2].data.length > graphDimension) {
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
        var checkIfExist = document.getElementById('c' + idArray[i].toString());

        if (checkIfExist != undefined) {
            continue
        }
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', "IdSelector");
        newDiv.setAttribute('id', 'c' + idArray[i].toString());
        var h2 = document.createElement('h2');
        h2.innerHTML = idArray[i];
        newDiv.appendChild(h2);
        newDiv.addEventListener('click', function (e) {
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

        minor =  event.target.value < graphDimension
        console.log('minor: ', minor)
        graphDimension = event.target.value;

        var containerCharts = document.getElementById("ChartDiv")
        console.log(event.target.value);
    });
}
changeDimension();
