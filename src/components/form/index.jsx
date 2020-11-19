import React, { useState } from 'react';
import './style.css';
//údaje o vás: jméno, email, číslo
//údaje o osobě: jméno, adresa, popis, kategorie, souhlas

export const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [personType, setPersonType] = useState('1');
  const [name2, setName2] = useState('');
  const [surname2, setSurname2] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumDesc, setStreetNumDesc] = useState('');
  const [streetNumOrient, setStreetNumOrient] = useState('');
  const [city2, setCity2] = useState('');
  const [email2, setEmail2] = useState('');
  const [telephone2, setTelephone2] = useState('');
  const [description, setDescription] = useState('');
  const [helpType, setHelpType] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [datetime, setDatetime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        className="form"
        action="http://formular.itgirls.cz"
        method="POST"
        onChange={handleSubmit}
      >
        <div className="you">
          <h2>Údaje o vás</h2>
          <label htmlFor="jmeno-id">
            Vaše jméno:
            <input
              id="jmeno-id"
              name="first-name"
              placeholder="Sem napište své jméno"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>

          <label htmlFor="prijmeni-id">
            Vaše příjmení:
            <input
              id="prijmeni-id"
              name="surname"
              placeholder="Sem napište své příjmení:"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </label>
          <label htmlFor="mesto-id">
            Město:{' '}
            <input
              type="text"
              name="mesto"
              id="mesto-id"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
          <label htmlFor="typ-osoby-id">
            Jedná se o:
            <select
              name="typ-osoby"
              id="typ-osoby-id"
              value={personType}
              onChange={(e) => setPersonType(e.target.value)}
            >
              <option value="">Vyberte</option>
              <option value="1">Jednotlivec</option>
              <option value="2">Rodina</option>
            </select>
          </label>
          <label htmlFor="jmeno2-id">
            Jméno:
            <input
              id="jmeno2-id"
              name="first-name"
              placeholder="Sem napište jméno osoby"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
            />
          </label>

          <label htmlFor="prijmeni2-id">
            Příjmení:
            <input
              id="prijmeni2-id"
              name="surname"
              placeholder="Sem napište příjmení osoby:"
              value={surname2}
              onChange={(e) => setSurname2(e.target.value)}
            />
          </label>
          <label htmlFor="ulice-id">
            Ulice:{' '}
            <input
              type="text"
              name="ulice"
              id="ulice-id"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </label>
          <label>
            Číslo popisné/orientační:
            <input
              type="number"
              value={streetNumDesc}
              onChange={(e) => setStreetNumDesc(e.target.value)}
            />{' '}
            /{' '}
            <input
              type="number"
              value={streetNumOrient}
              onChange={(e) => setStreetNumOrient(e.target.value)}
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

          <label htmlFor="email2-id">
            E-mail (pokud má):{' '}
            <input
              type="email"
              name="email"
              id="email2-id"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
            />
          </label>
          <label htmlFor="telephone2-id">
            Telefonní číslo:
            <input
              type="tel"
              name="telephone"
              id="telephone2-id"
              value={telephone2}
              onChange={(e) => setTelephone2(e.target.value)}
            />
          </label>
          <label htmlFor="popis-id">
            Popište, proč chcete dané osobě pomoci, v jaké situaci se osoba
            nachází a jakou formu pomoci by potřebovala:
          </label>
          <input
            type="text"
            name="popis"
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
          <label htmlFor="file-id">
            Sem nahrajte souhlas s poskytnutím informací.
          </label>
          <input type="file" name="file" id="file-id" />
        </div>
        <label htmlFor="datum-id">
          Dnešní datum:{' '}
          <input
            type="date"
            name="datum"
            id="datum-id"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </label>
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
