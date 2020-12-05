//Make map to put into HTML using the ID//
var myMap = L.map("map").setView([38.7223, 9.1393], 3);

//Create Icon//
var ps_icon =  L.icon({
    iconUrl: '../static/images/nobackground_ps.png'
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

//Get data//
d3.json("/loc_data").then((data) => {
    console.log(data)
})
    //place markers and set popup//
    data.forEach(row => {
        if (row.coordinates && row.coordinates.length > 0) {
            row.mapped = true;
            lat = row.coordinates[0].toFixed(2);;
            long = 0 - row.coordinates[1].toFixed(2);;
            marker = L.marker([lat, long], { icon: ps_icon }).addTo(myMap);
            origin = ""
            if (row.origin) {
                origin = row.origin[0];
            }
            marker.bindPopup(`<h3>${row.typeLocality}</h3><h4>${row.amber}</h4><p>${origin}</p>`);
        }
    });
