//define the chart
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

var lineChartData1 = {
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
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: []
    }]

}


var barChartData = {
    labels: [],
    datasets: [{
        label: "volume Data Set",
        fillColor: "rgba(215,54,139,0.2)",
        strokeColor: "rgba(215,54,139,0.8)",
        highlightFill: "#fff",
        highlightStroke: "rgba(215,54,139,0.8)",
        data: []
    }, {
        label: "light Data Set",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
    }, {
        label: "temp Data Set",
        fillColor: "rgba(241,85,45,0.2)",
        strokeColor: "rgba(241,85,45,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
    }, ]
}


var barChartData1 = {
    labels: [],
    datasets: [{
        label: "volume Data Set",
        fillColor: "rgba(215,54,139,0.2)",
        strokeColor: "rgba(215,54,139,0.8)",
        highlightFill: "#fff",
        highlightStroke: "rgba(215,54,139,0.8)",
        data: []
    }, {
        label: "light Data Set",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
    }, {
        label: "temp Data Set",
        fillColor: "rgba(241,85,45,0.2)",
        strokeColor: "rgba(241,85,45,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
    }, ]
};

var barChartDataArchieve = {
    labels: [],
    datasets: [{
        label: "volume Data Set",
        fillColor: "rgba(215,54,139,0.2)",
        strokeColor: "rgba(215,54,139,0.8)",
        highlightFill: "#fff",
        highlightStroke: "rgba(215,54,139,0.8)",
        data: []
    }, {
        label: "light Data Set",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
    }, {
        label: "temp Data Set",
        fillColor: "rgba(241,85,45,0.2)",
        strokeColor: "rgba(241,85,45,1)",
        highlightFill: "#fff",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
    }, ]
};
// drop-down-menu
var drop_down = false;
document.getElementById('menu-button').addEventListener('click', function(e) {
    // console.log(e.target);
    e.target.style.backgroundColor = "rgba(89,88,89,0.6)";
    var animation = setTimeout(function() {
        e.target.style.backgroundColor = "rgba(51,56,63,0.6)";
    }, 30);
    if (!drop_down) {
        document.getElementById('drop-down-menu').setAttribute('class', '');
        drop_down = true;
    } else {
        document.getElementById('drop-down-menu').setAttribute('class', 'hidden');
        drop_down = false;

    }
});
// document.getElementById('liquid_frame').addEventListener('click',function(e)){
//     if(!e.target.id=="drop-down-menu"){
//         if(!document.getElementById('drop-down-menu').classList.contains('hidden')){
//             document.getElementById('drop-down-menu').setAttribute('class',"hidden");
//         }
//     }
// });
// selecting tab from drop-down-menu
document.getElementById('menu-box').addEventListener('click', function(e) {
    var graphs = document.getElementsByClassName('graph-group');
    if (e.target.id == "all") {
        for (var i = 0; i < graphs.length; i++) {
            graphs[i].setAttribute('class', 'graph-group');
        }
    } else if (e.target.id == "one") {
        graphs[0].setAttribute('class', 'graph-group');
        graphs[1].setAttribute('class', 'graph-group hidden');
        // graphs[2].setAttribute('class', 'graph-group hidden');
    } else if (e.target.id == "two") {
        graphs[1].setAttribute('class', 'graph-group');
        graphs[0].setAttribute('class', 'graph-group hidden');
        // graphs[2].setAttribute('class', 'graph-group hidden');
    } else if (e.target.id == "three") {
        // graphs[2].setAttribute('class', 'graph-group');
        graphs[1].setAttribute('class', 'graph-group hidden');
        graphs[0].setAttribute('class', 'graph-group hidden');
    }
});


// Navbar implementation
var current_page = current_page || 'graph-container';
document.getElementById('live-feed').parentNode.lastChild.setAttribute('style', 'background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
// document.getElementById(current_page).setAttribute('style', 'display', '');
var nav = document.getElementById('navbar');
nav.addEventListener('click', function(e) {
    // console.log('e');
    // console.log(e.target);
    // console.log(e.target.firstChild.id);
    if (e.target.id == "about" || e.target.firstChild.id == "about") {
        document.getElementById('info-page').setAttribute('class', '');
        document.getElementById('graph-container').setAttribute('class', 'hidden');
        document.getElementById('old-graphs').setAttribute('class', 'hidden');
        document.getElementById('light-bulb').setAttribute('class', 'hidden');
        current_page = 'info-page';
        document.getElementById('archives').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('live-feed').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('activate-lights').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('about').parentNode.lastChild.setAttribute('style', 'background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
    } else if (e.target.id == "live-feed" || e.target.firstChild.id == "live-feed") {
        document.getElementById('info-page').setAttribute('class', 'hidden');
        document.getElementById('graph-container').setAttribute('class', '');
        document.getElementById('old-graphs').setAttribute('class', 'hidden');
        document.getElementById('light-bulb').setAttribute('class', 'hidden');
        current_page = 'graph-container';
        document.getElementById('about').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('archives').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('activate-lights').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('live-feed').parentNode.lastChild.setAttribute('style', 'background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
    } else if (e.target.id == "archives" || e.target.firstChild.id == "archives") {
        document.getElementById('info-page').setAttribute('class', 'hidden');
        document.getElementById('graph-container').setAttribute('class', 'hidden');
        document.getElementById('old-graphs').setAttribute('class', '');
        document.getElementById('light-bulb').setAttribute('class', 'hidden');
        current_page = 'old-graphs';
        document.getElementById('about').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('live-feed').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('activate-lights').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('archives').parentNode.lastChild.setAttribute('style', 'background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
    } else if (e.target.id == "activate-lights" || e.target.firstChild.id == "activate-lights") {
        document.getElementById('info-page').setAttribute('class', 'hidden');
        document.getElementById('graph-container').setAttribute('class', 'hidden');
        document.getElementById('old-graphs').setAttribute('class', 'hidden');
        document.getElementById('light-bulb').setAttribute('class', '');
        current_page = 'light-bulb';
        document.getElementById('about').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('live-feed').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('archives').parentNode.lastChild.setAttribute('style', 'background-color: rgba(51,56,63,0); height:2px; padding-right: 10px; bottom:-11px;');
        document.getElementById('activate-lights').parentNode.lastChild.setAttribute('style', 'background-color: #871F17; height:2px; padding-right: 10px; bottom:-11px;');
    }
});

// SWITCH BETWEEN GRAPHS
// currently hidden 
// var prev_graph_c1 = false;
// var nextGraph = nextGraph || 'c';

// var graph_button = document.getElementById("arrow");

// graph_button.addEventListener('click', function() {

//     c = document.getElementById('c');
//     c1 = document.getElementById('c1');
//     c2 = document.getElementById('c2');
//     c3 = document.getElementById('c3');

//     if (nextGraph == 'c') {
//         // c.classList.remove('hidden');
//         c.setAttribute('class', '');
//         c1.setAttribute('class', 'hidden');
//         c2.setAttribute('class', 'hidden');
//         c3.setAttribute('class', 'hidden');

//         // c1.classList.add('hidden');
//         nextGraph = 'c1';
//     } else if (nextGraph == 'c1') {
//         // c1.classList.remove('hidden');
//         c1.setAttribute('class', '');
//         c.setAttribute('class', 'hidden');
//         c2.setAttribute('class', 'hidden');
//         c3.setAttribute('class', 'hidden');
//         // c.classList.add('hidden');
//         nextGraph = 'c2';
//     } else if (nextGraph == 'c2') {
//         c.setAttribute('class', 'hidden');
//         c1.setAttribute('class', 'hidden');
//         c2.setAttribute('class', '');
//         c3.setAttribute('class', 'hidden');

//         nextGraph = 'c3';

//     } else if (nextGraph == 'c3') {
//         c.setAttribute('class', 'hidden');
//         c1.setAttribute('class', 'hidden');
//         c2.setAttribute('class', 'hidden');
//         c3.setAttribute('class', '');
//         nextGraph = "both";
//     } else {
//         c.setAttribute('class', '');
//         c1.setAttribute('class', '');
//         c2.setAttribute('class', '');
//         c3.setAttribute('class', '');
//         nextGraph = "c";
//     }
// });


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
    barShowStroke: false,

});

myBar1 = new Chart(ctx_bar1);
myRealBar1 = myBar1.Bar(barChartData, {
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
    responsive: false,
    barShowStroke: false,

});


//<-------------------------------------------------->

var updateGraphLine = function(volume, light, temp, time) {
    //console.log(volume,light, time)
    var date = new Date(time).toUTCString();
    date = date.split(' ')[4]

    myRealLine.destroy();


    //push newly received data (time & data)
    lineChartData.datasets[0].data.push(volume);
    document.getElementById('vol_1').innerHTML = volume;
    lineChartData.datasets[1].data.push(light);
    document.getElementById('light_1').innerHTML = light;
    lineChartData.datasets[2].data.push(temp);
    document.getElementById('temp_1').innerHTML = temp;
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
    document.getElementById('vol_2').innerHTML = volume;
    lineChartData1.datasets[1].data.push(light);
    document.getElementById('light_2').innerHTML = light;
    lineChartData1.datasets[2].data.push(temp);
    document.getElementById('temp_2').innerHTML = temp;
    lineChartData1.labels.push(date);

    //if longer than 20, remove the first one
    if (lineChartData1.datasets[0].data.length > 10 | lineChartData1.datasets[1].data.length > 10 | lineChartData1.datasets[2].data.length > 10) {
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

//Submit button old data
function getDataFromDatabase(deviceID) {
    var buttons = document.getElementsByClassName('search-button');
    if (deviceID == 1) {
        buttons[0].style.backgroundColor = "rgba(51,56,63,1)";
        var transition = setTimeout(function() {
            buttons[0].style.backgroundColor = "rgba(51,56,63,0.6)";
        }, 250);
    } else if (deviceID == 2) {
        buttons[1].style.backgroundColor = "rgba(51,56,63,1)";
        var transition = setTimeout(function() {
            buttons[1].style.backgroundColor = "rgba(51,56,63,0.6)";
        }, 250);
    } else if (deviceID == 3) {
        buttons[2].style.backgroundColor = "rgba(51,56,63,1)";
        var transition = setTimeout(function() {
            buttons[2].style.backgroundColor = "rgba(51,56,63,0.6)";
        }, 250);
    }
    var fromDateElementID = "db-from" + deviceID;
    var toDateElementID = "db-to" + deviceID;
    // console.log('Che bello questo e id:', deviceID);
    // console.log('Questo e from:', fromDateElementID);
    // console.log('Questo e to:', toDateElementID);

    var from = document.getElementById(fromDateElementID);
    var to = document.getElementById(toDateElementID);

    console.log("from", from);
    console.log("to", to);
    console.log("from value", from.value);
    console.log("to value", to.value);

    var timestampFrom = new Date(from.value);
    var timestampTo = new Date(to.value);

    console.log("timestampFrom ", timestampFrom.getTime());
    console.log("timestampTo ", timestampTo.getTime());

    producer_handler(JSON.stringify({
        header: "browser",
        from: timestampFrom.getTime(),
        to: timestampTo.getTime(),
        id: deviceID
    }), 'producer')
}

//OPENSPACE CANVAS
//audio part
function audioLevelCanvas() {
    var audio1 = 10;
    var audio2 = 80;
    var audio3 = 23;

    function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRec();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    img1 = new Image();
    img1.src = "http://i67.tinypic.com/bg5ovs.png";
    img2 = new Image();
    img2.src = "http://i66.tinypic.com/2rzrhic.png";
    img3 = new Image();
    img3.src = "http://i65.tinypic.com/2hmgady.png";


    var canvas = document.getElementById('audioCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 8;
    var context = canvas.getContext('2d');
    context.globalAlpha = 0.5
    context.drawImage(img1, 0, 0, canvas.width / 3, canvas.height);
    context.drawImage(img2, canvas.width / 3, 0, canvas.width / 3, canvas.height);
    context.drawImage(img3, (canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);

    var interval = setInterval(function() {
        audio1++;
        audio2--;
        audio3++;
        if (audio1 == 80) {
            audio1 = 0;
        }

        if (audio2 == 0) {
            audio2 = 80;
        }

        if (audio3 == 80 || audio3 == 0) {
            audio2 = 23;
        }

        if (audio1 < 20) {
            context.drawImage(img1, 0, 0, canvas.width / 3, canvas.height);
            context.fillStyle = "#00FF00";
            context.fillRect(0, 0, canvas.width / 3, canvas.height);
        } else if (audio1 > 20 && audio1 < 50) {
            context.drawImage(img1, 0, 0, canvas.width / 3, canvas.height);
            context.fillStyle = "#0000FF";
            context.fillRect(0, 0, canvas.width / 3, canvas.height);
        } else if (audio1 > 50) {
            context.drawImage(img1, 0, 0, canvas.width / 3, canvas.height);
            context.fillStyle = "#FF0000";
            context.fillRect(0, 0, canvas.width / 3, canvas.height);
        }

        if (audio2 < 20) {
            context.drawImage(img2, canvas.width / 3, 0, canvas.width / 3, canvas.height);
            context.fillStyle = "#00FF00";
            context.fillRect(canvas.width / 3, 0, canvas.width / 3, canvas.height);
        } else if (audio2 > 20 && audio2 < 50) {
            context.drawImage(img2, canvas.width / 3, 0, canvas.width / 3, canvas.height);
            context.fillStyle = "#0000FF";
            context.fillRect(canvas.width / 3, 0, canvas.width / 3, canvas.height);
        } else if (audio2 > 50) {
            context.drawImage(img2, canvas.width / 3, 0, canvas.width / 3, canvas.height);
            context.fillStyle = "#FF0000";
            context.fillRect(canvas.width / 3, 0, canvas.width / 3, canvas.height);
        }

        if (audio3 < 20) {
            context.drawImage(img3, (canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
            context.fillStyle = "#00FF00";
            context.fillRect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
        } else if (audio3 > 20 && audio3 < 50) {
            context.drawImage(img3, (canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
            context.fillStyle = "#0000FF";
            context.fillRect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
        } else if (audio3 > 50) {
            context.drawImage(img3, (canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
            context.fillStyle = "#FF0000";
            context.fillRect((canvas.width / 3) * 2, 0, canvas.width / 3, canvas.height);
        }
    }, 100)
}

//light part
var gDeviceID = 0;
var gContent = false;

function monitorLights(deviceID, content) {
    console.log("This is the deviceID: ", deviceID);
    console.log("This is the content in MONITOR LIGHT: ", content);
    gDeviceID = deviceID;
    gContent = content;
}

//CANVAS DRAWER
function drawAllCanvases() {
    function writeMessage(canvas, message) {
        console.log('Clicked on:', message);
    }
    //Position when click with mouse
    function getMousePos(canvas, evt) {
        var mouseX, mouseY;
        if (evt.offsetX) {
            mouseX = evt.offsetX;
            mouseY = evt.offsetY;
        } else if (evt.layerX) {
            mouseX = evt.layerX;
            mouseY = evt.layerY;
        }
        return {
            x: mouseX,
            y: mouseY
        };
    }

    //Images to use in the canvas
    img1 = new Image();
    img1.src = "http://i67.tinypic.com/bg5ovs.png";
    img2 = new Image();
    img2.src = "http://i66.tinypic.com/2rzrhic.png";
    img3 = new Image();
    img3.src = "http://i65.tinypic.com/2hmgady.png";

    //Initialize canvas for the light
    var lightCanvas = document.getElementById('lightCanvas');
    var switch1 = document.getElementById('onoffswitch1');
    var switch2 = document.getElementById('onoffswitch2');
    var switch3 = document.getElementById('onoffswitch3');
    switch1.style.visibility = "hidden";
    switch2.style.visibility = "hidden";
    switch3.style.visibility = "hidden";
    document.getElementById('myonoffswitch1').checked = false;
    document.getElementById('myonoffswitch2').checked = false;
    document.getElementById('myonoffswitch3').checked = false;
    lightCanvas.width = window.innerWidth;
    lightCanvas.height = window.innerHeight / 8;
    var lightContext = lightCanvas.getContext('2d');
    lightContext.globalAlpha = 0.5
    lightContext.drawImage(img1, 0, 0, lightCanvas.width / 3, lightCanvas.height);
    lightContext.drawImage(img2, lightCanvas.width / 3, 0, lightCanvas.width / 3, lightCanvas.height);
    lightContext.drawImage(img3, (lightCanvas.width / 3) * 2, 0, lightCanvas.width / 3, lightCanvas.height);

    //Initialize canvas for the database
    var posCanvas = document.getElementById('positionCanvas');
    var form1 = document.getElementById('block-input1');
    var form2 = document.getElementById('block-input2');
    var form3 = document.getElementById('block-input3');
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    var posContext = posCanvas.getContext('2d');
    var reDrawCanvas = function() {
        posCanvas.width = window.innerWidth;
        posCanvas.height = window.innerHeight / 8;

        posContext.globalAlpha = 0.5
        posContext.drawImage(img1, 0, 0, posCanvas.width / 3, posCanvas.height);
        posContext.drawImage(img2, posCanvas.width / 3, 0, posCanvas.width / 3, posCanvas.height);
        posContext.drawImage(img3, (posCanvas.width / 3) * 2, 0, posCanvas.width / 3, posCanvas.height);
    }
    reDrawCanvas();

    //listen for the click of the user
    posCanvas.addEventListener('click', function(evt) {
        reDrawCanvas();
        var mousePos = getMousePos(posCanvas, evt);
        // var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        if (mousePos.x > -1 && mousePos.x < (posCanvas.width / 3)) {
            var message = "Part1";
            posContext.drawImage(img1, 0, 0, posCanvas.width / 3, posCanvas.height);
            posContext.fillStyle = "#FFFFFF";
            posContext.fillRect(0, 0, posCanvas.width / 3, posCanvas.height);
            form1.style.display = "";
            form2.style.display = "none";
            form3.style.display = "none";
        } else if (mousePos.x > (posCanvas.width / 3) && mousePos.x < ((posCanvas.width / 3) * 2)) {
            var message = "Part2";
            posContext.drawImage(img2, posCanvas.width / 3, 0, posCanvas.width / 3, posCanvas.height);
            posContext.fillStyle = "#FFFFFF";
            posContext.fillRect(posCanvas.width / 3, 0, posCanvas.width / 3, posCanvas.height);
            form1.style.display = "none";
            form2.style.display = "";
            form3.style.display = "none";
        } else if (mousePos.x > ((posCanvas.width / 3) * 2) && mousePos.x < posCanvas.width) {
            var message = "Part3";
            posContext.drawImage(img3, (posCanvas.width / 3) * 2, 0, posCanvas.width / 3, posCanvas.height);
            posContext.fillStyle = "#FFFFFF";
            posContext.fillRect((posCanvas.width / 3) * 2, 0, posCanvas.width / 3, posCanvas.height);
            form1.style.display = "none";
            form2.style.display = "none";
            form3.style.display = "";
        }
        writeMessage(posCanvas, message);
    }, false);

    //check if the light is on or off
    var interval = setInterval(function() {
        if (gDeviceID == 1) {
            if (gContent == true) {
                lightContext.drawImage(img1, 0, 0, lightCanvas.width / 3, lightCanvas.height);
                switch1.style.visibility = "hidden";
            } else {
                lightContext.globalAlpha = 0.5;
                lightContext.fillStyle = "#000000";
                lightContext.fillRect(0, 0, lightCanvas.width / 3, lightCanvas.height);
                lightContext.drawImage(img1, 0, 0, lightCanvas.width / 3, lightCanvas.height);
                switch1.style.visibility = "visible";
            }
        } else if (gDeviceID == 2) {
            if (gContent == true) {
                lightContext.drawImage(img2, lightCanvas.width / 3, 0, lightCanvas.width / 3, lightCanvas.height);
                switch2.style.visibility = "hidden";
            } else {
                lightContext.globalAlpha = 0.5;
                lightContext.fillStyle = "#000000";
                lightContext.fillRect(lightCanvas.width / 3, 0, lightCanvas.width / 3, lightCanvas.height);
                lightContext.drawImage(img2, lightCanvas.width / 3, 0, lightCanvas.width / 3, lightCanvas.height);
                switch2.style.visibility = "visible";
            }
        } else if (gDeviceID == 3) {
            if (gContent == true) {
                lightContext.drawImage(img3, (lightCanvas.width / 3) * 2, 0, lightCanvas.width / 3, lightCanvas.height);
                switch3.style.visibility = "hidden";
            } else {
                lightContext.globalAlpha = 0.5;
                lightContext.fillStyle = "#000000";
                lightContext.fillRect((lightCanvas.width / 3) * 2, 0, (lightCanvas.width / 3) * 2, lightCanvas.height);
                lightContext.drawImage(img3, lightCanvas.width / 3, 0, lightCanvas.width / 3, lightCanvas.height);
                switch3.style.visibility = "visible";
            }
        }
        gDeviceID = 0;
    }, 100)
}
drawAllCanvases();

function drawSelects(){
    for(var i = 1; i<4; i++){
        for(var j = 1; j<3); j++){
            var selH = document.getElementById('selH'+ij);
            var selM = document.getElementById('selM'+ij);
            var selS = document.getElementById('selS'+ij);

            var hours = ''
            var minutes = ''
            var seconds = ''

            for(var k = 1; k<61; k++){
                if(i < 25){
                    hours += '<option val="'+ k +'">'+ k +'</option>'
                }
                minutes += '<option val="'+ k +'">'+ k +'</option>'
                seconds += '<option val="'+ k +'">'+ k +'</option>'

            }

            selH.innerHTML = hours;
            selM.innerHTML = minutes;
            selS.innerHTML = seconds;

        }
    }
}

drawSelects()

function editArchives(content) {
    console.log("content  ", content);
    barChartDataArchieve.datasets[0].data = [];
    barChartDataArchieve.datasets[1].data = [];
    barChartDataArchieve.datasets[2].data = [];
    barChartDataArchieve.labels = [];

    var env = document.getElementById("old-graphs");
    var myArchBar;
    var myArchRealBar;

    var ctx_bar = document.getElementById("canvasArch").getContext("2d");

    myArchBar = new Chart(ctx_bar);
    myArchRealBar = myArchBar.Bar(barChartDataArchieve, {
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>kb",
        responsive: false,
        barShowStroke: false,
    });

    myArchRealBar.destroy();
    for (var i in content) {
        console.log("i ", content[i]);
        if(content[i] !== null){
            var date = new Date(content[i].time).toUTCString();
            date = date.split(' ')[4]
            var light = content[i].light ? 50: 0;
            barChartDataArchieve.datasets[0].data.push(content[i].volume);
            barChartDataArchieve.datasets[1].data.push(light);
            barChartDataArchieve.datasets[2].data.push(content[i].temperature);
            barChartDataArchieve.labels.push(date);
            console.log("volume ", barChartDataArchieve.datasets[0].data);
            console.log("light ", barChartDataArchieve.datasets[1].data);
            console.log("temp ", barChartDataArchieve.datasets[2].data);
        }
        else{

        }
    }
    myArchBar.Bar(barChartDataArchieve);
}

//<------------------------------------------------>