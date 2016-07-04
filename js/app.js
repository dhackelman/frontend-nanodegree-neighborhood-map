//Create map + map Marker + Info Window
//To do: separate marker creation from data/location
$(document).ready(function () {

    function initMap() {

        var location = new google.maps.LatLng(35.9940, -78.8986);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 12,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);


        var markerImage = 'marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: src="http://maps.google.com/mapfiles/ms/icons/red.png"   
        });

        var contentString = '<div class="info-window">' +
                '<h3>Info Window Content</h3>' +
                '<div class="info-content">' +
                '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });


    }


    google.maps.event.addDomListener(window, 'load', initMap);

});


function durhamBrewViewModel(name, location) {
	this.name = name;
    this.location = location;
}

var brews = ko.observableArray ([
		{name: "FullSteam Brewery", location: "726 Rigsbee Ave, Durham, NC 27701"}, 
		{name: "Bull City Burger and Brewery" , location: "107 E Parrish St, Durham, NC 27701"}, 
		{name: "Ponysaurus Brewing Company" , location: "219 Hood St, Durham, NC 27701"}, 
		{name: "Growler Grlz", location: "4810 Hope Valley Rd #110, Durham, NC 27707"}, 
		{name: "Triangle Brewing Co.", location: "918 Pearl St, Durham, NC 27701" }
	])



// Activates knockout.js
ko.applyBindings(new durhamBrewViewModel());

// Enabling btn to get user-location
// Run using python -m SimpleHTTPServer 
// navigate to http://localhost:8000/index.html




