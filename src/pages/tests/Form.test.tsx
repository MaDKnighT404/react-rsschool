import { Provider } from 'react-redux';
import store from '../../redux/store';
import { render } from '@testing-library/react';
import Form from '../Form';

describe('Form component', () => {
  it('should render UserForm component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(getByTestId('form')).toBeInTheDocument();
  });
});
