//Make map to put into HTML using the ID//
var myMap = L.map("map").setView([38.7223, 9.1393], 3);

//Create Icon//
var mining =  L.icon({
    iconUrl: '../static/images/mining.png'
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

//Get the map for myMap//
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

// //Get data//
// var place = d3.json("/loc_data").then((data) => {
//     console.log(data);
// });
      
// //place markers and set popup//
// data.forEach(place => {
//     lat = place[2];;
//     long = place[3];;
//     marker = L.marker([lat, long], { icon: mining }).addTo(myMap);
//     marker.bindPopup(<h3>${place[1]}</h3><h4>${place[2]}</h4>);
// });


// // Define variables for our tile layers
// var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "light-v10",
//   accessToken: API_KEY
// });

// var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "dark-v10",
//   accessToken: API_KEY
// });

// // Only one base layer can be shown at a time
// var baseMaps = {
//   Light: light,
//   Dark: dark
// };
