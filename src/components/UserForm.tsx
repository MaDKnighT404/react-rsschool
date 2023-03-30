import { useEffect, useState } from 'react';
import { ChangeEvent, Component } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaFileDownload } from 'react-icons/Fa';
import { FormValues, UserCardProps } from 'types/types';
import { validationSchema } from '../helpers/validationSchema';
import { useForm } from 'react-hook-form';
import styles from './styles/UserForm.module.scss';

interface UserFormProps {
  submitData: (formData: FormValues) => void;
}

const UserForm = ({ submitData }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      birthday: '',
      gender: '',
      country: '',
      photo: undefined,
      html: false,
      css: false,
      javascript: false,
      typescript: false,
      jest: false,
      react: false,
      notification: false,
    },
    reValidateMode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    submitData(data);
    setTimeout(() => reset(), 1000);
  };

  return (
    <form className={styles.form} data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.formFieldset}>
        <legend>Contact information</legend>

        <span className={styles.formLabel}>Full name:</span>
        <input
          className={styles.formInputText}
          id="name"
          type="text"
          {...register('fullName')}
          data-testid="nameInput"
          placeholder="John Wick"
          title="Two words. Each word at least 3 letters.First letter must be capitalized"
        />
        <p className={styles.formError}>{errors.fullName?.message}</p>

        <span className={styles.formLabel}>Phone:</span>
        <input
          className={styles.formInputText}
          id="phone"
          type="text"
          {...register('phone')}
          placeholder="+79001001005"
          data-testid="phoneInput"
          title="First character is + Minimum 10 digits"
        />
        <p className={styles.formError}>{errors.phone?.message}</p>

        <span className={styles.formLabel}>Email:</span>
        <input
          className={styles.formInputText}
          id="name"
          type="text"
          {...register('email')}
          data-testid="emailInput"
          placeholder="example@ex.com"
        />
        <p className={styles.formError}>{errors.email?.message}</p>
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
              {...register('gender')}
              value="female"
              data-testid="femaleInput"
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
              {...register('gender')}
              value="male"
              data-testid="maleInput"
            />
            <label htmlFor="male" className={styles.formGenderLabel}>
              Male
            </label>
          </div>
        </div>
        <br />
        <p className={styles.formError}>{errors.gender?.message}</p>
        <span className={styles.formLabel}>Birthday:</span>
        <input
          className={styles.formInputDate}
          id="birthday"
          {...register('birthday')}
          type="date"
          data-testid="birthdayInput"
        />
        <p className={styles.formError}>{errors.birthday?.message}</p>
        <span className={styles.formLabel}>Country:</span>
        <select
          className={styles.formInputSelect}
          id="country"
          {...register('country')}
          data-testid="countryInput"
          defaultValue={'select'}
        >
          <option value="" disabled>
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
        <p className={styles.formError}>{errors.country?.message}</p>

        <span className={styles.formLabel}>Photo:</span>
        <div className={styles.formInputFileWrapper}>
          <input
            className={styles.formInputFile}
            id="photo"
            type="file"
            {...register('photo')}
            accept="image/png, image/jpeg"
            data-testid="photoInput"
          />
          <label htmlFor="photo" className={styles.formInputFileInner}>
            <span className={styles.formInputFileBtn} data-testid="photoName">
              {watch('photo') && getValues('photo')[0]
                ? `${getValues('photo')[0].name}`
                : 'Select your photo'}
            </span>
            <FaFileDownload className={styles.formInputFileIcon} />
          </label>
        </div>
        <p className={styles.formError}>{errors.photo?.message}</p>
      </fieldset>
      <fieldset className={`${styles.formFieldset} ${styles.formFieldsetCheckbox}`}>
        <legend> Skills</legend>

        <div className={styles.formCheckboxWrapper}>
          <input
            className={styles.formCheckboxInput}
            id="html"
            type="checkbox"
            {...register('html')}
            data-testid="htmlInput"
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
            {...register('css')}
            data-testid="cssInput"
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
            {...register('javascript')}
            data-testid="javascriptInput"
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
            {...register('typescript')}
            data-testid="typescriptInput"
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
            {...register('jest')}
            data-testid="jestInput"
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
            {...register('react')}
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
          {...register('notification')}
          data-testid="receivedInput"
        />
        <div className={styles.formToggleSwitch}></div>
      </label>
      <br />
      <button className={styles.formButtonSubmit} type="submit">
        Submit
      </button>
      {/* {this.state.submitted && (
        <div className={styles.formSubmittedWrapper}>
          <div className={styles.formSubmittedInner}>
            <span className={styles.formSubmittedText}>Card successfully created!</span>
          </div>
        </div>
      )} */}
    </form>
  );
};

export default UserForm;
