import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { formReducer } from '../features/form/formSlice';
import { cardsApi } from '../../redux/features/card/cardsApi';
import { inputReducer } from '../../redux/features/input/inputSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    input: inputReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
