//define the chart
var lineChartData = {
	labels : [],
	datasets : [
		{
			label: "volume Data Set",
			fillColor : "rgba(215,54,139,0.2)",
			strokeColor : "rgba(215,54,139,1)",
			pointColor : "rgba(215,54,139,1)",
			pointStrokeColor : "rgba(215,54,139,1)",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : []
		},
		 {
            label: "light dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "rgba(151,187,205,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
        },
        {
            label: "temp dataset",
            fillColor: "rgba(241,85,45,0.2)",
            strokeColor: "rgba(241,85,45,1)",
            pointColor: "rgba(241,85,45,1)",
            pointStrokeColor: "rgba(241,85,45,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(241,85,45,1)",
            data: []
        }
	]

}

var lineChartData1 = {
	labels : [],
	datasets : [
		{
			label: "volume Data Set",
			fillColor : "rgba(215,54,139,0.2)",
			strokeColor : "rgba(215,54,139,1)",
			pointColor : "rgba(215,54,139,1)",
			pointStrokeColor : "rgba(215,54,139,1)",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : []
		},
		 {
            label: "light dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "rgba(151,187,205,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
        },
        {
            label: "temp dataset",
            fillColor: "rgba(241,85,45,0.2)",
            strokeColor: "rgba(241,85,45,1)",
            pointColor: "rgba(241,85,45,1)",
            pointStrokeColor: "rgba(241,85,45,1)",
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
		fillColor : "rgba(215,54,139,0.2)",
		strokeColor : "rgba(215,54,139,0.8)",
		highlightFill : "#fff",
		highlightStroke : "rgba(215,54,139,0.8)",
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
	{
		label: "temp Data Set",
		fillColor : "rgba(241,85,45,0.2)",
		strokeColor : "rgba(241,85,45,1)",
		highlightFill : "#fff",
		highlightStroke : "rgba(151,187,205,1)",
		data : []
	},
]
}


var barChartData1 = {
labels : [],
datasets : [
	{
		label: "volume Data Set",
		fillColor : "rgba(215,54,139,0.2)",
		strokeColor : "rgba(215,54,139,0.8)",
		highlightFill : "#fff",
		highlightStroke : "rgba(215,54,139,0.8)",
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
	{
		label: "temp Data Set",
		fillColor : "rgba(241,85,45,0.2)",
		strokeColor : "rgba(241,85,45,1)",
		highlightFill : "#fff",
		highlightStroke : "rgba(151,187,205,1)",
		data : []
	},
]
}
// Navbar implementation
var current_page = current_page || 'graph-container';
document.getElementById('live-feed').parentNode.lastChild.setAttribute('style','background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
// document.getElementById(current_page).setAttribute('style', 'display', '');
var nav = document.getElementById('navbar');
nav.addEventListener('click', function(e){
	// console.log('e');
	console.log(e.target.parentNode.lastChild);
	if(e.target.id=="about"){
		document.getElementById('info-page').setAttribute('class','');
		document.getElementById('graph-container').setAttribute('class','hidden');
		document.getElementById('old-graphs').setAttribute('class','hidden');
		document.getElementById('light-bulb').setAttribute('class','hidden');
		current_page = 'info-page';
		document.getElementById('archives').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		document.getElementById('live-feed').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		document.getElementById('activate-lights').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		e.target.parentNode.lastChild.setAttribute('style','background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
	}else if(e.target.id=="live-feed"){
		document.getElementById('info-page').setAttribute('class','hidden');
		document.getElementById('graph-container').setAttribute('class','');
		document.getElementById('old-graphs').setAttribute('class','hidden');
		document.getElementById('light-bulb').setAttribute('class','hidden');
		current_page = 'graph-container';
		document.getElementById('about').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		document.getElementById('archives').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		document.getElementById('activate-lights').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		e.target.parentNode.lastChild.setAttribute('style','background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
	}else if(e.target.id=="archives"){
		document.getElementById('info-page').setAttribute('class','hidden');
		document.getElementById('graph-container').setAttribute('class','hidden');
		document.getElementById('old-graphs').setAttribute('class','');
		document.getElementById('light-bulb').setAttribute('class','hidden');

		document.getElementById('about').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		document.getElementById('live-feed').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		document.getElementById('activate-lights').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		e.target.parentNode.lastChild.setAttribute('style','background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
		current_page = 'old-graphs';
	}else if(e.target.id=="activate-lights"){
		document.getElementById('info-page').setAttribute('class','hidden');
		document.getElementById('graph-container').setAttribute('class','hidden');
		document.getElementById('old-graphs').setAttribute('class','hidden');
		document.getElementById('light-bulb').setAttribute('class','');
		current_page = 'light-bulb';
		document.getElementById('about').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		document.getElementById('live-feed').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		document.getElementById('archives').parentNode.lastChild.setAttribute('style','background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
		e.target.parentNode.lastChild.setAttribute('style','background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
	}
});

// SWITCH BETWEEN GRAPHS
// currently hidden 
// var prev_graph_c1 = false;
var nextGraph = nextGraph || 'c'; 

var graph_button = document.getElementById("arrow");

graph_button.addEventListener('click', function(){

	c = document.getElementById('c');
	c1 = document.getElementById('c1');
	c2 = document.getElementById('c2');
	c3 = document.getElementById('c3');

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

var ctx = document.getElementById("canvas0").getContext("2d");
var ctx_bar = document.getElementById("canvas1").getContext("2d");
var ctx_1 = document.getElementById("canvas2").getContext("2d");
var ctx_bar1 = document.getElementById("canvas3").getContext("2d");


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