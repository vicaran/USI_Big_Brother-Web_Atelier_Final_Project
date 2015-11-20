/**
 * Always require k
 */
var k = require('./../k_globals/koala.js')

//Create again the variables of the filter: updateDomValue, setDom, getDom, getLatency, getInLatency, getOutLatency
//Also create a variable that stores all the images. This one you can initialize it with an empty object ({})
...

//Again we check if it's remote or not. Since we did this already, I completed it already
if(isRemote) {
  updateDomValue = k.remoteUpdate()
  setDom = k.remoteSet()
  getDom = k.remoteGet()
  getInLatency = k.remoteInLatency()
  getOutLatency = k.remoteOutLatency()
}


//Now let's create the consumer that will handle the data stream
k.createNode(function(message) {
  
  //We need an if-statement that checks if the field stream inside the message exists
  ...
     //if it exists you should save the pid, like before, and parse the stream field of the message variable and take out the data field
     ...
     //then we store in the object that stores all the images the data we just parsed. We can do that like we would do for an array.
     ...
     //finally we check if setDom exists (with an if-statement), and if it does we call it like this: setDom('#images', 'html', JSON.stringify(allImages), {})
     ...
  
  //finally we are done
  k.done()

})

//I completed this createHTML for you :-)
k.createHTML('esempio_webcam_html_consumer' ,
  '<div style="visibility: hidden" id="images"></div>' +
    '<div id="list"></div>'
)

//Other needed inputs
k.createScript('esempio_webcam_consumer', 'js/webcam_consumer.js')

 
