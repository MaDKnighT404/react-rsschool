import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router';
import Home from '../Home';

it('display Home page', async () => {
  render(<Home />);
});
