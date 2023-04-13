import UserForm from '../components/UserForm';
import UserCard from '../components/UserCard';
import { useAppSelector } from '../redux/hooks';
import { selectFormValues } from '../redux/features/form/formSlice';
import styles from './styles/Form.module.scss';

const Form = () => {
  const { userCards } = useAppSelector(selectFormValues);

  return (
    <>
      <div className={styles.formWrapper}>
        <UserForm />
      </div>
      <div className={styles.userCardsWrapper}>
        {userCards.length > 0 && userCards.map((card, i) => <UserCard key={i} data={card} />)}
      </div>
    </>
  );
};

export default Form;
