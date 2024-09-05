 // Initialize the map
 var map = L.map('map').setView([13.144031, 123.722577], 15); // Example coordinates

 // Define base layers
 var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 });

 var googleSatelliteHybridLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x=%7Bx%7D&y=%7By%7D&z=%7Bz%7D', {
     maxZoom: 20,
     attribution: '&copy; <a href="https://maps.google.com">Google Maps</a>'
 });

 var baseMaps = {
     "OpenStreetMap": osmLayer,
     "Google Satellite Hybrid": googleSatelliteHybridLayer
 };

 L.control.layers(baseMaps).addTo(map);

 // Add the default layer
 osmLayer.addTo(map);

 // Array of locations
 var locations = [
     {lat: 14.5995, lng: 120.9842, title: 'Gas Station 1', description: 'This is Gas Station 1.'},
     {lat: 14.6095, lng: 120.9942, title: 'Gas Station 2', description: 'This is Gas Station 2.'},
     {lat: 14.6195, lng: 121.0042, title: 'Gas Station 3', description: 'This is Gas Station 3.'},
     {lat: 13.1446, lng: 123.7231, title: 'BICOL UNIVERSITY', description: 'This is BU MAIN CAMPUS.'}
 ];

 // Loop through the locations array and add markers to the map
 locations.forEach(function(location) {
     var marker = L.marker([location.lat, location.lng]).addTo(map);
     var popupContent = `
         <b>${location.title}</b><br>${location.description}
     `;
     if (location.title === 'Gas Station 1') {
         popupContent += `
             <br><iframe src="https://www.example.com" width="300" height="200" frameborder="0"></iframe>
         `;
     }
     marker.bindPopup(popupContent);
 });
