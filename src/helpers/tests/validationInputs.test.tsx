import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Form from '../../pages/Form';

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
