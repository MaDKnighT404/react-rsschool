import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserCard from '../components/UserCard';
import styles from './styles/Form.module.scss';
import { FormState, FormValues } from 'types/types';

const Form = () => {
  const [formData, setFormData] = useState<FormValues[]>([]);

  const handleSubmit = (newFormData: FormValues[]) => {
    setFormData([...newFormData]);
  };

  useEffect(() => {
    // Этот блок кода будет выполнен только при монтировании и обновлении компонента
    // Здесь можно реализовать любую логику, которая должна быть выполнена при обновлении formData

  }, [formData]);

  return (
    <>
      <div className={styles.formWrapper}>
        <UserForm onSubmit={handleSubmit} />
      </div>
      <div className={styles.userCardsWrapper}>
        {formData.length > 0 && formData.map((data, i) => <UserCard key={i} data={data} />)}
      </div>
    </>
  );
};

export default Form;
