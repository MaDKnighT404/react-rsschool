import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required()
      .matches(
        /^([А-ЯЁ][а-яё]{2,}|[A-Z][a-z]{2,})\s([А-ЯЁ][а-яё]{2,}|[A-Z][a-z]{2,})$/,
        'Enter a valid name'
      ),
    phone: yup
      .string()
      .required()
      .matches(/^\+\d{10,}$/, 'Enter a valid phone'),
  })
  .required();
