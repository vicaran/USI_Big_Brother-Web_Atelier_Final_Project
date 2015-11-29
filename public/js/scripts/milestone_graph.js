//define the chart
var lineChartData = {
	labels : [],
	datasets : [
		{
			label: "volume Data Set",
			fillColor : "rgba(220,220,220,0.2)",
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
var updateInterval;
var myLine;
var myRealLine;
var ctx = document.getElementById("canvas").getContext("2d");
Chart.defaults.global.animation = false;
Chart.defaults.global.showTooltips = false;

myLine = new Chart(ctx);
myRealLine = myLine.Line(lineChartData, {
	responsive: true
});

var updateGraph = function(volume, light, time) {
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
  document.getElementById('newdata').setAttribute('temperature', "");
  document.getElementById('newdata').setAttribute('time', "");
}