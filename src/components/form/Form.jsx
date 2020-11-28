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

export const Form = ({ onFormClose }) => {
  const [formData, setFormData] = useState(defaultData);

  const handleSubmit = async () => {
    const coordinates = await getCoordinates(formData.street, formData.city2);

    database.collection('people').add({
      ...formData,
      latitude: coordinates[1],
      longitude: coordinates[0],
    });

    setFormData(defaultData);
    onFormClose(true);
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        onFormClose();
      }
    }

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = null;
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <>
      <div className="modal__backdrop">
        <div className="modal__container">
          <button className="cross" onClick={onFormClose}>
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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <Input
                  title="Váš e-mail:"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <Input
                  title="Vaše telefonní číslo:"
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) =>
                    setFormData({ ...formData, telephone: e.target.value })
                  }
                />
              </div>

              <div className="them">
                <h3>Údaje o osobě, které chcete pomoct</h3>
                <Input
                  title="Jméno a příjmení:"
                  value={formData.name2}
                  onChange={(e) =>
                    setFormData({ ...formData, name2: e.target.value })
                  }
                />
                <Input
                  title="Věk"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
                <Input
                  title="Adresa"
                  value={formData.street}
                  onChange={(e) =>
                    setFormData({ ...formData, street: e.target.value })
                  }
                />
                <Input
                  title="Město"
                  value={formData.city2}
                  onChange={(e) =>
                    setFormData({ ...formData, city2: e.target.value })
                  }
                />
                <Input
                  title="Popište, proč chcete dané osobě pomoci, v jaké situaci se
                  osoba nachází a jakou formu pomoci by potřebovala:"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
                <label>
                  Jaký typ pomoci hledáte:
                  <select
                    id="typ-pomoci-id"
                    value={formData.helpType}
                    onChange={(e) =>
                      setFormData({ ...formData, helpType: e.target.value })
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmation: e.target.checked,
                      })
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
          <button className="button-main" onClick={onFormClose}>
            Zavřít
          </button>
        </div>
      </div>
    </>
  );
};
