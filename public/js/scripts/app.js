/**
 * Created by VeaVictis on 13/12/15.
 //*/
//var k = require('./../../../k_globals/koala.js');


var idArray = [1, 2];
var tesselIds = {};
var myLineChart;
var myLineChart1;

k.createNode(function (data) {
    console.log(data)
    //console.log(data);
    var parse = JSON.parse(data);

    switch (parse){
        case "browser":
            k.send(JSON.stringify(data));
            break
        case "database":
            console.log("database data", parse)


    }

    //
    //    var ht = {
    //        "1": ["updateGraphLine", "updateGraphBar"],
    //        "2": ["updateGraphLine1", "updateGraphBar1"]
    //    }
    //
    //    // console.log("else", data)
    //    // var data = JSON.parse(data);
    //    //console.log(data);
    //
    //    if (ht[data._id]) {
    //        k.callFunction(ht[data._id][0], [data.volume, data.light, data.temperature, data.time])
    //        k.callFunction(ht[data._id][1], [data.volume, data.light, data.temperature, data.time])
    //    }
    //}e
})
window.onload = function () {

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

        var ctx = document.getElementById("myChart").getContext("2d");

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
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        Chart.defaults.global.responsive = true;

        myLineChart = new Chart(ctx).Line(data);


        var ctx1 = document.getElementById("myChart1").getContext("2d");


        myLineChart1 = new Chart(ctx1).Line(data);
        console.log(myLineChart1)


    }

    createGraph();

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
    };
    createIdSelector()

};