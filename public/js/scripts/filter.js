/**
 * First require koala.js
 */
var k = require('./../k_globals/koala.js')
var updateDomValue;
var setDom;
var getDom;
var getLatency;
var getInLatency;
var getOutLatency;
//We have to define some variables: updateDomValue, setDom, getDom, getLatency, getInLatency, getOutLatency
//We can avoid giving them a value for now, but we need them defined.

//Now we need an if-statement that checks the "isRemote" variable. If that is true, we have to set the previously
//defined variables with the following methods: k.remoteUpdate(), k.remoteSet(), k.remoteGet(), k.remoteInLatency(), k.remoteOutLatency()
if (isRemote === true ){
    updateDomValue = k.remoteUpdate();
    setDom = k.remoteSet();
    getLatency = k.remoteGet();
    getInLatency = k.remoteInLatency();
    getOutLatency = k.remoteOutLatency();
};


//Now that we have those variables set, we have to create a setInterval function (like the one in the raspberry pi)
//Inside the callback function of setInterval we have to write a if-statement that checks for updateDomValue
//If it is true, inside the if we write updateDomValue('#inputTest', 'val'). Then we close the callback
//function and give 100 milliseconds for the interval (like 3000 for the pi).
setInterval(function()
            if (updateDomValue === true){
            updateDomValue('#inputTest', 'val');
            }
            
            {}100);

//We have now an interval that updates the view in the browser! yahoo!
//Now we finally create the operator that does something with the stream
k.createNode(function(message) {
             
             //First, we have to check with an if-statement if message.stream exists
             if(message.stream === true) {
                mstream = JSON.parse(message.stream)
                //if it does, we save in a variable the message.stream, but before we pass it to JSON.parse and store this result in a variable
                //then we save in a new variable the field pid inside the message
                npid = mstream.pid
                //then we get the field data out of the JSON.parse result and save it in a new variable
                nstream = mstream.stream
             
                //the following set of operations is done for the interface in the webpage
                //just fill the two functions with the last two variables you saved
                if(setDom) {
                    setDom('#inputId', 'attr', 'val', npid) //here is the pid field you saved before
                    setDom('#img1', 'attr', 'src', nstream) //here instead the field data you saved out of the JSON.parse
                }
             
                //create a variable which will held the detected id out of the document object manager (DOM)                                             //just a marker
             var idstore;
                //we need to save in this variable the value of the #inputTest div where we saved the image
                //this has to be done inside an if-statement that checks that getDom exists
             if (getDom === true){
                idstore = getDom('#inputTest', 'val')
             }
             
                //We write inside this variable the result of JSON.parse on the variable itself at the array index pid
                //you can do that by calling JSON.parse(...)[...] where in the round brackets you put the variable we just set,
                //and in the square brackets the variable representing the pid that we defined at the beginning of k.createNode
                pid = JSON.parse(idstore)[npid]
             
             
                //finally we send with k.send(), again it takes an object with two fields (like the webcam): pid and stream.
                //the pid field is the field we used in the array before
                //the stream field is the variable we just saved
                object = {
             stream : idstore,
             pid : pid
             
             };
             k.send(object)
             }
             //else we received a message from the sensors!
             else {
                //get the sensors data saved inside variables, first the parsed message (JSON.parse(...))                                                  //just a marker
                message = JSON.parse(message)
                //Then the temperature and humidity, two parameters of the previously saved variable
                temperature = message["temeperature"]
                humidity = message["humidity"]
             
             //again, we set something if we have access to the DOM
                if(setDom) {
                    setDom('#temperature', 'attr', 'html', temperature) //temperature data
                    setDom('#humidity', 'attr', 'html', humidity) //humidity data
                }
             
                //Function to tell we are done without sending anything
                k.done()
             }
    })

//Again, like in the webcam, we call k.createHTML by passing two parameters that I defined but you should save in two variables
filter = 'esempio_webcam_html_filter';
idtemperature = '<div id="temperature"></div>' +
'<div id="humidity"></div>' +
'<img width="1280" height="960" id="img1"></img>' +
'<canvas width="1280" height="960" id="img2"></canvas>' +
'<input id="inputId" style="visibility:hidden"></input>' +
'<input id="inputTest" style="visibility:hidden" value="0"></input>'

k.createHTML(filter, idtemperature);


//Some other scripts we load to make everything work
k.createScript('ccv', 'js/ccv.js')
k.createScript('face', 'js/face.js')
k.createScript('facedetection', 'js/facedetection.js')
k.createScript('esempio_webcam_filter', 'js/face_recognition.js')


