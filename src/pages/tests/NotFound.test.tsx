import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';

it('display Home page', async () => {
  render(<NotFound />);
});
