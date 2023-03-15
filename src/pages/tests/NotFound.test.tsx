import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NotFound from '../NotFound';

it('display NotFound page', async () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
});
