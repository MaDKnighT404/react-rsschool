import { AiOutlineSearch } from 'react-icons/Ai';
import { AiOutlineQuestionCircle } from 'react-icons/Ai';
import { useState, useEffect, ChangeEvent } from 'react';
import styles from './styles/Input.module.scss';

interface InputProps {
  onSearch: (value: string) => void;
}

const Input = ({ onSearch }: InputProps) => {
  const [value, setValue] = useState(() => localStorage.getItem('inputValue') || '');
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    localStorage.setItem('inputValue', value);
  }, [value, setValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOnClick = () => {
    setShowHint(!showHint);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value) {
      setValue('');
      onSearch(value.toLowerCase());
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        <AiOutlineSearch className={styles.inputIcon} />
        <input
          value={value}
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
