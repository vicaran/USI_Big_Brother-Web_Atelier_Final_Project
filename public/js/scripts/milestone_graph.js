//define the chart
var lineChartData = {
	labels : [],
	datasets : [
		{
			label: "volume Data Set",
			fillColor : "rgba(215,54,139,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : []
		},
		 {
            label: "light dataset",
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
		label: "volume Data Set",
		fillColor : "rgba(220,220,220,0.2)",
		strokeColor : "rgba(220,220,220,1)",
		highlightFill : "#fff",
		highlightStroke : "rgba(220,220,220,1)",
		data : []
	},
	{
		label: "light Data Set",
		fillColor : "rgba(151,187,205,0.2)",
		strokeColor : "rgba(151,187,205,1)",
		highlightFill : "#fff",
		highlightStroke : "rgba(151,187,205,1)",
		data : []
	},
]

}
// SWITCH BETWEEN GRAPHS
// currently hidden 
// var prev_graph_c1 = false;
var nextGraph = nextGraph || 'c'; 

var graph_button = document.getElementById("arrow");
graph_button.addEventListener('click', function(e){
	c = document.getElementById('c');
	c1 = document.getElementById('c1');
	if(nextGraph == 'c'){
		// c.classList.remove('hidden');
		c.setAttribute('class','');
		c1.setAttribute('class','hidden');
		// c1.classList.add('hidden');
		nextGraph = 'c1';
	}else if(nextGraph == 'c1'){
		// c1.classList.remove('hidden');
		c1.setAttribute('class','');
		c.setAttribute('class','hidden');
		// c.classList.add('hidden');
		nextGraph = 'both';
	}else{
		c.setAttribute('class','');
		c1.setAttribute('class','');
		nextGraph = 'c';

	}
});

var updateInterval;
var myLine;
var myRealLine;
var myBar;
var myRealBar;
var ctx = document.getElementById("canvas").getContext("2d");
var ctx_bar = document.getElementById("canvas1").getContext("2d");
Chart.defaults.global.animation = false;
Chart.defaults.global.showTooltips = false;

myLine = new Chart(ctx);
myRealLine = myLine.Line(lineChartData, {
	responsive: false
});

myBar = new Chart(ctx_bar);
myRealBar = myBar.Bar(barChartData, {
	responsive: false,
	barShowStroke: false
	});

var updateGraphLine = function(volume, light, time) {
	console.log(volume,light, time)
	var date = new Date(time).toUTCString();
	date = date.split(' ')[4]
	
	myRealLine.destroy();
		 
  //push newly received data (time & data)
  lineChartData.datasets[0].data.push(volume);
  lineChartData.datasets[1].data.push(light);
  lineChartData.labels.push(date);

  //if longer than 20, remove the first one
  if(lineChartData.datasets[0].data.length > 20 | lineChartData.datasets[1].data.length > 20){
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

var updateGraphBar = function(volume, light, time) {
	var date = new Date(time).toUTCString();
	date = date.split(' ')[4]
	myRealBar.destroy();
		 
  //push newly received data (time & data)
  barChartData.datasets[0].data.push(volume);
  barChartData.datasets[1].data.push(light);
  barChartData.labels.push(date);

  //if longer than 20, remove the first one
  if(barChartData.datasets[0].data.length > 20 | barChartData.datasets[1].length > 20){
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