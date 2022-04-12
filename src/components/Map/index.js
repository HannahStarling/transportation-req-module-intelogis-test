import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { MOSCOW_CENTER, PATH_POLYLINE } from './constants';
import { Routing } from './Routing';

// путь к файлам marker
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';

export const Map = () => {
  const selected = useSelector(
    (state) => state.transportationRequests.selected
  );

  const loadingPoint = selected?.loadingPoint.bound;
  const dropPoint = selected?.dropPoint.bound;

  return (
    <MapContainer center={MOSCOW_CENTER} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selected && (
        <>
          <Marker position={loadingPoint}>
            <Popup>{'Адрес зоны погрузки'}</Popup>
          </Marker>
          <Routing
            start={loadingPoint}
            stop={dropPoint}
            polyline={PATH_POLYLINE}
          />
          <Marker position={dropPoint}>
            <Popup>{'Адрес зоны разгрузки'}</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};
