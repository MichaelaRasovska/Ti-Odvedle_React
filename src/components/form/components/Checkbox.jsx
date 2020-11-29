import React, { useState } from 'react';

export const Checkbox = ({
  checked,
  onChange,
  validationMessage,
  errorMessage,
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
        Osoba souhlasila s poskytnutím osobních informací v rámci projektu Ti
        Odvedle.
      </label>
      <span className="form-error">{message}</span>
    </>
  );
};
