const L = require('leaflet');
const mymap = L.map('mymap').setView([35.68, 139.76], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(mymap);