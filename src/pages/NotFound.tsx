import styles from './styles/NotFound.module.scss';
import { Footer } from '../components';
const NotFound = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img className={styles.errorImg} src="../assets/404error.png" alt="error picture" />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
