import React, { useState, useEffect } from 'react';

export const Input = ({ title, type, value, onChange, validationMessage }) => {
  return (
    <label>
      {title}
      <input type={type} value={value} onChange={onChange} />
      {validationMessage}
    </label>
  );
};
