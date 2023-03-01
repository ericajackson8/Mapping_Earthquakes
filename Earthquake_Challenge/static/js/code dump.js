// // Add GeoJSON d
// //https://github.com/ericajackson8/Mapping_Earthquakes/blob/main/Mapping_GeoJSON_Points/static/js/majorAirports.json
// let airportData = "https://raw.githubusercontent.com/ericajackson8/Mapping_Earthquakes/main/Mapping_GeoJSON_Points/static/js/majorAirports.json";
// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
    
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data,{
//     // We turn feature into a marker on the map
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h3>" + "Airport Code: " + feature.properties.faa + "</h3> <hr><p Airport Name: " + feature.properties.name + "</h3>");

//     }
// }).addTo(map);