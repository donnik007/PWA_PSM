console.log('Hello World - działam!');

function vibrate() {
  navigator.vibrate([500, 100, 500, 100, 500, 100, 1000, 100, 1000, 100, 1000, 100,500, 100, 500, 100, 500, 100])
}

function lokalizacja() {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;

    // Creating map options
    var x = position.coords.latitude
    var y = position.coords.longitude
    var mapOptions = {
        center: [x, y],
        zoom: 10
    }
    var map = new L.map('map', mapOptions);
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    // Creating a Marker
    var markerOptions = {
        title: "MyLocation",
        clickable: true,
        draggable: true
    }
    var marker = L.marker([x,y], markerOptions);
    marker.addTo(map);

  });  
}
