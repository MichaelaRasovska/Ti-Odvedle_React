export const nameValidation = (name) => {
  if (name.trim() === '') {
    return `Jméno je povinné`;
  }
  if (name.trim().length < 3) {
    return `Jméno musí mít alespoň tři znaky`;
  }
  return null;
};

export const emailValidation = (email) => {
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,4}$/.test(email)) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email musí být vyplněn';
  }
  return 'Vložte prosím email ve správném tvaru';
};

export const telValidation = (telephone) => {
  if (/^[0-9]{9}$/.test(telephone)) {
    return null;
  }
  if (telephone === '') {
    return 'Telefonní číslo musí být vyplněno';
  }
  if (telephone.length < 9) {
    return `Telefonní číslo musí mít alespoň 9 číslic`;
  }
  return 'Vložte prosím tel. číslo bez mezer';
};

export const requiredValidation = (value) => {
  if (value.trim() === '') {
    return 'Musí být vyplněno';
  }
  return null;
};

export const descriptionValidation = (value) => {
  if (value.trim() === '') {
    return 'Musí být vyplněno';
  }
  if (value.length > 200) {
    return `Maximální délka popisu je 200 znaků.`;
  }
  return null;
};

export const confirmationValidation = (value) => {
  if (value === false) {
    return 'Musí být vyplněno';
  }
  return null;
};
