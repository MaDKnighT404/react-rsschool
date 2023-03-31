import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles/Header.module.scss';

const Header = () => {
  const [pathname, setPathname] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = event.target as HTMLAnchorElement;
    const pathname = target.getAttribute('href') || '/';
    setPathname(pathname);
  };

  return (
    <div className={styles.header}>
      <div className={styles.currentPage}>
        {pathname === '/'
          ? 'Home page'
          : pathname === '/about'
          ? 'About page'
          : pathname === '/form'
          ? 'Form page'
          : 'Error page'}
      </div>
      <nav className={styles.headerNavigation}>
        <ul className={styles.headerLinks}>
          <li>
            <NavLink
              to="/"
              className={styles.headerLink}
              aria-current={pathname === '/' ? 'true' : undefined}
              onClick={handleNavLinkClick}
              data-testid="home-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={styles.headerLink}
              onClick={handleNavLinkClick}
              data-testid="about-link"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/form"
              className={styles.headerLink}
              onClick={handleNavLinkClick}
              data-testid="form-link"
            >
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
