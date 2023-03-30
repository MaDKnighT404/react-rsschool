import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserCard from '../components/UserCard';
import styles from './styles/Form.module.scss';
import { FormState, FormValues, UserCardProps } from 'types/types';

const Form = () => {
  const [cardData, setCardData] = useState<FormValues>({});
  const handleFormSubmit = (formData: FormValues) => {
    setCardData(formData);
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <UserForm submitData={handleFormSubmit} />
      </div>
      <div className={styles.userCardsWrapper}>
        {/* {formData.length > 0 && formData.map((data, i) => <UserCard key={i} data={data} />)} */}
      </div>
    </>
  );
};

export default Form;
