import { AiOutlineSearch } from 'react-icons/Ai';
import { useState, useEffect, ChangeEvent } from 'react';
import styles from './styles/Input.module.scss';

interface InputProps {
  onSearch: (value: string) => void;
  setCardLoaded: (value: boolean) => void;
  setNumImagesLoaded: (value: number) => void;
}

const Input = ({ onSearch, setCardLoaded, setNumImagesLoaded }: InputProps) => {
  const [value, setValue] = useState(() => localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', value);
  }, [value, setValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value) {
      setValue('');
      setNumImagesLoaded(0);
      setCardLoaded(false);
      onSearch(value);
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
