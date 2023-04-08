import { useSelector, useDispatch } from 'react-redux';
import { selectFormValues, updateFormValue } from '../redux/features/formSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaFileDownload } from 'react-icons/Fa';
import { FormValues } from '../types/types';
import { validationSchema } from '../helpers/validationSchema';
import { useForm } from 'react-hook-form';
import styles from './styles/UserForm.module.scss';
import type { RootState } from '../redux/store/store';

interface UserFormProps {
  submitData: (formData: FormValues) => void;
}

const UserForm = ({ submitData }: UserFormProps) => {
  const dispatch = useDispatch();
  const { photoName, ...defaultValues } = useSelector(selectFormValues);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues,
    // resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    submitData(data);
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
          data-testid="nameInput"
          placeholder="John Wick"
          title="Two words. Each word at least 3 letters.First letter must be capitalized"
          {...register('fullName')}
          onChange={(e) => dispatch(updateFormValue({ key: 'fullName', value: e.target.value }))}
        />
        <p className={styles.formError}>{errors.fullName?.message}</p>

        <span className={styles.formLabel}>Phone:</span>
        <input
          className={styles.formInputText}
          id="phone"
          type="text"
          placeholder="+79001001005"
          data-testid="phoneInput"
          title="First character is + Minimum 10 digits"
          {...register('phone')}
          onChange={(e) => dispatch(updateFormValue({ key: 'phone', value: e.target.value }))}
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
          onChange={(e) => dispatch(updateFormValue({ key: 'email', value: e.target.value }))}
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
              value="female"
              data-testid="femaleInput"
              {...register('gender')}
              onChange={(e) => dispatch(updateFormValue({ key: 'gender', value: e.target.value }))}
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
              value="male"
              data-testid="maleInput"
              {...register('gender')}
              onChange={(e) => dispatch(updateFormValue({ key: 'gender', value: e.target.value }))}
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
          type="date"
          data-testid="birthdayInput"
          {...register('birthday')}
          onChange={(e) => dispatch(updateFormValue({ key: 'birthday', value: e.target.value }))}
        />
        <p className={styles.formError}>{errors.birthday?.message}</p>
        <span className={styles.formLabel}>Country:</span>
        <select
          className={styles.formInputSelect}
          id="country"
          data-testid="countryInput"
          defaultValue={'select'}
          {...register('country')}
          onChange={(e) => dispatch(updateFormValue({ key: 'country', value: e.target.value }))}
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
            accept="image/png, image/jpeg"
            data-testid="photoInput"
            {...register('photoURL')}
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                const fileUrl = URL.createObjectURL(file);
                dispatch(updateFormValue({ key: 'photoURL', value: fileUrl }));
                dispatch(updateFormValue({ key: 'photoName', value: file.name }));
              }
            }}
          />
          <label htmlFor="photo" className={styles.formInputFileInner}>
            <span className={styles.formInputFileBtn} data-testid="photoName">
              {photoName ? photoName : 'Select your photo'}
            </span>
            <FaFileDownload className={styles.formInputFileIcon} />
          </label>
        </div>
        <p className={styles.formError}>{errors.photoURL?.message}</p>
      </fieldset>
      <fieldset className={`${styles.formFieldset} ${styles.formFieldsetCheckbox}`}>
        <legend> Skills</legend>

        <div className={styles.formCheckboxWrapper}>
          <input
            className={styles.formCheckboxInput}
            id="html"
            type="checkbox"
            data-testid="htmlInput"
            {...register('html')}
            onChange={(e) => dispatch(updateFormValue({ key: 'html', value: e.target.checked }))}
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
            data-testid="cssInput"
            {...register('css')}
            onChange={(e) => dispatch(updateFormValue({ key: 'css', value: e.target.checked }))}
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
            data-testid="javascriptInput"
            {...register('javascript')}
            onChange={(e) =>
              dispatch(updateFormValue({ key: 'javascript', value: e.target.checked }))
            }
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
            data-testid="typescriptInput"
            {...register('typescript')}
            onChange={(e) =>
              dispatch(updateFormValue({ key: 'typescript', value: e.target.checked }))
            }
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
            data-testid="jestInput"
            {...register('jest')}
            onChange={(e) => dispatch(updateFormValue({ key: 'jest', value: e.target.checked }))}
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
            data-testid="reactInput"
            {...register('react')}
            onChange={(e) => dispatch(updateFormValue({ key: 'react', value: e.target.checked }))}
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
          data-testid="receivedInput"
          {...register('notification')}
          onChange={(e) =>
            dispatch(updateFormValue({ key: 'notification', value: e.target.checked }))
          }
        />
        <div className={styles.formToggleSwitch}></div>
      </label>
      <br />
      <button className={styles.formButtonSubmit} type="submit" data-testid="submitButton">
        Submit
      </button>
      {isSubmitSuccessful && (
        <div className={styles.formSubmittedWrapper}>
          <div className={styles.formSubmittedInner}>
            <span className={styles.formSubmittedText}>Card successfully created!</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default UserForm;
