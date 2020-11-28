import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import { Marker as MarkerGL } from 'react-map-gl';
import pinUrl from '../../../img/pin.svg';
import './Marker.css';

export const Marker = ({ person, setPopupData }) => {
  return (
    <MarkerGL
      key={person.id}
      latitude={person.latitude}
      longitude={person.longitude}
      offsetTop={-30}
      offsetLeft={-30}
    >
      <button
        onClick={() =>
          setPopupData({
            latitude: person.latitude,
            longitude: person.longitude,
            name2: person.name2,
            description: person.description,
            id: person.id,
          })
        }
        className="button-map"
      >
        <img src={pinUrl} alt="Špendlík" />
      </button>
    </MarkerGL>
  );
};
