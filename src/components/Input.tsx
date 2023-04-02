import { AiOutlineSearch } from 'react-icons/Ai';
import { useState, useEffect, ChangeEvent } from 'react';
import styles from './styles/Input.module.scss';

interface InputProps {
  onSearch: (value: string) => void;
}

const Input = ({ onSearch }: InputProps) => {
  const [value, setValue] = useState(() => localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', value);
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(value);
      setValue('');
    }
  };
  return (
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
  );
};

export default Input;
