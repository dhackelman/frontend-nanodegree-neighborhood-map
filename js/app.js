var map;
function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat:29.9726925,lng:-90.0803123},
      zoom: 12
    });
  }
