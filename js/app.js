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
    ko.applyBindings(new durhamBrewViewModel());
}

// Alert the user if google maps isn't working
function googleError() {
    "use strict";
    document.getElementById('map').innerHTML = "<h2>Google Maps is not loading. Please try refreshing the page later.</h2>";
}

//Add location with lat, lng, and id 
//thanks to https://developers.google.com/places/place-id

var brews = [
		{
            name: "FullSteam Brewery", 
            location: "726 Rigsbee Ave, Durham, NC 27701", 
            lat: 36.003109,
            lng: -78.899600,
            id:  "ChIJ7TZsl3bkrIkRzM2-MA5nQ6c"
        }, 
		{
            name: "Bull City Burger and Brewery",
            location: "107 E Parrish St, Durham, NC 27701", 
            lat: 35.995494, 
            lng: -78.899776,
            id: "ChIJdzWmGm7krIkR4kcF1B58z9g"
        }, 
		{
            name: "Ponysaurus Brewing Company", 
            location: "219 Hood St, Durham, NC 27701", 
            lat: 35.989615,
            lng: -78.895294, 
            id: "ChIJh4DppWjkrIkRQGoYV47eKN8"
        }, 
		{
            name: "Growler Grlz", 
            location: "4810 Hope Valley Rd #110, Durham, NC 27707", 
            lat: 35.921706,
            lng: -78.958476,
            id: "ChIJE3JkbZzorIkRjQyJn2GzyV4"
        }, 
		{
            name: "Triangle Brewing Co.", 
            location: "918 Pearl St, Durham, NC 27701", 
            lat: 35.996770,
            lng: -78.889100,
            id: "ChIJGYUpXnvkrIkR0_P8yTHKoZk"
         }
	];

//Start creation of separate Place constructor
// Thanks: https://discussions.udacity.com/t/having-trouble-accessing-data-outside-an-ajax-request/39072/5

var Place = function (data) {
    "use strict";
    this.name = ko.observable(data.name);
    this.lat = ko.observable(data.lat);
    this.lng = ko.observable(data.lng);
    this.id = ko.observable(data.id);
    this.marker = ko.observable();
    this.phone = ko.observable('');
    this.description = ko.observable('');
    this.location = ko.observable(data.location);
    this.contentString = ko.observable('');
};

//View Model Start Here
function durhamBrewViewModel() {
    "use strict";
    // Make this accessible
    var self = this;

    //create array and push objects from brews [] to this observable array
    //Thanks: cat clicker extraordinaire! https://www.udacity.com/course/viewer#!/c-ud989-nd/l-3406489055/e-3464818693/m-3464818694

    this.placeList = ko.observableArray([]);

    brews.forEach(function(placeItem) {
        self.placeList.push(new Place(placeItem));
    });
}


// Activates knockout.js
ko.applyBindings(new durhamBrewViewModel());


// Enabling btn to get user-location
// Run using python -m SimpleHTTPServer 
// navigate to http://localhost:8000/index.html




