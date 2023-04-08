import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from 'types/types';
import { RootState } from '../store/store';
import produce, { Draft } from 'immer';

const initialState: FormValues = {
  fullName: '',
  phone: '',
  email: '',
  birthday: '',
  gender: '',
  country: '',
  photoURL: null,
  photoName: '',
  html: false,
  css: false,
  javascript: false,
  typescript: false,
  jest: false,
  react: false,
  notification: false,
};

interface UpdateFormValuePayload {
  key: keyof FormValues;
  value: string | boolean | File;
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormValue: (state: Draft<FormValues>, action: PayloadAction<UpdateFormValuePayload>) => {
      const { key, value } = action.payload;
      state[key] = value as never;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const { updateFormValue, resetForm } = formSlice.actions;
export const selectFormValues = (state: RootState) => state.form;
export const formReducer = formSlice.reducer;
