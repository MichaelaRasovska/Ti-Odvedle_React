import React, { useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import { seznamMapy } from './seznamMapa.js';
import { database } from '../../db.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import { Marker } from './components/Marker.jsx';
import { Popup } from './components/Popup.jsx';

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
          zrovna potřebuje pomoc.
        </p>
        <label>
          Chci pomáhat:
          <select
            className="map-select"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            {' '}
            <option value="">Vyberte</option>
            <option value="Materiální pomoc">materiálně</option>
            <option value="Fyzická pomoc">fyzicky</option>
            <option value="Odvoz">s odvozem</option>
            <option value="Jiné">jinak</option>
          </select>
        </label>
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
              <Popup
                latitude={popupData.latitude}
                longitude={popupData.longitude}
                closeOnClick={false}
                onClose={() => setPopupData(null)}
                onClick={() => setPopupData(null)}
                age={popupData.age}
                name2={popupData.name2}
                description={popupData.description}
                id={popupData.id}
              />
            )}
          </ReactMapGL>
        </div>
      </section>
    </>
  );
};
