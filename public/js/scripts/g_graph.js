//This function is called when scripts/helper/util.js is loaded.
//If util.js calls define(), then this function is not fired until
//util's dependencies have loaded, and the util argument will hold
//the module value for "helper/util".
var websocket = new WebSocket("ws://195.176.181.55:16000");

websocket.onmessage = function(event) {
    console.log(event);
}
//var k = require('./../../../k_globals/koala.js')
//define the chart
var lineChartData = {
    labels: [],
    datasets: [{
        label: "Volume",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: []
    }, 
    {
        label: "Light",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: []
    },
    {
        label: "Temp",
        fillColor: "rgba(50,0,255,0.2)",
        strokeColor: "rgba(50,0,255,1)",
        pointColor: "rgba(50,0,255,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: []
    }]

}


var barChartData = {
    labels: [],
    datasets: [{
        label: "Volume",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(220,220,220,1)",
        data: []
    }, {
        label: "Light",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
    },{
        label: "Temp",
        fillColor: "rgba(50,0,255,0.2)",
        strokeColor: "rgba(50,0,255,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []},
        ]

}

var lineChartData1 = {
    labels: [],
    datasets: [{
        label: "Volume",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: []
    }, {
        label: "Light",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: []
    },
    {
        label: "Temp",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(50,0,255,1)",
        pointColor: "rgba(50,0,255,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: []
    }]

}


var barChartData1 = {
    labels: [],
    datasets: [{
        label: "Volume",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(220,220,220,1)",
        data: []
    }, {
        label: "Light",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
    }, 
    {
        label: "Temp",
        fillColor: "rgba(50,0,255,1)",
        strokeColor: "rgba(50,0,255,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
    } ]

}


var radarChartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: []
    }, {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: []
    }]
};

//<-----------------                 ------------------------------->
var updateInterval;
var myLine;
var myRealLine;
var myBar;
var myRealBar;
var myLine1;
var myRealLine1;
var myBar1;
var myRealBar1;

// var myRad;
// var myRealRad;

var ctx = document.getElementById("canvas0").getContext("2d");
var ctx_bar = document.getElementById("canvas1").getContext("2d");
var ctx_1 = document.getElementById("canvas2").getContext("2d");
var ctx_bar1 = document.getElementById("canvas3").getContext("2d");

//var ctx_rad = document.getElementById("canvas4").getContext("2d");


Chart.defaults.global.animation = false;
Chart.defaults.global.showTooltips = false;


//<------------------------------------------------------------------->
myLine = new Chart(ctx);
myRealLine = myLine.Line(lineChartData, {
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
    responsive: false,
});

myLine1 = new Chart(ctx_1);
myRealLine1 = myLine1.Line(lineChartData, {
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
    responsive: false,
});

myBar = new Chart(ctx_bar);
myRealBar = myBar.Bar(barChartData, {
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
    responsive: false,
    barShowStroke: false
});

myBar1 = new Chart(ctx_bar1);
myRealBar1 = myBar1.Bar(barChartData, {
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
    responsive: false,
    barShowStroke: false
});

// myRad = new Chart(ctx_rad);
// myRealRad = myRad.Radar(radarChartData, {
// 	tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
// 	responsive: false
// });

document.getElementById('legend0').innerHTML = myRealLine.generateLegend();
document.getElementById('legend1').innerHTML = myRealBar.generateLegend();
document.getElementById('legend2').innerHTML = myRealLine1.generateLegend();
document.getElementById('legend3').innerHTML = myRealBar1.generateLegend();
//document.getElementById('legend4').innerHTML = myRealRad.generateLegend();

// var button = document.getElementById('button');
// button.addEventListener('click', switchGraphs);
// document.getElementById('canvas1').style.display = 'none';


var input = document.getElementById("inputDate");

input.onkeydown = function() {
    if (window.event.keyCode == '13') {
        submit();
        input.blur();
    }
}

function submit() {
    console.log(input.value);
    websocket.send(JSON.stringify(input.value));
}

//<-------------------------------------------------->
function switchGraphs() {
    var canvas1 = document.getElementById('canvas1');
    var canvas = document.getElementById('canvas0');
    if (canvas1.style.display === "none") {
        canvas1.style.display = "";
        canvas.style.display = "none";
    } else {
        canvas1.style.display = "none";
        canvas.style.display = '';
    }
    //console.log(canvas1);
}

//<-------------------------------------------------->

var updateGraphLine = function(volume, light, temp, time) {
    //console.log(volume,light, time)
    var date = new Date(time).toUTCString();
    date = date.split(' ')[4]

    myRealLine.destroy();


    //push newly received data (time & data)
    lineChartData.datasets[0].data.push(volume);
    lineChartData.datasets[1].data.push(light);
    lineChartData.datasets[2].data.push(temp);
    lineChartData.labels.push(date);

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


//<-------------------------------------------------->

var updateGraphLine1 = function(volume, light, temp, time) {
    //console.log(volume,light, time)
    var date = new Date(time).toUTCString();
    date = date.split(' ')[4]

    myRealLine1.destroy();


    //push newly received data (time & data)
    lineChartData1.datasets[0].data.push(volume);
    lineChartData1.datasets[1].data.push(light);
    lineChartData1.datasets[2].data.push(temp);
    lineChartData1.labels.push(date);

    //if longer than 20, remove the first one
    if (lineChartData1.datasets[0].data.length > 10 | lineChartData1.datasets[1].data.length > 10 | lineChartData1.datasets[2].data.length>10) {
        lineChartData1.datasets[0].data.shift();
        lineChartData1.datasets[1].data.shift();
        lineChartData1.datasets[2].data.shift();
        lineChartData1.labels.shift();
    }

    //draw it
    myLine1.Line(lineChartData1);

    //empty the content of the div
    //document.getElementById('newdata').setAttribute('volume', "");
    //document.getElementById('newdata').setAttribute('time', "");
}



//<------------------------------------------------------->
//<------------------------------------------------------->

var updateGraphBar = function(volume, light, temp, time) {
    var date = new Date(time).toUTCString();
    date = date.split(' ')[4]

    myRealBar.destroy();

    //push newly received data (time & data)
    barChartData.datasets[0].data.push(volume);
    barChartData.datasets[1].data.push(light);
    barChartData.datasets[2].data.push(temp);
    barChartData.labels.push(date);

    //if longer than 20, remove the first one
    if (barChartData.datasets[0].data.length > 10 | barChartData.datasets[1].data.length > 10 | barChartData.datasets[2].data.length > 10) {
        barChartData.datasets[0].data.shift();
        barChartData.datasets[1].data.shift();
        barChartData.datasets[2].data.shift();
        barChartData.labels.shift();
    }

    //draw it
    myBar.Bar(barChartData);

    //empty the content of the div
    //document.getElementById('newdata1').setAttribute('volume', "");
    //document.getElementById('newdata1').setAttribute('time', "");
}

//<------------------------------------------------>

var updateGraphBar1 = function(volume, light, temp, time) {
    var date = new Date(time).toUTCString();
    date = date.split(' ')[4]

    myRealBar1.destroy();

    //push newly received data (time & data)
    barChartData1.datasets[0].data.push(volume);
    barChartData1.datasets[1].data.push(light);
    barChartData1.datasets[2].data.push(temp);
    barChartData1.labels.push(date);

    //if longer than 20, remove the first one
    if (barChartData1.datasets[0].data.length > 10 | barChartData1.datasets[1].data.length > 10 | barChartData1.datasets[2].data.length > 10) {
        barChartData1.datasets[0].data.shift();
        barChartData1.datasets[1].data.shift();
        barChartData1.datasets[2].data.shift();
        barChartData1.labels.shift();
    }

    //draw it
    myBar1.Bar(barChartData1);

    //empty the content of the div
    //document.getElementById('newdata1').setAttribute('volume', "");
    //document.getElementById('newdata1').setAttribute('time', "");
}

//<------------------------------------------------>


var updateGraphRad = function(volume, light, temp, time) {
    var date = new Date(time).toUTCString();
    date = date.split(' ')[4]

    //push newly received data (time & data)
    barChartData1.datasets[0].data.push(volume);
    barChartData1.datasets[1].data.push(light);
    barChartData1.datasets[2].data.push(temp);
    barChartData1.labels.push(date);

    //if longer than 20, remove the first one
    if (barChartData1.datasets[0].data.length > 10 | barChartData1.datasets[1].data.length > 10 | barChartData1.datasets[2].data.length > 10) {
        barChartData1.datasets[0].data.shift();
        barChartData1.datasets[1].data.shift();
        barChartData1.datasets[2].data.shift();
        barChartData1.labels.shift();
    }

    //draw it
    myBar1.Bar(barChartData1);

    //empty the content of the div
    //document.getElementById('newdata1').setAttribute('volume', "");
    //document.getElementById('newdata1').setAttribute('time', "");
}


var myFunction = function() {
    var ctx = document.getElementById("canvas4").getContext("2d");
    var myRadar = new Chart(ctx)
    var myRealRadar = myRadar.Radar(radarChartData, {
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
        responsive: false,
    });

    var date = new Date(time).toUTCString();
    date = date.split(' ')[4]

    var arrayVolume = []
    var arrayLight = []
    var arrayTemp = []
    var date = []

    radarChartData.datasets[0].data.push(arrayVolume);
    radarChartData.datasets[1].data.push(arrayLight);
    radarChartData.datasets[0].data.push(arrayTemp);
    radarChartData.labels.push(date);

    myRadar.Radar(radarChartData);
}

// function loadScript(callback) {
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = './../../../k_globals/koala.js';

//     script.onreadystatechange = callback;
//     script.onload = callback;

//     head.appendChild(script);
// }

// function sending() {
//     console.log("sending hello...")
//     send("hello");
//     //or
//     //k.createNode()
// }


// loadScript(sending);