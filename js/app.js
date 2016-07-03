var map;
function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat:35.994034,lng:-78.898621},
      zoom: 12
    });
  }


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


function initialize(location) {
    console.log(location);
};

$(document).ready(function()
{
	navigator.geolocation.getCurrentPosition(initialize);

});
