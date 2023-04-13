import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  it('should set the state with the correct pathname when a NavLink is clicked', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const aboutNavLink = getByTestId('about-link');
    fireEvent.click(aboutNavLink);
    expect(getByText('About')).toHaveClass('active');
  });
  it('should set pathname when NavLink is clicked', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const homeLink = getByTestId('home-link');
    const aboutLink = getByTestId('about-link');
    const formLink = getByTestId('form-link');
    const pathnameToHome = '/';
    const pathname2ToAbout = '/about';
    const pathname3ToForm = '/form';

    fireEvent.click(homeLink);
    expect(pathnameToHome).toEqual('/');

    fireEvent.click(aboutLink);
    expect(pathname2ToAbout).toEqual('/about');

    fireEvent.click(formLink);
    expect(pathname3ToForm).toEqual('/form');
  });
});
