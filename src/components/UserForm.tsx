import { ChangeEvent, Component } from 'react';
import styles from './styles/UserForm.module.scss';

export interface FormValues {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  gender: string;
  photo: string;
  skills: Record<string, boolean>;
  notifications: boolean;
}

interface UserFormState {
  values: FormValues;
  errors: Partial<Record<keyof FormValues, string>>;
  cardsArray: FormValues[];
}

interface UserFormProps {
  onSubmit: (formData: FormValues[]) => void;
}

class UserForm extends Component<UserFormProps, UserFormState> {
  constructor(props: UserFormProps) {
    super(props);

    this.state = {
      values: {
        name: '',
        phone: '',
        email: '',
        birthday: '',
        gender: '',
        photo: '',
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
      cardsArray: [],
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    const { values } = this.state;

    if (type === 'checkbox') {
      const checkbox = event.target as HTMLInputElement;

      if (name === 'notifications') {
        this.setState({
          values: {
            ...values,
            notifications: checkbox.checked,
          },
        });
      } else {
        this.setState({
          values: {
            ...values,
            skills: {
              ...values.skills,
              [name]: checkbox.checked,
            },
          },
        });
      }
    }

    if (type === 'file') {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', (event) => {
          if (event.target) {
            this.setState({
              values: {
                ...values,
                photo: event.target.result as string,
              },
            });
          }
        });
      }
    } else if (type !== 'checkbox') {
      this.setState({
        values: {
          ...values,
          [name]: value,
        },
      });
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { errors, values } = this.state;

    if (!values.name.length) {
      errors.name = 'Please enter your name';
    } else if (!/^(?:[А-ЯЁA-Z][а-яёa-z]{2,}\s){1,2}[А-ЯЁA-Z][а-яёa-z]{2,}$/.test(values.name)) {
      errors.name = 'Please enter a valid name';
    } else if (values.name.length < 3) {
      errors.name = 'Name must be 3 letter minimum';
    } else {
      delete errors.name;
    }

    if (!values.phone.length) {
      errors.phone = 'Please enter your phone number';
    } else if (!/^\+\d{10,}$/.test(values.phone)) {
      errors.phone = 'Please enter a valid phone number';
    } else {
      delete errors.phone;
    }

    if (!values.email.length) {
      errors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Please enter a valid email';
    } else {
      delete errors.email;
    }

    if (!values.birthday.length) {
      errors.birthday = 'Please enter birthday';
    } else if (values.birthday.length) {
      const today = new Date().toLocaleDateString('en-ca');
      if (today < values.birthday) {
        errors.birthday = "Birthday cannot be less than today's date";
      } else {
        delete errors.birthday;
      }
    } else {
      delete errors.birthday;
    }

    if (!values.gender.length) {
      errors.gender = 'Please select your gender';
    } else {
      delete errors.gender;
    }

    if (!values.photo.length) {
      errors.photo = 'Please add a photo';
    } else {
      delete errors.photo;
    }

    this.setState(() => ({
      errors,
    }));

    if (Object.keys(errors).length > 0) {
      console.log('Validation errors:', errors);
      return;
    } else {
      this.state.cardsArray.push(values);
      this.props.onSubmit(this.state.cardsArray);
      this.setState({
        values: {
          name: '',
          phone: '',
          email: '',
          birthday: 'дд.мм.гггг',
          gender: 'Select',
          photo: 'empty',
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
      });
    }
  };

  render() {
    const { values, errors } = this.state;
    return (
      <form className={styles.form} action="" onSubmit={this.handleSubmit}>
        <h2 className={styles.formTitle}>Form</h2>
        <fieldset className={styles.formFieldset}>
          <legend>Contact information</legend>
          <label htmlFor="name" className={styles.formLabel}>
            Full name
          </label>
          <input
            className={styles.formInputText}
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={this.handleInputChange}
            placeholder="John Wick"
            title="Two words. Each word at least 3 letters.First letter must be capitalized"
          />
          {errors.name && <div className={styles.formError}>{errors.name}</div>}
          <label htmlFor="phone" className={styles.formLabel}>
            Phone
          </label>
          <input
            className={styles.formInputText}
            id="phone"
            type="text"
            name="phone"
            value={values.phone}
            onChange={this.handleInputChange}
            placeholder="+79001001005"
            title="First character is + Minimum 10 digits"
          />
          {errors.phone && <div className={styles.formError}>{errors.phone}</div>}
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
            placeholder="example@ex.com"
          />
          {errors.email && <div className={styles.formError}>{errors.email}</div>}
        </fieldset>

        <fieldset className={styles.formFieldset}>
          <legend>Personal information</legend>
          <label htmlFor="birthday" className={styles.formLabel}>
            Birthday
          </label>
          <input
            className={styles.formInputText}
            id="birthday"
            name="birthday"
            type="date"
            onChange={this.handleInputChange}
          />
          {errors.birthday && <div className={styles.formError}>{errors.birthday}</div>}

          <label htmlFor="gender" className={styles.formLabel}>
            Gender
          </label>
          <select
            className={styles.formSelect}
            id="gender"
            onChange={this.handleInputChange}
            name="gender"
            defaultValue={'select'}
          >
            <option value="select" disabled>
              Select
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          {errors.gender && <div className={styles.formError}>{errors.gender}</div>}
          <label htmlFor="photo" className={styles.formLabel}>
            Photo
          </label>
          <input
            className={styles.formInputText}
            id="photo"
            type="file"
            name="photo"
            accept="image/png, image/jpeg"
            onChange={this.handleInputChange}
          />
          {errors.photo && <div className={styles.formError}>{errors.photo}</div>}
        </fieldset>

        <fieldset className={(styles.formFieldset, styles.formFieldsetCheckbox)}>
          <legend> Skills</legend>
          <label className={styles.formCheckbox} htmlFor="html">
            <input id="html" type="checkbox" name="html" onChange={this.handleInputChange} /> Html
          </label>
          <label className={styles.formCheckbox} htmlFor="css">
            <input id="css" type="checkbox" name="css" onChange={this.handleInputChange} /> Css
          </label>
          <label className={styles.formCheckbox} htmlFor="javascript">
            <input
              id="javascript"
              type="checkbox"
              name="javascript"
              onChange={this.handleInputChange}
            />
            JavaScript
          </label>
          <label className={styles.formCheckbox} htmlFor="typescript">
            <input
              id="typescript"
              type="checkbox"
              name="typescript"
              onChange={this.handleInputChange}
            />
            TypeScript
          </label>
          <label className={styles.formCheckbox} htmlFor="jest">
            <input id="jest" type="checkbox" name="jest" onChange={this.handleInputChange} /> Jest
          </label>
          <label className={styles.formCheckbox} htmlFor="react">
            <input id="react" type="checkbox" name="react" onChange={this.handleInputChange} />
            React
          </label>
        </fieldset>

        <label className={styles.formToggle}>
          <span className={styles.formToggleLabel}>
            I want to receive notifications about promo, sales, etc.
          </span>
          <input
            className={styles.formToggleCheckbox}
            type="checkbox"
            name="notifications"
            onChange={this.handleInputChange}
          />
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
