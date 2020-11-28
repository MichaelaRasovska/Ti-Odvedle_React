import React, { useState, useEffect } from 'react';
import './Form.css';
import { database } from '../../db.js';
import { Input } from './components/Input.jsx';
import { getCoordinates } from './getCoordinates';

const defaultData = {
  name: '',
  email: '',
  telephone: '',
  name2: '',
  age: '',
  street: '',
  city2: '',
  description: '',
  helpType: '',
  confirmation: false,
};

export const Form = ({ onRequestClose }) => {
  const [formData, setFormData] = useState(defaultData);

  const handleSubmit = async () => {
    const coordinates = await getCoordinates(street, city2);

    database.collection('people').add({
      ...formData,
      latitude: coordinates[1],
      longitude: coordinates[0],
    });

    setFormData(defaultData);
    onRequestClose();
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
          <button className="cross" onClick={onRequestClose}>
            x
          </button>
          <h2>Tohle je formulář</h2>
          <p>tady bude text</p>
          <form className="form">
            <div className="inputs">
              <div className="you">
                <h3>Údaje o vás</h3>
                <Input
                  title="Vaše jméno a příjmení"
                  value={formData.name}
                  onChange={(name) => setFormData({ ...formData, name })}
                />
                <Input
                  title="Váš e-mail:"
                  type="email"
                  value={formData.email}
                  onChange={(email) => setFormData({ ...formData, email })}
                />
                <Input
                  title="Vaše telefonní číslo:"
                  type="tel"
                  value={formData.telephone}
                  onChange={(telephone) =>
                    setFormData({ ...formData, telephone })
                  }
                />
              </div>

              <div className="them">
                <h3>Údaje o osobě, které chcete pomoct</h3>
                <Input
                  title="Jméno a příjmení:"
                  value={formData.name2}
                  onChange={(name2) => setFormData({ ...formData, name2 })}
                />
                <Input
                  title="Věk"
                  value={formData.age}
                  onChange={(age) => setFormData({ ...formData, age })}
                />
                <Input
                  title="Adresa"
                  value={formData.street}
                  onChange={(street) => setFormData({ ...formData, street })}
                />
                <Input
                  title="Město"
                  value={formData.city2}
                  onChange={(city2) => setFormData({ ...formData, city2 })}
                />
                <Input
                  title="Popište, proč chcete dané osobě pomoci, v jaké situaci se
                  osoba nachází a jakou formu pomoci by potřebovala:"
                  value={formData.description}
                  onChange={(description) =>
                    setFormData({ ...formData, description })
                  }
                />
                <label>
                  Jaký typ pomoci hledáte:
                  <select
                    id="typ-pomoci-id"
                    value={formData.helpType}
                    onChange={(helpType) =>
                      setFormData({ ...formData, helpType })
                    }
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
                    checked={formData.confirmation}
                    onChange={(confirmation) =>
                      setFormData({ ...formData, confirmation })
                    }
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
              }
            }}
          >
            Odeslat
          </button>
          <button className="button-main" onClick={onRequestClose}>
            Zavřít
          </button>
        </div>
      </div>
    </>
  );
};
