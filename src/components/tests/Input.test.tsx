import { render, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input component', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('updates component state on input change', () => {
    const { getByPlaceholderText } = render(<Input />);
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('saves input value to local storage on state update', () => {
    const { getByPlaceholderText } = render(<Input />);
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(localStorage.getItem('inputValue')).toBe('test');
  });

  it('saves last input value to local storage on component unmount', () => {
    const { getByPlaceholderText, unmount } = render(<Input />);
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    unmount();
    expect(localStorage.getItem('inputValue')).toBe('test');
  });
});
