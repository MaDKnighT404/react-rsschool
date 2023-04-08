import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import App from './App';

it('render App', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});
