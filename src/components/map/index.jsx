import React, { useState, useEffect } from 'react';
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from 'react-map-gl';
import { seznamMapy } from '../map/seznamMapa.js';
import { database } from '../../db.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import pinUrl from '../../img/pin.svg';

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 49.74710775928191,
    longitude: 15.338544069716827,
    zoom: 5.6,
  }); //nastaví defaultní pozici zacílení mapy

  const [popupData, setPopupData] = useState(null);

  const [peopleData, setPeopleData] = useState([]); //vytvořím si stav, do kterého si stáhnu data z databáze jako pole

  const [filter, setFilter] = useState('');

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
      <div className="filter">
        <label>
          Jaký typ pomoci chcete jste ochotný/ná poskytnout:
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            {' '}
            <option value="">Vyberte</option>
            <option value="Materiální pomoc">Materiální pomoc</option>
            <option value="Fyzická pomoc">Fyzická pomoc</option>
            <option value="Odvoz">Odvoz</option>
            <option value="Jiné">Jiné</option>
          </select>
        </label>
      </div>
      <div className="map">
        <ReactMapGL
          {...viewport}
          /* alternativa k: latitude={viewport.latitude}
			longitude={viewport.longitude}
			zoom={viewport.zoom}*/
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          width="50%"
          height={400}
          mapboxApiAccessToken="pk.eyJ1IjoidGlvZHZlZGxlIiwiYSI6ImNraHV2NWw3bjBvaHMycnA1aDJvenY3YjYifQ.84cTo_cZbhjqOJ7r-BveXw"
          mapStyle={seznamMapy}
        >
          <div className="map-navigation">
            <NavigationControl />
            <GeolocateControl />
          </div>
          {peopleData
            .filter((person) => {
              if (person.helpType === filter) {
                return true;
              }
            })
            .map((person) => {
              return (
                <Marker
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
                      })
                    }
                    className="button-map"
                  >
                    <img src={pinUrl} alt="Špendlík" />
                  </button>
                </Marker>
              );
            })}

          {popupData !== null && (
            <Popup
              latitude={popupData.latitude}
              longitude={popupData.longitude}
              onClose={() => setPopupData(null)}
            >
              <h1>{popupData.name2}</h1>
              <p>{popupData.description}</p>
            </Popup>
          )}
        </ReactMapGL>
      </div>
    </>
  );
};
