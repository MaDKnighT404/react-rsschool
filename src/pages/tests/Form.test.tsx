import { render, fireEvent } from '@testing-library/react';
import Form from '../Form';
import { screen } from '@testing-library/dom';

export interface FormValues {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  gender: string;
  country: string;
  photoUrl: string;
  photoName: string;
  skills: Record<string, boolean>;
  notifications: boolean;
}

interface UserFormState {
  values: FormValues;
  errors: Partial<Record<keyof FormValues, string>>;
  cardsArray: FormValues[];
  submitted: boolean;
}

it('display Form page', async () => {
  render(<Form />);
});

it('updates formData state when handleSubmit is called', () => {
  const { getByTestId } = render(<Form />);
  const nameInput = screen.getByPlaceholderText('John Wick');
  const phoneInput = screen.getByPlaceholderText('+79001001005');
  const emailInput = screen.getByPlaceholderText('example@ex.com');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  const newFormData = { name: 'John Doe', phone: '+87419877231', email: 'johndoe@example.com' };

  fireEvent.change(nameInput, { target: { value: newFormData.name } });
  fireEvent.change(phoneInput, { target: { value: newFormData.phone } });
  fireEvent.change(emailInput, { target: { value: newFormData.email } });
  fireEvent.click(submitButton);

  const userCard = getByTestId('userCard');
  expect(userCard.textContent).toContain(newFormData.name);
  expect(userCard.textContent).toContain(newFormData.phone);
  expect(userCard.textContent).toContain(newFormData.email);
});
