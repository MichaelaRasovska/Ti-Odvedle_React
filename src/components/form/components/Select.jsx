import React, { useState } from 'react';
import './Select.css';

export const Select = ({
  value,
  onChange,
  validationMessage,
  errorMessage,
}) => {
  const [fieldChanged, setFieldChanged] = useState(false);

  const onSelectChange = (e) => {
    setFieldChanged(true);
    onChange(e);
  };

  let message = '';

  if (errorMessage !== '') {
    message = errorMessage;
  } else if (fieldChanged === true) {
    message = validationMessage;
  }

  return (
    <label className="form-label">
      Jaký typ pomoci hledáte:
      <select className="form-select" value={value} onChange={onSelectChange}>
        <option value="">Vyberte</option>
        <option value="Materiální pomoc">Materiální pomoc</option>
        <option value="Fyzická pomoc">Fyzická pomoc</option>
        <option value="Odvoz">Odvoz</option>
        <option value="Jiné">Jiné</option>
      </select>
      <span className="form-error">{message}</span>
    </label>
  );
};
