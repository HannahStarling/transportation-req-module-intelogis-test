import React from 'react';
import L from 'leaflet';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import { useSelector } from 'react-redux';
import { MOSCOW_CENTER, RED_PATH_POLYLINE } from './constants';

// указываем путь к файлам marker
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';

export const Map = () => {
  const selected = useSelector(
    (state) => state.transportationRequests.selected
  );

  const polyline = selected
    ? [selected.loadingPoint.bound, selected.dropPoint.bound]
    : null;

  return (
    <MapContainer center={MOSCOW_CENTER} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selected && (
        <>
          <Polyline pathOptions={RED_PATH_POLYLINE} positions={polyline} />
          <Marker position={polyline[0]}>
            <Popup>{'Адрес зоны погрузки'}</Popup>
          </Marker>
          <Marker position={polyline[polyline.length - 1]}>
            <Popup>{'Адрес зоны разгрузки'}</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};
