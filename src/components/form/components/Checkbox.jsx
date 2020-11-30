import React, { useState } from 'react';
import './Checkbox.css';

export const Checkbox = ({
  checked,
  onChange,
  validationMessage,
  errorMessage,
  text,
}) => {
  const [fieldChanged, setFieldChanged] = useState(false);

  const onClickChange = (e) => {
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
    <>
      <label>
        <input
          className="form-checkbox"
          type="checkbox"
          checked={checked}
          onChange={onClickChange}
        />
        {text}
      </label>
      <span className="form-error">{message}</span>
    </>
  );
};
