import { AiOutlineSearch } from 'react-icons/Ai';
import { AiOutlineQuestionCircle } from 'react-icons/Ai';
import { useState, useEffect, ChangeEvent } from 'react';
import styles from './styles/Input.module.scss';

interface InputProps {
  onSearch: (value: string) => void;
  setCardLoaded: (value: boolean) => void;
  setNumImagesLoaded: (value: number) => void;
}

const Input = ({ onSearch, setCardLoaded, setNumImagesLoaded }: InputProps) => {
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
      setNumImagesLoaded(0);
      setCardLoaded(false);
      onSearch(value.toLowerCase());
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <AiOutlineSearch className={styles.inputIcon} />
        <input
          value={value}
          placeholder="Search"
          className={styles.input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <AiOutlineQuestionCircle className={styles.inputQuestion} onClick={handleOnClick} />
      </div>
      <p className={styles.inputHint} style={{ opacity: showHint ? 0 : 1 }}>
        123
      </p>
    </>
  );
};

export default Input;
