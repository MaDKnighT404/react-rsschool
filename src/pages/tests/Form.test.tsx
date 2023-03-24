import { render, fireEvent } from '@testing-library/react';
import Form from '../Form';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

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

it('updates formData state when handleSubmit is called', async () => {
  const { getByTestId, getByRole } = render(<Form />);
  const nameInput = getByTestId('nameInput');
  const phoneInput = getByTestId('phoneInput');
  const emailInput = getByTestId('emailInput');
  const genderInput = getByTestId('maleInput');
  const birthdayInput = getByTestId('birthdayInput');
  const photoInput = getByTestId('photoInput');
  const submitButton = getByRole('button', { name: 'Submit' });

  const newFormData = {
    name: 'John Doe',
    phone: '+87419877231',
    email: 'johndoe@example.com',
    gender: 'male',
    birthday: '1990-10-10',
    photo: 'photo.png',
  };

  fireEvent.change(nameInput, { target: { value: newFormData.name } });
  fireEvent.change(phoneInput, { target: { value: newFormData.phone } });
  fireEvent.change(emailInput, { target: { value: newFormData.email } });
  fireEvent.click(genderInput);
  fireEvent.change(birthdayInput, { target: { value: newFormData.birthday } });

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

describe('Form validation', () => {
  it('should show error message if name is not entered', async () => {
    render(<Form />);
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    userEvent.click(submitBtn);

    const nameError = await screen.findByText('Please enter your name');
    expect(nameError).toBeInTheDocument();
  });

  it('should show error message if name is invalid', async () => {
    render(<Form />);
    const nameInput = screen.getByTestId('nameInput');
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: '1' } });
    userEvent.click(submitBtn);

    const nameError = await screen.findByText('Please enter a valid name');
    expect(nameError).toBeInTheDocument();
  });

  it('should show error message if name length is less than 3', async () => {
    render(<Form />);
    const nameInput = screen.getByTestId('nameInput');
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'ab' } });
    userEvent.click(submitBtn);

    const nameError = await screen.findByText('Please enter a valid name');
    expect(nameError).toBeInTheDocument();
  });

  it('should show error message if phone number is not entered', async () => {
    render(<Form />);
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    userEvent.click(submitBtn);

    const phoneError = await screen.findByText('Please enter your phone number');
    expect(phoneError).toBeInTheDocument();
  });

  it('should show error message if phone number is invalid', async () => {
    render(<Form />);
    const phoneInput = screen.getByTestId('phoneInput');
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(phoneInput, { target: { value: '123' } });
    userEvent.click(submitBtn);

    const phoneError = await screen.findByText('Please enter a valid phone number');
    expect(phoneError).toBeInTheDocument();
  });

  it('should show error message if email is not entered', async () => {
    render(<Form />);
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    userEvent.click(submitBtn);

    const emailError = await screen.findByText('Please enter your email');
    expect(emailError).toBeInTheDocument();
  });

  it('should show error message if email is invalid', async () => {
    render(<Form />);
    const emailInput = screen.getByTestId('emailInput');
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    userEvent.click(submitBtn);

    const emailError = await screen.findByText('Please enter a valid email');
    expect(emailError).toBeInTheDocument();
  });
});
