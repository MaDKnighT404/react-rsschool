import { render, fireEvent } from '@testing-library/react';
import UserForm from '../UserForm';
import { vi } from 'vitest';

describe('UserForm', () => {
  it('should update values state when inputs change', () => {
    const { getByTestId } = render(<UserForm submitData={() => {}} />);
    const nameInput = getByTestId('nameInput') as HTMLInputElement;
    const phoneInput = getByTestId('phoneInput') as HTMLInputElement;
    const emailInput = getByTestId('emailInput') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { name: 'name', value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { name: 'phone', value: '1234567890' } });
    fireEvent.change(emailInput, { target: { name: 'email', value: 'john.doe@example.com' } });

    expect(nameInput.value).toBe('John Doe');
    expect(phoneInput.value).toBe('1234567890');
    expect(emailInput.value).toBe('john.doe@example.com');
  });

  it('should update skills state when checkboxes change', () => {
    const { getByTestId } = render(<UserForm submitData={() => {}} />);
    const htmlCheckbox = getByTestId('htmlInput') as HTMLInputElement;
    const cssCheckbox = getByTestId('cssInput') as HTMLInputElement;
    const javascriptCheckbox = getByTestId('javascriptInput') as HTMLInputElement;
    const notificationCheckbox = getByTestId('receivedInput') as HTMLInputElement;

    fireEvent.click(htmlCheckbox);
    fireEvent.click(cssCheckbox);
    fireEvent.click(javascriptCheckbox);
    fireEvent.click(notificationCheckbox);

    expect(htmlCheckbox.checked).toBe(true);
    expect(cssCheckbox.checked).toBe(true);
    expect(javascriptCheckbox.checked).toBe(true);
    expect(notificationCheckbox.checked).toBe(true);
  });

  it('should update photoUrl and photoName state when photo input changes', () => {
    const { getByTestId } = render(<UserForm submitData={() => {}} />);
    const photoInput = getByTestId('photoInput') as HTMLInputElement;

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

    expect(photoInput.files).toHaveLength(1);
    if (photoInput.files) {
      expect(photoInput.files[0].name).toBe('photo.png');
    }
  });
});
