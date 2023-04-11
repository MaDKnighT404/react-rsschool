import { render, screen } from '@testing-library/react';
import UserCard from '../UserCard';

const values = {
  fullName: 'George Koloidi',
  phone: '+74891797987',
  email: 'example@example.com',
  birthday: '1980-10-10',
  gender: 'male',
  country: 'USE',
  photoURL: '',
  photoName: '',
  html: false,
  css: false,
  javascript: false,
  typescript: false,
  jest: false,
  react: false,
  notification: false,
  userCards: [],
};

describe('UserCard component', () => {
  it('renders Card component without crashing', () => {
    render(<UserCard data={values} />);
    const cardElement = screen.getByTestId('userCard');
    expect(cardElement).toBeInTheDocument();
  });
});
