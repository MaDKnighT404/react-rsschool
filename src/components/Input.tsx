import { useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectInputValue, changeValue } from '../redux/features/input/inputSlice';
import { AiOutlineSearch, AiOutlineQuestionCircle } from 'react-icons/Ai';
import styles from './styles/Input.module.scss';

interface InputProps {
  onSearch: (value: string) => void;
}

const Input = ({ onSearch }: InputProps) => {
  const [showHint, setShowHint] = useState(false);

  const dispatch = useAppDispatch();
  const { ...state } = useAppSelector(selectInputValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(event.target.value));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && state.value) {
      onSearch(state.value.toLowerCase());
    }
  };

  const handleOnClick = () => {
    setShowHint(!showHint);
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        <AiOutlineSearch className={styles.inputIcon} />
        <input
          value={state.value}
          placeholder="Search"
          className={styles.input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <AiOutlineQuestionCircle className={styles.inputQuestion} onClick={handleOnClick} />
      <div
        className={styles.inputHint}
        style={{
          position: showHint ? 'relative' : 'absolute',
          display: showHint ? 'block' : 'none',
        }}
      >
        <h4 className={styles.inputHintTitle}>Available parameters for searching:</h4>
        <ul className={styles.inputHintList}>
          <li className={styles.inputHintItem}>
            Name: filter by the given name(Rick, Morty, Beth and others).
          </li>
          <li className={styles.inputHintItem}>
            Status: filter by the given status (alive, dead or unknown)
          </li>
          <li className={styles.inputHintItem}>
            Gender: filter by the given gender (female, male, genderless or unknown)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Input;
