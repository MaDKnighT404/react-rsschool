import { Provider } from 'react-redux';
import store from '../../redux/store';
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
      <Provider store={store}>
        <Input onSearch={() => {}} />
      </Provider>
    );
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});

describe('Input values', () => {
  it('sets the query to "error" when given invalid search terms', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
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

  // it('sets the query to valid response when given valid search terms', async () => {
  //   const { getByPlaceholderText, getByText } = render(
  //     <Provider store={store}>
  //       <Home />
  //     </Provider>
  //   );
  //   const input = getByPlaceholderText('Search');
  //   const text = 'Rick';
  //   await userEvent.type(input, `${text}[Enter]`);
  //   await waitFor(() => {
  //     const cardName = getByText('Rick Sanchez');
  //     expect(cardName).toBeInTheDocument();
  //   });
  // });
});
