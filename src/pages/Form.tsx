import { Component } from 'react';
import UserForm from '../components/UserForm';
import styles from './styles/Form.module.scss';

class Form extends Component {
  render() {
    return (
      <div className={styles.formWrapper}>
        <UserForm />
      </div>
    );
  }
}
export default Form;
