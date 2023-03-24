import { ChangeEvent, Component } from 'react';
import { AiOutlineSearch } from 'react-icons/Ai';
import { InputState } from 'types/types';
import styles from './styles/Input.module.scss';

class Input extends Component<Record<string, unknown>, InputState> {
  state: InputState = {
    value: localStorage.getItem('inputValue') || '',
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ value });
    localStorage.setItem('inputValue', value);
  };

  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.value);
  }

  render() {
    return (
      <div className={styles.inputContainer}>
        <AiOutlineSearch className={styles.inputIcon} />
        <input
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search"
          className={styles.input}
        />
      </div>
    );
  }
}
export default Input;
