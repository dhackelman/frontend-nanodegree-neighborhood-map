//Create map + map Marker + Info Window
//To do: separate marker creation from data/location
var map;
function initMap() {
    "use strict";
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.9938889, lng: -78.8988889},
        zoom: 14,
        disableDefaultUI: true
    });
    // Start the ViewModel here so it doesn't initialize before Google Maps loads
    ko.applyBindings(new ViewModel());
}

// Alert the user if google maps isn't working
function googleError() {
    "use strict";
    document.getElementById('map').innerHTML = "<h2>Google Maps is not loading. Please try refreshing the page later.</h2>";
}

var brews = ko.observableArray ([
		{name: "FullSteam Brewery", location: "726 Rigsbee Ave, Durham, NC 27701"}, 
		{name: "Bull City Burger and Brewery" , location: "107 E Parrish St, Durham, NC 27701"}, 
		{name: "Ponysaurus Brewing Company" , location: "219 Hood St, Durham, NC 27701"}, 
		{name: "Growler Grlz", location: "4810 Hope Valley Rd #110, Durham, NC 27707"}, 
		{name: "Triangle Brewing Co.", location: "918 Pearl St, Durham, NC 27701" }
	])

function durhamBrewViewModel() {
    var self = this;

    this.name = name;
    this.location = location;
}


// Activates knockout.js
ko.applyBindings(new durhamBrewViewModel());


// Enabling btn to get user-location
// Run using python -m SimpleHTTPServer 
// navigate to http://localhost:8000/index.html




