import React, { useState } from 'react';
import './style.css';
//údaje o vás: jméno, email, číslo
//údaje o osobě: jméno, adresa, popis, kategorie, souhlas

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [name2, setName2] = useState('');
  const [street, setStreet] = useState('');
  const [city2, setCity2] = useState('');
  const [description, setDescription] = useState('');
  const [helpType, setHelpType] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="form" action="" method="POST" onChange={handleSubmit}>
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
              <option value="1">Materiální</option>
              <option value="2">Fyzická pomoc</option>
              <option value="3">Odvoz</option>
              <option value="4">Jiné</option>
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
