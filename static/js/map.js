
//Make map to put into HTML using the ID//
// var myMap = L.map("map").setView([38.7223, 9.1393], 3);

var myMap = L.map("map", {
    center: [38.7223, 9.1393], 
    zoom: 3,
    // layers: [base, light, dark]
});

var ps_icon =  L.icon({
    iconUrl: '../static/images/ps_icon.png',
    iconSize: [25, 30],
    iconAnchor: [12.5, 15]
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap)

d3.json("/loc_data").then(data => {
    console.log(data);
        data.forEach( info => {
        lat = info.lat_dec.toFixed(5);;
        long = info.long_dec.toFixed(5);;
        marker = L.marker([lat, long], { icon: ps_icon }).addTo(myMap);
        marker.bindPopup(`<h4>${info.amber}</h4><h5>${info.TypeLocality}</h5>`);
    });
});



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



// var baseMaps = {
//     "Base": base,
//     "Light": light,
//     "Dark": dark
// };

// var markerLayer = L.layerGroup(marker);

// var overlayMaps = {
//     Locality: markerLayer
//     };

// L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false,
//     }).addTo(myMap);
