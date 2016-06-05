var map;
function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat:29.9726925,lng:-90.0803123},
      zoom: 12
    });
  }

function AppViewModel() {
    this.schoolName = "PWCS";
    this.cmoName = "FirstlineSchools";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
