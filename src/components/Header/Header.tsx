import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.header__navigation}>
        <ul className={styles.header__links}>
          <li className={styles.header__link}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.header__link}>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
