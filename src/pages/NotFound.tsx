import { NavLink } from 'react-router-dom';
import { Footer } from '../components';
import styles from './styles/NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.headerNavigation}>
          <p className={styles.headerLinks}>
            <NavLink to="/" className={styles.headerLink} aria-current="true">
              Press Here
            </NavLink>
            to return on main page
          </p>
        </nav>
      </div>
      <div className={styles.wrapper}>
        <img className={styles.errorImg} src="../assets/404error.png" alt="error picture" />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
