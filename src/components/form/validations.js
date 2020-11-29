export const nameValidation = (name) => {
  if (name.trim() === '') {
    return `Jméno je povinné`;
  }
  if (/[^a-zA-Z -]/.test(name)) {
    return 'Nesprávné znaky';
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

// export const ageValidation = (age) => {
//   if (!age) {
//     return 'Age is required';
//   }
//   if (age < 18) {
//     return 'Age must be at least 18';
//   }
//   if (age > 99) {
//     return 'Age must be under 99';
//   }
//   return null;
// };

export const requiredValidation = (value) => {
  if (value.trim() === '') {
    return 'Musí být vyplněno';
  }
  return null;
};

export const confirmationValidation = (value) => {
  if (value === false) {
    return 'Musí být vyplněno';
  }
  return null;
};