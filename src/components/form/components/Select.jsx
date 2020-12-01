import React, { useState } from 'react';

export const Select = ({
  value,
  onChange,
  validationMessage,
  errorMessage,
  text,
  labelClass,
  selectClass,
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
    <label className={labelClass}>
      {text}
      <select className={selectClass} value={value} onChange={onSelectChange}>
        <option value="">vyberte</option>
        <option value="Materiální pomoc">materiálně</option>
        <option value="Fyzická pomoc">fyzicky</option>
        <option value="Odvoz">s odvozem</option>
        <option value="Jiné">jinak</option>
      </select>
      <span className="form-error">{message}</span>
    </label>
  );
};
