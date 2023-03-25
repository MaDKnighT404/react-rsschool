import { Component } from 'react';
import styles from './styles/NotFound.module.scss';

class NotFound extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img className={styles.errorImg} src="../assets/404error.png" alt="error picture" />
      </div>
    );
  }
}

export default NotFound;
