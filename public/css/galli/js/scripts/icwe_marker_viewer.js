var k = require('./../k_globals/koala.js')

var setDom = k.remoteSet()

k.createNode(function(stream) {
	var t = stream.data.t
	var c = stream.data.color

	console.log(t)

	setDom('#marker_color', 'css', "background-color", c)
	setDom('#marker_author', 'html', t.user.screen_name, undefined)
	setDom('#marker_tweet', 'html', t.text, undefined)

	k.done()
})

k.registerProducer('viewer')

k.createHTML('tweetview', '<div syle="font-size:200%"><div id="marker_color" style="width:25px; height:25px; border:1px solid black"></div><div><span>Author:</span> <span id="marker_author"> </span></div><div><span>Tweet:</span> <span id="marker_tweet"> </span></div></div>');