/**
 * Created by VeaVictis on 13/12/15.
 */

var idArray = [1, 2];
var tesselIds = {};
var myLineChart;
var myLineChart1;
var ctx;
var myLine ;

ctx = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.animation = false;
Chart.defaults.global.responsive = true;
myLine = new Chart(ctx)

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

}

myLineChart = myLine.Line(lineChartData, {
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
});

function createGraph() {

    ctx = document.getElementById("myChart").getContext("2d");
    myLine = new Chart(ctx)


    myLineChart = myLine.Line(data, {
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
    });

    var ctx1 = document.getElementById("myChart1").getContext("2d");


    myLineChart1 = new Chart(ctx1).Line(data);
    console.log(myLineChart1)


}


function check(parse) {
        //console.log(volume,light, time)


    myLineChart.destroy();


        //push newly received data (time & data)
        lineChartData.datasets[0].data.push(parse.volume);
        lineChartData.datasets[1].data.push(parse.light);
        lineChartData.datasets[2].data.push(parse.temperature);
        lineChartData.labels.push(parse.time);

        //if longer than 20, remove the first one
        if (lineChartData.datasets[0].data.length > 10 | lineChartData.datasets[1].data.length > 10 | lineChartData.datasets[2].data.length > 10) {
            lineChartData.datasets[0].data.shift();
            lineChartData.datasets[1].data.shift();
            lineChartData.datasets[2].data.shift();
            lineChartData.labels.shift();
        }

        //draw it
        myLine.Line(lineChartData);

        //empty the content of the div
        //document.getElementById('newdata').setAttribute('volume', "");
        //document.getElementById('newdata').setAttribute('time', "");


}

function createIdSelector() {
    var container = document.getElementById("IdSelectorContainer");
    for (var i = 0; i < idArray.length; i++) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', "IdSelector");
        newDiv.setAttribute('data-id', idArray[i]);
        var h2 = document.createElement('h2');
        h2.innerHTML = idArray[i];
        newDiv.appendChild(h2)
        newDiv.addEventListener('click', function (e) {
            var allDivs = document.getElementsByClassName('IdSelector activeIdSelector')
            if (this.className == "IdSelector") {
                e.target.element.className = this.className + ' activeIdSelector'
                for (var i = 0; i < allDivs.length; i++) {
                    if (allDivs[i] != e.target.element) {
                        allDivs[i].className = "IdSelector"
                    }
                }
            }
            else {
                e.target.element.className = "IdSelector"
            }


        });
        container.appendChild(newDiv)
    }
}
createIdSelector()

