import React, { ChangeEvent, Component } from 'react';
import styles from './styles/Input.module.scss';
import { AiOutlineSearch } from 'react-icons/Ai';

interface InputState {
  value: string;
}

class Input extends Component<Record<string, unknown>, InputState> {
  state: InputState = {
    value: localStorage.getItem('inputValue') || '',
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ value });
  };

  componentDidMount() {
    const inputValue = localStorage.getItem('inputValue') ?? '';
    this.setState({ value: inputValue });
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('inputValue', value);
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
