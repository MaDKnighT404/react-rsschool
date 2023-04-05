import { render, fireEvent, waitFor, createEvent } from '@testing-library/react';
import Form from '../Form';

describe('Form component', () => {
  it('should render UserForm component', () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId('form')).toBeInTheDocument();
  });

  it('resets form fields on form submission', async () => {
    const { getByTestId } = render(<Form />);
    const form = getByTestId('form') as HTMLFormElement;
    const nameInput = getByTestId('nameInput');
    const phoneInput = getByTestId('phoneInput');
    const emailInput = getByTestId('emailInput');
    const genderInput = getByTestId('maleInput');
    const countryInput = getByTestId('countryInput');
    const birthdayInput = getByTestId('birthdayInput');
    const photoInput = getByTestId('photoInput');
    const submitButton = getByTestId('submitButton');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '+12345678901' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });

    fireEvent.click(genderInput);
    fireEvent.change(countryInput, { target: { value: 'USA' } });
    fireEvent.change(birthdayInput, { target: { value: '2022-01-01' } });

    const file = new File(['file content'], 'test.png', { type: 'image/png' });
    const event = createEvent.change(photoInput, { target: { files: [file] } });
    fireEvent(photoInput, event);

    fireEvent.click(submitButton);
    const userCard = await waitFor(() => getByTestId('userCard'));
    expect(userCard).toBeInTheDocument();

    await waitFor(() => {
      form.reset();
      expect(nameInput).toHaveValue('');
      expect(phoneInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(birthdayInput).toHaveValue('');
      expect(photoInput).toHaveValue('');
    });
  });
});
