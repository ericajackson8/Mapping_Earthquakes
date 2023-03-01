// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. Approx. Geographical Center ofUS
let map = L.map('mapid').setView([30,30], 2);
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Add GeoJSON Data
// Add GeoJSON d
//https://github.com/ericajackson8/Mapping_Earthquakes/blob/main/Mapping_GeoJSON_Points/static/js/majorAirports.json
let airportData = "https://raw.githubusercontent.com/ericajackson8/Mapping_Earthquakes/main/Mapping_GeoJSON_Points/static/js/majorAirports.json";
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data,{
    // We turn feature into a marker on the map
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h3>" + "Airport Code: " + feature.properties.faa + "</h3> <hr><p Airport Name: " + feature.properties.name + "</h3>");

    }
}).addTo(map);
});

