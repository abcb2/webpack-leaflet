import './style.css';
import {
  LatLng, Marker, Map,
  MapOptions, tileLayer, latLng,
  icon, IconOptions
} from "leaflet";

const iconOpt: IconOptions = {
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
};
const defaultIcon = icon(iconOpt);
const mapOpt: MapOptions = {
  layers: [
    tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: 'sample',
        maxZoom: 18
      })
  ],
  zoom: 16,
  center: latLng(35.68, 139.76)
};
const map: Map = new Map("mymap", mapOpt);
const latlng: LatLng = new LatLng(35.68, 139.76);
new Marker(latlng, {
  icon: defaultIcon
}).addTo(map);