import { Component } from 'react';
import styles from './styles/Form.module.scss';
class Form extends Component {
  render() {
    return (
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Form</h2>
        <form action="">
          <input type="text" />
        </form>
      </div>
    );
  }
}
export default Form;
