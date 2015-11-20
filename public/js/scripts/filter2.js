
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
var store;

if (isRemote === true){
    updateDomValue = k.remoteUpdate();
    setDom = k.remoteSet();
    getDom = k.remoteGet();
    getInLatency = k.remoteInLatency();
    getOutLatency = k.remoteOutLatency();
}

setInterval(function(){
    if (updateDomValue === true){
        updateDomValue('#inputTest', 'val');
    }
}, 100);

k.createNode(function(message) {
             
            if(message.stream === true) {
                pid = a.pid;
                stream = JSON.parse(message.stream);
             
                if(setDom) {
                    setDom('#img1', 'attr', 'src', stream);
                    setDom('#inputId', 'attr', 'val', pid);
                }
                var storeID;
                if (getDom === true) {
                    storeID = getDom('#inputTest', 'val');
                }
                storeID = JSON.parse(storeID)[pid];
                var sendD = {
                    pid: pid,
                    stream: storeID,
                }
                k.send(sendD);
             }
             
             else {
                message = JSON.parse(message);
                temperature = message['temperature'];
                humidity = message['humidity'];
             
             }
             if(setDom === true) {
                setDom('#temperature', 'attr', 'html', temperature);
                setDom('#humidity', 'attr', 'html', humidity);
             }
                k.done()
             }
    })

c = 'esempio_webcam_html_filter';
d = '<div id="temperature"></div>' +
'<div id="humidity"></div>' +
'<img width="1280" height="960" id="img1"></img>' +
'<canvas width="1280" height="960" id="img2"></canvas>' +
'<input id="inputId" style="visibility:hidden"></input>' +
'<input id="inputTest" style="visibility:hidden" value="0"></input>'
k.createHTML(c, d);
)

k.createScript('ccv', 'js/ccv.js')
k.createScript('face', 'js/face.js')
k.createScript('facedetection', 'js/facedetection.js')
k.createScript('esempio_webcam_filter', 'js/face_recognition.js')
