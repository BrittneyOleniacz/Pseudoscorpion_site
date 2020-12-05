//Make map to put into HTML using the ID//
var myMap = L.map("map").setView([38.7223, 9.1393], 2);

// //Create Icon//
// var ps_icon =  L.icon({
//     iconUrl: '..images/ps_icon.png',
//     iconSize: [20, 20],
//     iconAnchor: [10, 10]
// });

//Get the map for myMap//
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

console.log("Hello")


// //Get data//
// d3.json("/loc_data").then((data) => {
//     console.log(data)
// });

var marker = L.marker([45.52, -122.67], {
    draggable: true,
    title: "My First Marker"
  }).addTo(myMap);
  
  // Binding a pop-up to our marker
  marker.bindPopup("Hello There!");

    // //place markers and set popup//
    // data.forEach(row => {
    //     if (row.coordinates && row.coordinates.length > 0) {
    //         row.mapped = true;
    //         lat = row.coordinates[0].toFixed(2);;
    //         long = 0 - row.coordinates[1].toFixed(2);;
    //         marker = L.marker([lat, long], { icon: ps_icon }).addTo(myMap);
    //         marker.bindPopup(`<h3>${row.typeLocality}</h3><h4>${row.amber}</h4><p>${origin}</p>`);
    //     };
    // });

    // L.circle(data[i], {
    //     fillOpacity: 0.75,
    //     color: "white",
    //     fillColor: "purple",
    //     // Setting our circle's radius equal to the output of our markerSize function
    //     // This will make our marker's size proportionate to its population
    //     radius: markerSize(cities[i].population)
    //   }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
    // }