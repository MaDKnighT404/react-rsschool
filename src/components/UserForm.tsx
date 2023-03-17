import { Component } from 'react';
import styles from './styles/UserForm.module.scss';

class UserForm extends Component {
  render() {
    return (
      <form className={styles.form} action="" lang="en">
        <h2 className={styles.formTitle}>Form</h2>
        <fieldset className={styles.formFieldset}>
          <legend>Contact information</legend>
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
          <legend>Personal information</legend>
          <label htmlFor="birthday" className={styles.formLabel}>
            Birthday
          </label>
          <input className={styles.formInputText} id="birthday" type="date" />
          <br />
          <label htmlFor="gender" className={styles.formLabel}>
            Gender
          </label>
          <select className={styles.formSelect} id="gender">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <br />
          <label htmlFor="birthday" className={styles.formLabel}>
            Photo
          </label>
          <input
            className={styles.formInputText}
            id="birthday"
            type="file"
            accept="image/png, image/jpeg"
          />
          <br />
        </fieldset>

        <fieldset className={(styles.formFieldset, styles.formFieldsetCheckbox)}>
          <legend> Skills</legend>
          <label className={styles.formCheckbox} htmlFor="html">
            <input id="html" type="checkbox" /> Html
          </label>
          <label className={styles.formCheckbox} htmlFor="css">
            <input id="css" type="checkbox" /> Css
          </label>
          <label className={styles.formCheckbox} htmlFor="javascript">
            <input id="javascript" type="checkbox" /> JavaScript
          </label>
          <label className={styles.formCheckbox} htmlFor="typescript">
            <input id="typescript" type="checkbox" /> TypeScript
          </label>
          <label className={styles.formCheckbox} htmlFor="jest">
            <input id="jest" type="checkbox" /> Jest
          </label>
          <label className={styles.formCheckbox} htmlFor="react">
            <input id="react" type="checkbox" /> React
          </label>
        </fieldset>

        <label className={styles.formToggle}>
          <span className={styles.formToggleLabel}>
            I want to receive notifications about promo, sales, etc.
          </span>
          <input className={styles.formToggleCheckbox} type="checkbox" />
          <div className={styles.formToggleSwitch}></div>
        </label>
        <br />
        <button className={styles.formButtonSubmit} type="submit">Submit</button>
      </form>
    );
  }
}

export default UserForm;
