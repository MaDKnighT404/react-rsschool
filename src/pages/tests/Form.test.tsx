import { render, fireEvent } from '@testing-library/react';

import Form from '../Form';

it('display Form page', async () => {
  render(<Form />);
});

it('updates formData state when handleSubmit is called', async () => {
  const { getByTestId, getByRole } = render(<Form />);
  const nameInput = getByTestId('nameInput');
  const phoneInput = getByTestId('phoneInput');
  const emailInput = getByTestId('emailInput');
  const genderInput = getByTestId('maleInput');
  const countryInput = getByTestId('countryInput');
  const birthdayInput = getByTestId('birthdayInput');
  const photoInput = getByTestId('photoInput');
  const submitButton = getByRole('button', { name: 'Submit' });

  const newFormData = {
    name: 'John Doe',
    phone: '+87419877231',
    email: 'johndoe@example.com',
    gender: 'male',
    birthday: '2025-10-10',
    photo: 'photo.png',
    country: 'USA',
  };

  fireEvent.change(nameInput, { target: { value: newFormData.name } });
  fireEvent.change(phoneInput, { target: { value: newFormData.phone } });
  fireEvent.change(emailInput, { target: { value: newFormData.email } });
  fireEvent.click(genderInput);
  fireEvent.change(birthdayInput, { target: { value: newFormData.birthday } });
  fireEvent.change(countryInput, { target: { value: newFormData.country } });

  Object.defineProperty(window, 'FileReader', {
    value: vi.fn(() => ({
      readAsDataURL: vi.fn(),
      addEventListener: vi.fn((event, callback) => {
        if (event === 'load') {
          callback({ target: { result: 'data:image/png;base64,ABC123' } });
        }
      }),
    })),
  });

  fireEvent.change(photoInput, {
    target: { name: 'photo', files: [new File([''], 'photo.png', { type: 'image/png' })] },
  });

  fireEvent.click(submitButton);

  const userCard = getByTestId('userCard');
  expect(userCard.textContent).toContain(newFormData.name);
  expect(userCard.textContent).toContain(newFormData.phone);
  expect(userCard.textContent).toContain(newFormData.email);
  expect(userCard.textContent).toContain(newFormData.gender);
});
