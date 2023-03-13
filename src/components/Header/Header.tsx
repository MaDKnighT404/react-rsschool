import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.headerNavigation}>
        <ul className={styles.headerLinks}>
          <li>
            <NavLink to="/" className={styles.headerLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.headerLink}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
