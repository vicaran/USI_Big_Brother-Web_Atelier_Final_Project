  /**
 * First we import as always koala.js, a library needed for the system to run.
 * Then we also need a random token used in the message exchange, we won't use it, it is used by the system.
 */
var k = require('./../k_globals/koala.js')
var tokenRandom = Math.random()*1000

//first we create a new computing node, which takes as input parameter a function
k.createNode(function(stream) {
var empty = ""
var object = {stream:JSON.stringify(stream),pid:tokenRandom+empty}

k.send(object)
        //like in the raspberry pi, we need to send something. In this case we use again the same k.send(...) function.
	//the send function should send an object with two fields: one called stream and the other pid.
	//in the stream field we have to put the input variable of the callback function (called stream here) in form of a string (like we did with the raspberry pi data)
	//in the pid field we just have to put the tokenRandom summed with the empty string
	k.send(...);

})


//we also have to create an HTML to contain the webcam in the webpage, we use the k.createHTML function. It itakes as input a string describing the code and a string with the html code in it.
//since HTML is not the point of this project, i will just ask you to define two variables and call the k.createHTML function passing those variables
 var webcam = 'esempio_webcam_html_producer';
 var video = '<video id="sourcevid" autoplay>Put your fallback message here.</video>' +
    '<canvas width="320" id="canvas" height="240" style="display: inline;"></canvas>' +
    '<div id="errorMessage"></div>' +
    '<select onchange="change_res(this);"><option value="png">png</option><option value="jpeg">jpeg</option>'

k.createHTML(webcam, video)

//the following code is used to import another script which is outside the scope of this project
k.createScript('esempio_webcam_producer', 'js/webcam_producer.js')
k.registerProducer('producerStream')
