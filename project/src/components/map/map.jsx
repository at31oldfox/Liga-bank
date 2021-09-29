import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {points} from './map-data';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {CORD_X, CORD_Y} from '../../const.js';

const icon = new L.Icon({
    iconUrl: '../../img/pin-icon.svg',
    iconAnchor: [CORD_X, CORD_Y],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: 'map__pin'
});

export default function Map() {

  return (
    <section className="map">
      <div className="container">
        <h3 className="map__title" id="offices">Отделения Лига Банка</h3>
        <MapContainer center={[58, 77.5531]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OSM contributors</a>'
            url='https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?lang=ru&access-token=NCwFLv9WM4vfizOJBfAXjBFm2OHMVIuBMFky2EYKoef46xcXKazAFWCJwYH0dRHO'
          />
          {points.map((point) => (
            <Marker
              position={[point.latitude, point.longitude]}
              icon={icon}
              key={`${point.cityName}`}
            >
              <Popup>
                {point.cityName}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
