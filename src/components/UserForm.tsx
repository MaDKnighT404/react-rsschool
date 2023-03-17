import { ChangeEvent, Component } from 'react';
import styles from './styles/UserForm.module.scss';

interface FormValues {
  name: string;
  telephone: string;
  email: string;
  birthday: string;
  gender: string;
  photo: File | null;
  skills: {
    html: boolean;
    css: boolean;
    javascript: boolean;
    typescript: boolean;
    jest: boolean;
    react: boolean;
  };
  notifications: boolean;
}

interface UserFormState {
  values: FormValues;
  errors: Partial<Record<keyof FormValues, string>>;
}

class UserForm extends Component<unknown, UserFormState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      values: {
        name: '',
        telephone: '',
        email: '',
        birthday: '',
        gender: '',
        photo: null,
        skills: {
          html: false,
          css: false,
          javascript: false,
          typescript: false,
          jest: false,
          react: false,
        },
        notifications: false,
      },
      errors: {},
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };

    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { errors, values } = this.state;

    if (values.name.length < 3) {
      errors.name = 'Name must be 3 letter minimum';
    } else {
      delete errors.name;
    }

    if (values.telephone.length < 3) {
      errors.telephone = 'telephone must be 3 letter minimum';
    } else {
      delete errors.telephone;
    }

    if (values.email.length < 3) {
      errors.email = 'email must be 3 letter minimum';
    } else {
      delete errors.email;
    }

    this.setState(() => ({
      errors,
    }));

    if (Object.keys(errors).length > 0) {
      console.log('Validation errors:', errors);
      return;
    }

    console.log('Form values:', values);
  };

  render() {
    const { values, errors } = this.state;
    return (
      <form className={styles.form} action="" onSubmit={this.handleSubmit}>
        <h2 className={styles.formTitle}>Form</h2>
        <fieldset className={styles.formFieldset}>
          <legend>Contact information</legend>
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input
            className={styles.formInputText}
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={this.handleInputChange}
          />
          {errors.name && <div className={styles.formError}>{errors.name}</div>}
          <br />
          <label htmlFor="telephone" className={styles.formLabel}>
            Telephone
          </label>
          <input
            className={styles.formInputText}
            id="telephone"
            type="text"
            name="telephone"
            value={values.telephone}
            onChange={this.handleInputChange}
          />
          {errors.telephone && <div className={styles.formError}>{errors.telephone}</div>}
          <br />
          <label htmlFor="name" className={styles.formLabel}>
            Email
          </label>
          <input
            className={styles.formInputText}
            id="name"
            type="text"
            name="email"
            value={values.email}
            onChange={this.handleInputChange}
          />
          {errors.email && <div className={styles.formError}>{errors.email}</div>}
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
        <button className={styles.formButtonSubmit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
