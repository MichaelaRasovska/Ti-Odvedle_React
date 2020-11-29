import React, { useState, useEffect } from 'react';
import './Form.css';
import { database } from '../../db.js';
import { Input } from './components/Input.jsx';
import { getCoordinates } from './getCoordinates';
import {
  nameValidation,
  emailValidation,
  telValidation,
  requiredValidation,
} from './validations.js';

const defaultData = {
  name: '',
  email: '',
  telephone: '',
  name2: '',
  age: '',
  street: '',
  city: '',
  description: '',
  helpType: '',
  confirmation: false,
};

export const Form = ({ onFormClose }) => {
  const [formData, setFormData] = useState(defaultData);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async () => {
    const coordinates = await getCoordinates(formData.street, formData.city);

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
          <h2 className="form-title">Tohle je formulář</h2>
          <p>tady bude text</p>
          <form className="form">
            <div className="inputs">
              <div className="you">
                <h3>Údaje o vás</h3>
                <Input
                  validationMessage={nameValidation(formData.name)}
                  title="Vaše jméno a příjmení:"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <Input
                  validationMessage={emailValidation(formData.email)}
                  title="Váš e-mail:"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <Input
                  validationMessage={telValidation(formData.telephone)}
                  title="Vaše telefonní číslo: (+420)"
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
                  validationMessage={nameValidation(formData.name2)}
                  title="Jméno a příjmení:"
                  value={formData.name2}
                  onChange={(e) =>
                    setFormData({ ...formData, name2: e.target.value })
                  }
                />
                <Input
                  title="Věk:"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
                <Input
                  validationMessage={requiredValidation(formData.street)}
                  title="Adresa:"
                  value={formData.street}
                  onChange={(e) =>
                    setFormData({ ...formData, street: e.target.value })
                  }
                />
                <Input
                  validationMessage={requiredValidation(formData.city)}
                  title="Město:"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
                <Input
                  validationMessage={requiredValidation(formData.description)}
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
                  {requiredValidation(formData.helpType)}
                </label>
                <label>
                  <input
                    type="checkbox"
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
            disabled={isFormValid}
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
        </div>
      </div>
    </>
  );
};
