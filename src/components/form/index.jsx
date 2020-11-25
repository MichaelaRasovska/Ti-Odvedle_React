import React, { useState, useEffect } from 'react';
import './style.css';
import { database } from '../../db.js';

export const Form = ({ onRequestClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [name2, setName2] = useState('');
  const [age, setAge] = useState(0);
  const [street, setStreet] = useState('');
  //const [latitude, setLatitude] = useState(0);
  //const [longitude, setLongitude] = useState(0);
  const [city2, setCity2] = useState('');
  const [description, setDescription] = useState('');
  const [helpType, setHelpType] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = () => {
    database.collection('people').add({
      name: name,
      email: email,
      telephone: telephone,
      name2: name2,
      age: age,
      street: street,
      latitude: 0,
      longitude: 0,
      city2: city2,
      description: description,
      helpType: helpType,
      confirmation: confirmation,
    });
    setName('');
    setEmail('');
    setTelephone('');
    setName2('');
    setAge(0);
    setStreet('');
    setCity2('');
    setDescription('');
    setHelpType('');
    setConfirmation('');
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        onRequestClose();
      }
    }

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <>
      <div className="modal__backdrop">
        <div className="modal__container">
          <h2>Tohle je formulář</h2>
          <p>tady bude text</p>
          <form className="form">
            <div className="inputs">
              <div className="you">
                <h2>Údaje o vás</h2>
                <label>
                  Vaše jméno a příjmení:
                  <input
                    id="jmeno-id"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </label>
                <label>
                  Váš e-mail:{' '}
                  <input
                    type="email"
                    id="email-id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  Vaše telefonní číslo:
                  <input
                    type="tel"
                    id="telephone-id"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </label>
              </div>
              <div className="them">
                <h2>Údaje o osobě, které chcete pomoct</h2>
                <label>
                  Jméno a příjmení:
                  <input
                    id="jmeno2-id"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                  />
                </label>
                <label>
                  Věk:
                  <input
                    id="age-id"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>
                <label>
                  Adresa:{' '}
                  <input
                    type="text"
                    id="adresa-id"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </label>
                <label>
                  Město:
                  <input
                    type="text"
                    id="mesto2-id"
                    value={city2}
                    onChange={(e) => setCity2(e.target.value)}
                  />
                </label>
                <label htmlFor="popis-id">
                  Popište, proč chcete dané osobě pomoci, v jaké situaci se
                  osoba nachází a jakou formu pomoci by potřebovala:
                </label>
                <input
                  type="text"
                  id="popis-id"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label>
                  Jaký typ pomoci hledáte:
                  <select
                    id="typ-pomoci-id"
                    value={helpType}
                    onChange={(e) => setHelpType(e.target.value)}
                  >
                    <option value="">Vyberte</option>
                    <option value="Materiální pomoc">Materiální pomoc</option>
                    <option value="Fyzická pomoc">Fyzická pomoc</option>
                    <option value="Odvoz">Odvoz</option>
                    <option value="Jiné">Jiné</option>
                  </select>
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="confirmation-id"
                    checked={confirmation}
                    onChange={(e) => setConfirmation(e.target.checked)}
                  />
                  Osoba souhlasila s poskytnutím osobních informací v rámci
                  projektu Ti Odvedle.
                </label>
              </div>
            </div>
          </form>
          <button
            className="button-main"
            onClick={(e) => {
              e.preventDefault();
              if (confirm('Opravdu chcete formulář odeslat?')) {
                handleSubmit();
                onRequestClose();
              }
            }}
          >
            Odeslat
          </button>
        </div>
      </div>
    </>
  );
};
