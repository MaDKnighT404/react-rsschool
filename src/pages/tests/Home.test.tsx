import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Home from '../Home';

it('display Home page', async () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
});
