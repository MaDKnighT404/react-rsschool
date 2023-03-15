import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

it('display About page', async () => {
  render(<About />);
});
