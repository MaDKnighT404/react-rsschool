import { useSelector } from 'react-redux';
import UserForm from '../components/UserForm';
import UserCard from '../components/UserCard';
import { selectFormValues } from '../redux/features/formSlice';
import styles from './styles/Form.module.scss';

const Form = () => {
  const { userCards } = useSelector(selectFormValues);

  return (
    <>
      <div className={styles.formWrapper}>
        <UserForm />
      </div>
      <div className={styles.userCardsWrapper}>
        {userCards.length > 0 && userCards.map((card, i) => <UserCard key={i} card={card} />)}
      </div>
    </>
  );
};

export default Form;
