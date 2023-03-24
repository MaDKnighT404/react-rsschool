import { render } from '@testing-library/react';
import UserCard from '../UserCard';

const values = {
  name: 'George Koloidi',
  phone: '+74891797987',
  email: 'example@example.com',
  birthday: '10.10.1980',
  gender: 'male',
  country: 'USE',
  photoUrl: 'url',
  photoName: 'name',
  skills: {
    html: false,
    css: false,
    javascript: false,
    typescript: false,
    jest: false,
    react: false,
  },
  notifications: false,
};

describe('UserCard component', () => {
  it('renders Card component without crashing', () => {
    render(<UserCard data={values} />);
  });
});
