import { FormValues } from '../types/types';

export function validateValues(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (!values.name.length) {
    errors.name = 'Please enter your name';
  } else if (
    !/^(?:[А-ЯЁA-Z][а-яёa-z]{2,}\s){1,2}[А-ЯЁA-Z][а-яёa-z]{2,}$/.test(values.name) ||
    values.name.length < 3
  ) {
    errors.name = 'Please enter a valid name';
  } else {
    delete errors.name;
  }

  if (!values.phone.length) {
    errors.phone = 'Please enter your phone number';
  } else if (!/^\+\d{10,}$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number';
  } else {
    delete errors.phone;
  }

  if (!values.email.length) {
    errors.email = 'Please enter your email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email';
  } else {
    delete errors.email;
  }

  if (!values.birthday.length) {
    errors.birthday = 'Please enter birthday';
  } else if (values.birthday.length) {
    const today = new Date().toLocaleDateString('en-ca');
    if (today < values.birthday) {
      errors.birthday = "Birthday cannot be less than today's date";
    } else {
      delete errors.birthday;
    }
  } else {
    delete errors.birthday;
  }

  if (!values.gender.length) {
    errors.gender = 'Please select your gender';
  } else {
    delete errors.gender;
  }

  if (!values.country.length) {
    errors.country = 'Please select your country';
  } else {
    delete errors.country;
  }

  if (!values.photoUrl.length) {
    errors.photoUrl = 'Please add a photo';
  } else {
    delete errors.photoUrl;
  }

  return errors;
}
