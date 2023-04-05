import { render, fireEvent, waitFor } from '@testing-library/react';
import Input from '../Input';
import Home from '../../pages/Home';
import userEvent from '@testing-library/user-event';
describe('Input component', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('updates component state on input change', () => {
    const { getByPlaceholderText } = render(
      <Input onSearch={() => {}} setCardLoaded={() => {}} setNumImagesLoaded={() => {}} />
    );
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('saves input value to local storage on state update', () => {
    const { getByPlaceholderText } = render(
      <Input onSearch={() => {}} setCardLoaded={() => {}} setNumImagesLoaded={() => {}} />
    );
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(localStorage.getItem('inputValue')).toBe('test');
  });

  it('saves last input value to local storage on component unmount', () => {
    const { getByPlaceholderText, unmount } = render(
      <Input onSearch={() => {}} setCardLoaded={() => {}} setNumImagesLoaded={() => {}} />
    );
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    unmount();
    expect(localStorage.getItem('inputValue')).toBe('test');
  });
});

describe('Input values', () => {
  it('sets the query to "error" when given invalid search terms', async () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    const input = getByPlaceholderText('Search');
    const text = 'invalid search terms';
    await userEvent.type(input, `${text}[Enter]`);
    await waitFor(() => {
      const errorMessage = getByText(
        'Sorry! Wrong request. Try type any character name, status or gender. You can combine this parametrs.'
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('sets the query to valid response when given valid search terms', async () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    const input = getByPlaceholderText('Search');
    const text = 'Rick';
    await userEvent.type(input, `${text}[Enter]`);
    await waitFor(() => {
      const cardName = getByText('Rick Sanchez');
      expect(cardName).toBeInTheDocument();
    });
  });
});
