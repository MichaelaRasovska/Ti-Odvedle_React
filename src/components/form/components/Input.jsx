import React, { useState } from 'react';

export const Input = ({ title, type, value, onChange, validationMessage }) => {
  const [fieldChanged, setFieldChanged] = useState(false);

  const onInputChange = (e) => {
    setFieldChanged(true);
    onChange(e);
  };
  return (
    <label>
      {title}
      <input type={type} value={value} onChange={onInputChange} />
      {fieldChanged === true ? validationMessage : ''}
    </label>
  );
};
