import styles from './styles/NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.errorImg} src="../assets/404error.png" alt="error picture" data-cy="404"/>
    </div>
  );
};

export default NotFound;
