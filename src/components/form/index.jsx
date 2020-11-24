import React, { useState } from 'react';
import './style.css';
import { database } from '../../db.js';
//údaje o vás: jméno, email, číslo
//údaje o osobě: jméno, adresa, popis, kategorie, souhlas

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [name2, setName2] = useState('');
  const [age, setAge] = useState(0);
  const [street, setStreet] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [city2, setCity2] = useState('');
  const [description, setDescription] = useState('');
  const [helpType, setHelpType] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

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

  return (
    <>
      <form className="form" action="" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="you">
            <h2>Údaje o vás</h2>
            <label htmlFor="jmeno-id">
              Vaše jméno a příjmení:
              <input
                id="jmeno-id"
                placeholder="Sem napište své jméno a příjmení"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label htmlFor="email-id">
              Váš e-mail:{' '}
              <input
                type="email"
                name="email"
                id="email-id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="telephone-id">
              Vaše telefonní číslo:
              <input
                type="tel"
                name="telephone"
                id="telephone-id"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </label>
          </div>
          <div className="them">
            <h2>Údaje o osobě, které chcete pomoct</h2>
            <label htmlFor="jmeno2-id">
              Jméno a příjmení:
              <input
                id="jmeno2-id"
                placeholder="Sem napište jméno osoby"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
              />
            </label>
            <label htmlFor="age-id">
              Věk:
              <input
                id="age-id"
                placeholder="Sem napište věk osoby"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label htmlFor="adresa-id">
              Adresa:{' '}
              <input
                type="text"
                id="adresa-id"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </label>
            <label htmlFor="mesto2-id">
              Město:{' '}
              <input
                type="text"
                name="mesto"
                id="mesto2-id"
                value={city2}
                onChange={(e) => setCity2(e.target.value)}
              />
            </label>
            <label htmlFor="popis-id">
              Popište, proč chcete dané osobě pomoci, v jaké situaci se osoba
              nachází a jakou formu pomoci by potřebovala:
            </label>
            <input
              type="text"
              id="popis-id"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="typ-pomoci-id">
              Jaký typ pomoci hledáte:
              <select
                name="typ-pomoci"
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
            <label htmlFor="confirmation-id">
              <input
                type="checkbox"
                name="confirmation"
                id="confirmation-id"
                checked={confirmation}
                onChange={(e) => setConfirmation(e.target.checked)}
              />
              Osoba souhlasila s poskytnutím osobních informací v rámci projektu
              Ti Odvedle.
            </label>
          </div>
        </div>
        <input
          type="submit"
          id="odeslat"
          onClick={(event) => {
            if (!confirm('Opravdu chcete formulář odeslat?')) {
              event.preventDefault();
            }
          }}
        />
      </form>
    </>
  );
};
