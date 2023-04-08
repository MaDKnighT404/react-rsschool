import { useState } from 'react';
import UserForm from '../components/UserForm';
import UserCard from '../components/UserCard';
import styles from './styles/Form.module.scss';
import { FormValues } from 'types/types';

const Form = () => {
  const [cardDataArray, setCardDataArray] = useState<FormValues[]>([]);
  const handleFormSubmit = (formData: FormValues) => {
    const newCardData = { ...formData };
    setCardDataArray((prevState) => [...prevState, newCardData]);
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <UserForm submitData={handleFormSubmit} />
      </div>
      <div className={styles.userCardsWrapper}>
        {cardDataArray.length > 0 && cardDataArray.map((data) => <UserCard key={data.email} />)}
      </div>
    </>
  );
};

export default Form;
