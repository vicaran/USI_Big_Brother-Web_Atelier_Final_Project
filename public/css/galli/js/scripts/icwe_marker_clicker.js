var k = require('./../k_globals/koala.js')

k.createNode(function(stream) {
	k.send({
		s: stream.data.t,
		color: stream.data.color,
		count: stream.data.count
	})

	k.done()
})

k.registerProducer('producer')

k.createHTML('select', '<div syle="font-size:200%">Quantity (between 1 and 20): <input id="input_number" type="number" name="quantity" value="20" min="1" max="20"></div>');