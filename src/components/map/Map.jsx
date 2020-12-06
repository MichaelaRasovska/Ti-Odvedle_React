import React, { useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import { seznamMapy } from './seznamMapa.js';
import { database } from '../../db.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import { Marker } from './components/Marker.jsx';
import { Popup } from './components/Popup.jsx';
import { Select } from '../form/components/Select.jsx';

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 49.74710775928191,
    longitude: 15.338544069716827,
    zoom: 6.5,
  });

  const [peopleData, setPeopleData] = useState([]);
  const [filter, setFilter] = useState('');
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    return database.collection('people').onSnapshot((query) => {
      setPeopleData(
        query.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
  }, []);

  //prep for filtering only approved data
  //const dataApproved = peopleData.filter((person) => person.approved === true);
  //console.log(dataApproved);

  const dataFiltered = filter
    ? peopleData.filter((person) => person.helpType === filter)
    : peopleData;

  return (
    <>
      <section id="map-section" className="map-section">
        <h2 className="map-heading">Interaktivní mapa pomoci</h2>
        <p id="map-item" className="map__item">
          Objevte naší interaktivní mapu a podívejte se, kdo ve vašem okolí
          zrovna potřebuje pomoc. Jednoduše stačí kliknout na obrázek špendlíku
          v mapě a hned uvidíte všechny informace. Tak směle do toho!
        </p>
        <Select
          text="Chci pomoct: "
          labelClass="map-label"
          selectClass="map-select"
          selectText="jakkoliv"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        <div className="map">
          <ReactMapGL
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            width="80%"
            height={500}
            mapboxApiAccessToken="pk.eyJ1IjoidGlvZHZlZGxlIiwiYSI6ImNraHV2NWw3bjBvaHMycnA1aDJvenY3YjYifQ.84cTo_cZbhjqOJ7r-BveXw"
            mapStyle={seznamMapy}
          >
            <div className="map-navigation">
              <NavigationControl />
              <GeolocateControl />
            </div>
            {dataFiltered.map((person) => {
              return (
                <Marker
                  key={person.id}
                  person={person}
                  setPopupData={setPopupData}
                />
              );
            })}
            {popupData !== null && (
              <Popup popupData={popupData} onClose={() => setPopupData(null)} />
            )}
          </ReactMapGL>
        </div>
      </section>
    </>
  );
};
