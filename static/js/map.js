//Make map to put into HTML using the ID//
var myMap = L.map("map").setView([38.7223, 9.1393], 3);
var ps_icon =  L.icon({
    iconUrl: '../static/images/ps_icon.png'
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
