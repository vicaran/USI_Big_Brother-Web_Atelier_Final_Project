var k = require('./../k_globals/koala.js')

k.createNode(function(msg, uid, options) {
	var counter = msg.counter
	var tweet = msg.t
	var color = msg.color
	var location = msg.location
	var user = msg.user

	console.log(msg)

	k.callFunction('addMarker', [counter, tweet, color, location, user], undefined)
})

k.createHTML('map', '<div id="map-canvas" width="500px" height="500px" style="height:500px"></div>');
k.createScript('mapScript', 'js/icwe_script.js');	