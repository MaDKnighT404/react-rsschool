import { ChangeEvent, Component } from 'react';
import { FaFileDownload } from 'react-icons/Fa';
import { UserFormProps, UserFormState } from 'types/types';
import styles from './styles/UserForm.module.scss';

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
        country: '',
        photoUrl: '',
        photoName: '',
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
      submitted: false,
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    const { values } = this.state;

    if (type === 'checkbox') {
      const { checked } = event.target as HTMLInputElement;
      let newValues = {};
      if (name === 'notifications') {
        newValues = { notifications: checked };
      } else {
        newValues = { skills: { ...values.skills, [name]: checked } };
      }
      this.setState({ values: { ...values, ...newValues } });
    } else if (type === 'file') {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener('load', (event) => {
          if (event.target) {
            const photoUrl = event.target.result as string;
            this.setState({ values: { ...values, photoUrl, photoName: file.name } });
          }
        });
      }
    } else {
      const newValues = { [name]: value };
      this.setState({ values: { ...values, ...newValues } });
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { errors, values } = this.state;

    if (!values.name.length) {
      errors.name = 'Please enter your name';
    } else if (
      !/^(?:[А-ЯЁA-Z][а-яёa-z]{2,}\s){1,2}[А-ЯЁA-Z][а-яёa-z]{2,}$/.test(values.name) ||
      values.name.length < 3
    ) {
      errors.name = 'Please enter a valid name';
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

    if (!values.country.length) {
      errors.country = 'Please select your country';
    } else {
      delete errors.country;
    }

    if (!values.photoUrl.length) {
      errors.photoUrl = 'Please add a photo';
    } else {
      delete errors.photoUrl;
    }

    this.setState(() => ({
      errors,
    }));

    if (Object.keys(errors).length > 0) {
      console.log('Validation errors:', errors);
      return;
    } else {
      const form = event.target as HTMLFormElement;
      this.state.cardsArray.push(values);
      this.props.onSubmit(this.state.cardsArray);

      this.setState(() => ({
        submitted: true,
      }));
      setTimeout(() => {
        this.setState(() => ({
          submitted: false,
        }));
        this.setState({
          values: {
            name: '',
            phone: '',
            email: '',
            birthday: '',
            gender: '',
            country: '',
            photoUrl: '',
            photoName: '',
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
        form.reset();
      }, 1800);
    }
  };

  render() {
    const { values, errors } = this.state;
    return (
      <form className={styles.form} data-testid="form" onSubmit={this.handleSubmit}>
        <fieldset className={styles.formFieldset}>
          <legend>Contact information</legend>
          <span className={styles.formLabel}>Full name:</span>
          <input
            className={styles.formInputText}
            id="name"
            type="text"
            name="name"
            value={values.name}
            data-testid="nameInput"
            onChange={this.handleInputChange}
            placeholder="John Wick"
            title="Two words. Each word at least 3 letters.First letter must be capitalized"
          />
          {errors.name && <div className={styles.formError}>{errors.name}</div>}
          <span className={styles.formLabel}>Phone:</span>
          <input
            className={styles.formInputText}
            id="phone"
            type="text"
            name="phone"
            value={values.phone}
            onChange={this.handleInputChange}
            placeholder="+79001001005"
            data-testid="phoneInput"
            title="First character is + Minimum 10 digits"
          />
          {errors.phone && <div className={styles.formError}>{errors.phone}</div>}
          <span className={styles.formLabel}>Email:</span>
          <input
            className={styles.formInputText}
            id="name"
            type="text"
            name="email"
            value={values.email}
            data-testid="emailInput"
            onChange={this.handleInputChange}
            placeholder="example@ex.com"
          />
          {errors.email && <div className={styles.formError}>{errors.email}</div>}
        </fieldset>

        <fieldset className={styles.formFieldset}>
          <legend>Personal information</legend>

          <span className={styles.formLabel}>Gender:</span>
          <div className={styles.formGenderWrapper}>
            <div className={styles.formGenderInner}>
              <input
                className={styles.formInputGender}
                type="radio"
                id="female"
                name="gender"
                value="female"
                data-testid="femaleInput"
                onChange={this.handleInputChange}
              />
              <label htmlFor="female" className={styles.formGenderLabel}>
                Female
              </label>
            </div>
            <div className={styles.formGenderInner}>
              <input
                className={styles.formInputGender}
                type="radio"
                id="male"
                name="gender"
                value="male"
                data-testid="maleInput"
                onChange={this.handleInputChange}
              />
              <label htmlFor="male" className={styles.formGenderLabel}>
                Male
              </label>
            </div>
          </div>
          <br />
          {errors.gender && <div className={styles.formError}>{errors.gender}</div>}

          <span className={styles.formLabel}>Birthday:</span>
          <input
            className={styles.formInputDate}
            id="birthday"
            name="birthday"
            type="date"
            data-testid="birthdayInput"
            onChange={this.handleInputChange}
          />
          {errors.birthday && <div className={styles.formError}>{errors.birthday}</div>}

          <span className={styles.formLabel}>Country:</span>
          <select
            className={styles.formInputSelect}
            id="country"
            onChange={this.handleInputChange}
            name="country"
            data-testid="countryInput"
            defaultValue={'select'}
          >
            <option value="select" disabled>
              Select your country
            </option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Russia">Russia</option>
            <option value="Germany">Germany</option>
            <option value="Italy">Italy</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="France">France</option>
          </select>
          {errors.country && <div className={styles.formError}>{errors.country}</div>}

          <span className={styles.formLabel}>Photo:</span>
          <div className={styles.formInputFileWrapper}>
            <input
              className={styles.formInputFile}
              id="photo"
              type="file"
              name="photo"
              accept="image/png, image/jpeg"
              data-testid="photoInput"
              onChange={this.handleInputChange}
            />
            <label htmlFor="photo" className={styles.formInputFileInner}>
              <span className={styles.formInputFileBtn} data-testid="photoName">
                {this.state.values.photoUrl.length === 0
                  ? 'Choose file'
                  : `${this.state.values.photoName}`}
              </span>
              <FaFileDownload className={styles.formInputFileIcon} />
            </label>
          </div>
          {errors.photoUrl && <div className={styles.formError}>{errors.photoUrl}</div>}
        </fieldset>
        <fieldset className={`${styles.formFieldset} ${styles.formFieldsetCheckbox}`}>
          <legend> Skills</legend>
          <div className={styles.formCheckboxWrapper}>
            <input
              className={styles.formCheckboxInput}
              id="html"
              type="checkbox"
              name="html"
              data-testid="htmlInput"
              onChange={this.handleInputChange}
            />
            <label htmlFor="html" className={styles.formCheckboxLabel}>
              Html
            </label>
          </div>
          <div className={styles.formCheckboxWrapper}>
            <input
              className={styles.formCheckboxInput}
              id="css"
              type="checkbox"
              name="css"
              data-testid="cssInput"
              onChange={this.handleInputChange}
            />
            <label htmlFor="css" className={styles.formCheckboxLabel}>
              Css
            </label>
          </div>
          <div className={styles.formCheckboxWrapper}>
            <input
              className={styles.formCheckboxInput}
              id="javascript"
              type="checkbox"
              name="javascript"
              data-testid="javascriptInput"
              onChange={this.handleInputChange}
            />
            <label htmlFor="javascript" className={styles.formCheckboxLabel}>
              javascript
            </label>
          </div>
          <div className={styles.formCheckboxWrapper}>
            <input
              className={styles.formCheckboxInput}
              id="typescript"
              type="checkbox"
              name="typescript"
              data-testid="typescriptInput"
              onChange={this.handleInputChange}
            />
            <label htmlFor="typescript" className={styles.formCheckboxLabel}>
              typescript
            </label>
          </div>
          <div className={styles.formCheckboxWrapper}>
            <input
              className={styles.formCheckboxInput}
              id="jest"
              type="checkbox"
              name="jest"
              data-testid="jestInput"
              onChange={this.handleInputChange}
            />
            <label htmlFor="jest" className={styles.formCheckboxLabel}>
              Jest
            </label>
          </div>
          <div className={styles.formCheckboxWrapper}>
            <input
              className={styles.formCheckboxInput}
              id="react"
              type="checkbox"
              name="react"
              onChange={this.handleInputChange}
              data-testid="reactInput"
            />
            <label htmlFor="react" className={styles.formCheckboxLabel}>
              React
            </label>
          </div>
        </fieldset>

        <label className={styles.formToggle}>
          <span className={styles.formToggleLabel}>
            I want to receive notifications about promo, sales, etc.
          </span>
          <input
            className={styles.formToggleRadio}
            type="checkbox"
            name="notifications"
            data-testid="receivedInput"
            onChange={this.handleInputChange}
          />
          <div className={styles.formToggleSwitch}></div>
        </label>
        <br />
        <button className={styles.formButtonSubmit} type="submit">
          Submit
        </button>
        {this.state.submitted && (
          <div className={styles.formSubmittedWrapper}>
            <div className={styles.formSubmittedInner}>
              <span className={styles.formSubmittedText}>Card successfully created!</span>
            </div>
          </div>
        )}
      </form>
    );
  }
}

export default UserForm;
