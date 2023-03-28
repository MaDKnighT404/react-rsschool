import * as yup from 'yup';

const today = new Date().toLocaleDateString('en-ca');

export const validationSchema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required('Please enter your name')
      .matches(
        /^([А-ЯЁ][а-яё]{2,}|[A-Z][a-z]{2,})\s([А-ЯЁ][а-яё]{2,}|[A-Z][a-z]{2,})$/,
        'Enter a valid name'
      ),
    phone: yup
      .string()
      .required('Please enter your phone')
      .matches(/^\+\d{10,}$/, 'Enter a valid phone'),
    email: yup
      .string()
      .required('Please enter your email')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email'),
    gender: yup.string().required('Please select your gender'),
    birthday: yup
      .date()
      .required('Please enter your birthday')
      .max(today, "Birthday cannot be less than today's date")
      .typeError('Please enter your birthday'),
  })
  .required();
