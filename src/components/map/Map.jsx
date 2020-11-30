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
  }); //nastaví defaultní pozici zacílení mapy

  const [popupData, setPopupData] = useState(null);

  const [peopleData, setPeopleData] = useState([]); //vytvořím si stav, do kterého si stáhnu data z databáze jako pole

  const [filter, setFilter] = useState('');

  const dataFiltered = filter
    ? peopleData.filter((person) => person.helpType === filter)
    : peopleData;

  useEffect(() => {
    return database.collection('people').onSnapshot((query) => {
      setPeopleData(
        query.docs.map((doc) => {
          const data = doc.data(); //vytvořím si proměnnou data, do té uložím data z documents z firebasu
          data.id = doc.id; //do proměnné data.id si uložím id dat z firebasu
          return data;
        }),
      );
    });
  }, []); //useEffect volám při načtení stránky, ale onSnapshot updatuje data při změně

  return (
    <>
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
      <div id="map" className="map">
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
    </>
  );
};
