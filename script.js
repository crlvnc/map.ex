 // Initialize the map
        var map = L.map('map').setView([13.144031, 123.722577], 15); // Example coordinates

        // Define base layers
        var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
       // Define Google Maps base layer
        var googleMapsLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://maps.google.com">Google Maps</a>'
        });

       // Define Google Satellite base layer
        var googleSatelliteLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
           maxZoom: 20,
           attribution: '&copy; <a href="https://maps.google.com">Google Maps</a>'
        });
 
       // Define Google Satellite Hybrid base layer
       var googleSatelliteHybridLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
           maxZoom: 20,
           attribution: '&copy; <a href="https://maps.google.com">Google Maps</a>'
       });

// Base maps object for layer control
var baseMaps = {
    "OpenStreetMap": osmLayer,
    "Google Maps":googleMapsLayer,
    "Google Satellite": googleSatelliteLayer,
    "Google Satellite Hybrid": googleSatelliteHybridLayer
};

        L.control.layers(baseMaps).addTo(map);

        // Add the default layer
        osmLayer.addTo(map);

        // Array of locations
        var locations = [
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
