import { render, screen, fireEvent, waitFor, createEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserCard from '../UserCard';

const values = {
  fullName: 'George Koloidi',
  phone: '+74891797987',
  email: 'example@example.com',
  birthday: '1980-10-10',
  gender: 'male',
  country: 'USE',
  photo: [new File([''], 'filename.jpg', { type: 'image/jpeg' })],
  html: false,
  css: false,
  javascript: false,
  typescript: false,
  jest: false,
  react: false,
  notification: false,
};

describe('UserCard component', () => {
  it('renders Card component without crashing', () => {
    render(<UserCard data={values} />);
    const cardElement = screen.getByTestId('userCard');
    expect(cardElement).toBeInTheDocument();
  });

  it('should update the image source when a file is selected', async () => {
    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    const imageSrc = 'data:image/png;base64,KOKMkOKWoV/ilqEp';
    const mockData = {
      fullName: 'John Doe',
      phone: '1234567890',
      email: 'johndoe@example.com',
      birthday: '1990-01-01',
      gender: 'male',
      country: 'USA',
      photo: [file],
      html: true,
      css: true,
      javascript: true,
      typescript: true,
      jest: true,
      react: true,
      notification: true,
    };
    render(<UserCard data={mockData} />);

    const photoInput = screen.getByTestId('photo');
    const event = createEvent.change(photoInput, { target: { files: [file] } });
    fireEvent(photoInput, event);

    await waitFor(() => {
      expect(screen.getByTestId('photo')).toHaveAttribute('src', imageSrc);
    });
  });
});
