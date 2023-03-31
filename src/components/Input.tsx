import { AiOutlineSearch } from 'react-icons/Ai';
import { useState, useEffect, ChangeEvent } from 'react';
import styles from './styles/Input.module.scss';

const Input = () => {
  const [value, setValue] = useState(() => localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', value);
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <AiOutlineSearch className={styles.inputIcon} />
      <input value={value} onChange={handleChange} placeholder="Search" className={styles.input} />
    </div>
  );
};

export default Input;
