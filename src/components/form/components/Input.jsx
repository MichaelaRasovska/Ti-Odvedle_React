import React, { useState } from 'react';
import './Input.css';

export const Input = ({
  title,
  type,
  value,
  onChange,
  validationMessage,
  errorMessage,
}) => {
  const [fieldChanged, setFieldChanged] = useState(false);

  const onInputChange = (e) => {
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
      {title}
      <input
        className="form-input"
        type={type}
        value={value}
        onChange={onInputChange}
      />
      <span className="form-error">{message}</span>
    </label>
  );
};
