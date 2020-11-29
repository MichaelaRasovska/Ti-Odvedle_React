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
  confirmationValidation,
} from './validations.js';
import { Select } from './components/Select.jsx';
import { Checkbox } from './components/Checkbox.jsx';
import { Textarea } from './components/Textarea.jsx';

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
  const [errorMessage, setErrorMessage] = useState(defaultData);

  const validateForm = () => {
    let isValid = true;
    if (nameValidation(formData.name) !== null) {
      isValid = false;
    }
    if (emailValidation(formData.email) !== null) {
      isValid = false;
    }
    if (telValidation(formData.telephone) !== null) {
      isValid = false;
    }
    if (nameValidation(formData.name2) !== null) {
      isValid = false;
    }
    if (requiredValidation(formData.street) !== null) {
      isValid = false;
    }
    if (requiredValidation(formData.city) !== null) {
      isValid = false;
    }
    if (requiredValidation(formData.description) !== null) {
      isValid = false;
    }
    if (requiredValidation(formData.helpType) !== null) {
      isValid = false;
    }
    if (confirmationValidation(formData.confirmation) !== null) {
      isValid = false;
    }

    setErrorMessage({
      name: nameValidation(formData.name),
      email: emailValidation(formData.email),
      telephone: telValidation(formData.telephone),
      name2: nameValidation(formData.name2),
      street: requiredValidation(formData.street),
      city: requiredValidation(formData.city),
      description: requiredValidation(formData.description),
      helpType: requiredValidation(formData.helpType),
      confirmation: confirmationValidation(formData.confirmation),
    });
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm() === true) {
      const coordinates = await getCoordinates(formData.street, formData.city);
      database.collection('people').add({
        ...formData,
        latitude: coordinates[1],
        longitude: coordinates[0],
      });

      setFormData(defaultData);
      onFormClose(true);
    }
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
                  errorMessage={errorMessage.name}
                  title="Vaše jméno a příjmení: *"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setErrorMessage({ ...errorMessage, name: '' });
                  }}
                />
                <Input
                  validationMessage={emailValidation(formData.email)}
                  errorMessage={errorMessage.email}
                  title="Váš e-mail: *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrorMessage({ ...errorMessage, email: '' });
                  }}
                />
                <Input
                  validationMessage={telValidation(formData.telephone)}
                  errorMessage={errorMessage.telephone}
                  title="Vaše telefonní číslo: * (+420)"
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => {
                    setFormData({ ...formData, telephone: e.target.value });
                    setErrorMessage({ ...errorMessage, telephone: '' });
                  }}
                />
              </div>

              <div className="them">
                <h3>Údaje o osobě, které chcete pomoct</h3>
                <Input
                  validationMessage={nameValidation(formData.name2)}
                  errorMessage={errorMessage.name2}
                  title="Jméno a příjmení: *"
                  value={formData.name2}
                  onChange={(e) => {
                    setFormData({ ...formData, name2: e.target.value });
                    setErrorMessage({ ...errorMessage, name2: '' });
                  }}
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
                  errorMessage={errorMessage.street}
                  title="Adresa: *"
                  value={formData.street}
                  onChange={(e) => {
                    setFormData({ ...formData, street: e.target.value });
                    setErrorMessage({ ...errorMessage, street: '' });
                  }}
                />
                <Input
                  validationMessage={requiredValidation(formData.city)}
                  errorMessage={errorMessage.city}
                  title="Město: *"
                  value={formData.city}
                  onChange={(e) => {
                    setFormData({ ...formData, city: e.target.value });
                    setErrorMessage({ ...errorMessage, city: '' });
                  }}
                />
                <Textarea
                  validationMessage={requiredValidation(formData.description)}
                  errorMessage={errorMessage.description}
                  title="Popište, proč chcete dané osobě pomoci, v jaké situaci se
                  osoba nachází a jakou formu pomoci by potřebovala: *"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    setErrorMessage({ ...errorMessage, description: '' });
                  }}
                />
                <Select
                  validationMessage={requiredValidation(formData.helpType)}
                  errorMessage={errorMessage.helpType}
                  value={formData.helpType}
                  onChange={(e) => {
                    setFormData({ ...formData, helpType: e.target.value });
                    setErrorMessage({ ...errorMessage, helpType: '' });
                  }}
                />
                <Checkbox
                  validationMessage={confirmationValidation(
                    formData.confirmation,
                  )}
                  errorMessage={errorMessage.confirmation}
                  checked={formData.confirmation}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      confirmation: e.target.checked,
                    });
                    setErrorMessage({ ...errorMessage, confirmation: false });
                  }}
                />
              </div>
            </div>
          </form>
          <button
            className="button-main"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Odeslat
          </button>
        </div>
      </div>
    </>
  );
};
