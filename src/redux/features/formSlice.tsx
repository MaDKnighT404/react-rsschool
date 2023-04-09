import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from 'types/types';
import { RootState } from '../store/store';
import { Draft } from 'immer';

const initialState: FormValues = {
  fullName: '',
  phone: '',
  email: '',
  birthday: '',
  gender: '',
  country: '',
  photoURL: '',
  photoName: '',
  html: false,
  css: false,
  javascript: false,
  typescript: false,
  jest: false,
  react: false,
  notification: false,
  userCards: [],
};

interface UpdateFormValuePayload {
  key: keyof FormValues;
  value: string | boolean;
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormValue: (state: Draft<FormValues>, action: PayloadAction<UpdateFormValuePayload>) => {
      const { key, value } = action.payload;
      state[key] = value as never;
    },
    createNewUserCard: (state: FormValues, action: PayloadAction<FormValues>) => {
      state.userCards.push(action.payload);
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const { updateFormValue, createNewUserCard, resetForm } = formSlice.actions;
export const selectFormValues = (state: RootState) => state.form;
export const formReducer = formSlice.reducer;
