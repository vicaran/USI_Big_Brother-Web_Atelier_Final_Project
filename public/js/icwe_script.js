var mapOptions = {
 	 center: { lat: -34.397, lng: 150.644},
     zoom: 1
};

var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)

var addMarker = function(c,t,color,location, user) {
	// console.log(t)
	if(location.geonames.length > 0) {
		var loc = location.geonames[0]

		console.log(t)

		var text = t.text


		if(!user && !(text[0] == "R" && text[1] == "T")) {
			var pinLocation = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color,
		        null,
		        null,
		        null,
		        new google.maps.Size(40, 68));

			var marker = new google.maps.Marker({
		     	position: new google.maps.LatLng(loc.lat, loc.lng),
		     	map: map,
		    	title: t.text,
		    	animation: google.maps.Animation.DROP,
		    	icon: pinLocation
		  	});


		  	google.maps.event.addListener(marker, 'click', function() {
		  		var count = $('#input_number').val()

		  		count = Number(count)
		  		if(isNaN(count)) {
		  			count = 1
		  		}

		  		if(count < 1 || 20 < count) {
		  			count = 1
		  		}


			  	producer_handler({t:t, color:color, count:count}, 'producer')
			});

		  	google.maps.event.addListener(marker, 'mouseover', function() {
			  	producer_handler({t:t, color:color}, 'viewer')
			});

		} else {
			var pinUser = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color,
			        null, null, null, new google.maps.Size(20, 34))

			var marker = new google.maps.Marker({
		     	position: new google.maps.LatLng(loc.lat, loc.lng),
		     	map: map,
		    	title: t.user.name,
		    	animation: google.maps.Animation.DROP,
		    	icon: pinUser
		  	});

		  	google.maps.event.addListener(marker, 'mouseover', function() {
			  	producer_handler({t:t, color:color}, 'viewer')
			});
		}
	}
}