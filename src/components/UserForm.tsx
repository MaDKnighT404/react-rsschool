import { Component } from 'react';
import styles from './styles/UserForm.module.scss';

class UserForm extends Component {
  render() {
    return (
      <form className={styles.form} action="" lang="en">
        <h2 className={styles.formTitle}>Form</h2>
        <fieldset className={styles.formFieldset}>
          <legend> Contact information</legend>
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input className={styles.formInputText} id="name" type="text" />
          <br />
          <label htmlFor="name" className={styles.formLabel}>
            Telephone
          </label>
          <input className={styles.formInputText} id="name" type="text" />
          <br />
          <label htmlFor="name" className={styles.formLabel}>
            Email
          </label>
          <input className={styles.formInputText} id="name" type="text" />
          <br />
        </fieldset>

        <fieldset className={styles.formFieldset}>
          <legend> Personal information</legend>
          <label htmlFor="birthday" className={styles.formLabel}>
            Birthday
          </label>
          <input className={styles.formInputText} id="birthday" type="date" lang="en" />
          <br />
          <label htmlFor="gender" className={styles.formLabel}>
            Gender
          </label>
          <select className={styles.formSelect} id="gender">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <br />
          <label className={styles.formToggle}>
            <span className={styles.formToggleLabel}>Have a car</span>
            <input className={styles.formToggleCheckbox} type="checkbox" />
            <div className={styles.formToggleSwitch}></div>
          </label>
          <br />
        </fieldset>
      </form>
    );
  }
}

export default UserForm;
