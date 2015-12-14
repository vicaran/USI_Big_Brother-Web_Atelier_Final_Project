/**
 * Created by VeaVictis on 13/12/15.
 */

var idArray = [1, 2];
var tesselIds = {};
var myLineChart;
var myLineChart1;
var ctx;
//var updateGraphLine = function (volume, light, temp, time) {
//    //console.log(volume,light, time)
//    var date = new Date(time).toUTCString();
//    date = date.split(' ')[4];
//
//    myRealLine.destroy();
//
//
//    //push newly received data (time & data)
//    lineChartData1.datasets[0].data.push(volume);
//    document.getElementById('vol_2').innerHTML = volume;
//    lineChartData1.datasets[1].data.push(light);
//    document.getElementById('light_2').innerHTML = light;
//    lineChartData1.datasets[2].data.push(temp);
//    document.getElementById('temp_2').innerHTML = temp;
//    lineChartData1.labels.push(date);
//
//    //if longer than 20, remove the first one
//    if (lineChartData1.datasets[0].data.length > 10 | lineChartData1.datasets[1].data.length > 10 | lineChartData1.datasets[2].data.length > 10) {
//        lineChartData1.datasets[0].data.shift();
//        lineChartData1.datasets[1].data.shift();
//        lineChartData1.datasets[2].data.shift();
//        lineChartData1.labels.shift();
//    }
//
//    //draw it
//    myLineChart.Line(lineChartData1);
//
//    //empty the content of the div
//    //document.getElementById('newdata').setAttribute('volume', "");
//    //document.getElementById('newdata').setAttribute('time', "");
//}

function createGraph() {

    ctx = document.getElementById("myChart").getContext("2d");

    //Chart.defaults.global.responsive = true;

    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: []
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: []

            },
            {
                label: "My third dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: []

            }
        ]
    };

    myLineChart = myLine.Line(data, {
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
    });

    var ctx1 = document.getElementById("myChart1").getContext("2d");


    myLineChart1 = new Chart(ctx1).Line(data);
    console.log(myLineChart1)


}

createGraph();
myLine = new Chart(ctx);

Chart.defaults.global.animation = false;
Chart.defaults.global.responsive = true;


function check(parse) {
    //myLineChart.addData([data.temperature, data.light, data.volume],data.time.toString())
    myLineChart.datasets[0].data.push(parse.temperature)
    myLineChart.labels = parse.time.toString
    console.log(myLineChart.datasets[0].data)
    myLineChart = new Chart(ctx).Line(myLineChart.datasets)

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

