import React, { ChangeEvent, Component } from 'react';
import styles from './Input.module.scss';

interface InputState {
  value: string;
}

class InputComponent extends Component<Record<string, unknown>, InputState> {
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
      <input
        value={this.state.value}
        onChange={this.handleChange}
        placeholder="Search"
        className={styles.input}
      />
    );
  }
}
export default InputComponent;
