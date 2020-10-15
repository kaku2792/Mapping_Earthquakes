// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// New setView created below, so this one is commented out.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
// Just another way to create the setView.

// let map = L.map("mapid", {
//    center: [
//      40.7, -94.5
//    ],
//    zoom: 4
//  });

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// We create the tile layer that will be the background of our map.
// Changed the style to satellite-streets-v11
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// How to add a marker
// var marker = L.marker([51.5, -0.09]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
//var marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: 'lightyellow'
//  }).addTo(map);

 // Add a circleMarker
//  L.circleMarker([34.0522, -118.2437], {
//      radius: 300,
//      color: "black",
//      fillColor:'#ffffa1'
//  }).addTo(map);

// An array containing each city's location, state, and population.
// it is best practice to have data arrays in their own file, so this data was moved to cities.js
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
// ];

// Referencing the file:
// Get data from cities.js
//let cityData = cities;

// We can loop through the cities 2 different ways
    //for (let i = 0; i < cities.length; i++);
    //and cities.forEach(function(city));

// Loop through the cities array and create one marker for each city.
// second step is to add the marker for each city.
// commenting out with updated code for Popup.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
//     }
// );

// Loop through the cities array and create one marker for each city.
// then we added toLocaleString() to the city.population
// then change marker to circle based on population
// the circle is too big, so we divide population by 100000
// Skill drill: change pop to decrease by 200000; orange circles, and lineweight 4; change map to dark
// Commenting out to build lines
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location,{
//         radius: city.population/200000,
//         color: 'orange',
//         fillColor: 'orange',
//         weight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });


// Coordinates for each point to be used in the line.
// Commenting out to add more lats/lngs
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
// ];


// // Coordinates for each point to be used in the polyline.
// // New data below, so commenting this section out.
// let line = [
//     [37.6213, -122.3790],
//     [30.1975, -97.6664],
//     [39.9999, -82.8872],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]
//   ];

// // Create a polyline using the line coordinates and make the line red.
// // Changed the color from red to yellow.
// L.polyline(line, {
//     color: "blue",
//     dashArray: '5,5',
//     weight: 4,
//     opacity: .5
// }).addTo(map);


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"
    },
    "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]
    }}
]};

// Grabbing our GeoJSON data.
// Commenting out to use pointToLayer
// L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data.
// Commented out to use onEachFeature function
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.city +", " + feature.properties.country + "</h2>" + "<hr> <h3>" + feature.properties.name + "</h3>");
//     }
// }).addTo(map);

L.geoJson(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer)
        layer.bindPopup()
        .bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr> <h3>" + "Airport Name: "+ feature.properties.name + "</h3>");
    }
}).addTo(map);