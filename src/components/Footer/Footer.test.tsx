import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('display github link', () => {
  render(<Footer />);
  const githubLink = screen.getByRole('link');
  expect(githubLink).toBeVisible();
});
