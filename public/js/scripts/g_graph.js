
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

//var k = require('./../../../k_globals/koala.js')

//define the chart
var lineChartData = {
	labels : [],
	datasets : [
		{
			label: "Volume",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : []
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
        }
	]

}


var barChartData = {
labels : [],
datasets : [
	{
		label: "Volume",
		fillColor : "rgba(220,220,220,0.2)",
		strokeColor : "rgba(220,220,220,1)",
		highlightFill : "#fff",
		highlightStroke : "rgba(220,220,220,1)",
		data : []
	},
	{
		label: "Light",
		fillColor : "rgba(151,187,205,0.2)",
		strokeColor : "rgba(151,187,205,1)",
		highlightFill : "#fff",
		highlightStroke : "rgba(151,187,205,1)",
		data : []
	},
]

}


var radarChartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
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
        }
    ]
};

//<-----------------                 ------------------------------->
var updateInterval;
var myLine;
var myRealLine;
var myBar;
var myRealBar;

var ctx = document.getElementById("canvas").getContext("2d");
var ctx_bar = document.getElementById("canvas1").getContext("2d");


Chart.defaults.global.animation = false;
Chart.defaults.global.showTooltips = false;


//<------------------------------------------------------------------->
myLine = new Chart(ctx);
myRealLine = myLine.Line(lineChartData, {
	tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
	responsive: false,
});

myBar = new Chart(ctx_bar);
myRealBar = myBar.Bar(barChartData, {
	tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
	responsive: false,
	barShowStroke: false
	});

document.getElementById('legend').innerHTML = myRealLine.generateLegend();
document.getElementById('legend1').innerHTML = myRealBar.generateLegend();
var button = document.getElementById('button');
button.addEventListener('click', switchGraphs);
document.getElementById('canvas1').style.display = 'none';


var input = document.getElementById("inputDate");
input.onkeydown = function(){
	if(window.event.keyCode == '13'){
		submit();
		input.blur();
	}
}

function submit(){
	data.from = input.value;
}

//<-------------------------------------------------->
function switchGraphs(){
	var canvas1 = document.getElementById('canvas1');
	var canvas = document.getElementById('canvas');
	if(canvas1.style.display === "none"){
    	canvas1.style.display = "";
  		canvas.style.display = "none";
  	}else{
    	canvas1.style.display = "none";
    	canvas.style.display = '';
  	}
	//console.log(canvas1);
}

//<-------------------------------------------------->

var updateGraphLine = function(volume, light, time) {
	//console.log(volume,light, time)
	var date = new Date(time).toUTCString();
	date = date.split(' ')[4]
	
	myRealLine.destroy();
		 
  //push newly received data (time & data)
  lineChartData.datasets[0].data.push(volume);
  lineChartData.datasets[1].data.push(light);
  lineChartData.labels.push(date);

  //if longer than 20, remove the first one
  if(lineChartData.datasets[0].data.length > 10 | lineChartData.datasets[1].data.length > 10){
    lineChartData.datasets[0].data.shift();
    lineChartData.datasets[1].data.shift();
    lineChartData.labels.shift();
  }

  //draw it
  myLine.Line(lineChartData);
  
  //empty the content of the div
  document.getElementById('newdata').setAttribute('volume', "");
  document.getElementById('newdata').setAttribute('time', "");
}



//<------------------------------------------------------->

var updateGraphBar = function(volume, light, time) {
	var date = new Date(time).toUTCString();
	date = date.split(' ')[4]
	myRealBar.destroy();
		 
  //push newly received data (time & data)
  barChartData.datasets[0].data.push(volume);
  barChartData.datasets[1].data.push(light);
  barChartData.labels.push(date);

  //if longer than 20, remove the first one
  if(barChartData.datasets[0].data.length > 10 | barChartData.datasets[1].length > 10){
    barChartData.datasets[0].data.shift();
    barChartData.datasets[1].data.shift();
    barChartData.labels.shift();
  }

  //draw it
  myBar.Bar(barChartData);
  
  //empty the content of the div
  document.getElementById('newdata1').setAttribute('volume', "");
  document.getElementById('newdata1').setAttribute('time', "");
}

//<------------------------------------------------>

var myFunction = function(){
	var ctx =document.getElementById("canvasRadar").getContext("2d");
	var myRadar = new Chart(ctx)
	var myRealRadar = myRadar.Radar(radarChartData, {
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
		responsive: false,
	});
}

function loadScript(callback){
	var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.src= './../../../k_globals/koala.js';

    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
}

function sendind(){
	send("hello");
		//or
	//k.createNode()
}

loadScript(sending);
