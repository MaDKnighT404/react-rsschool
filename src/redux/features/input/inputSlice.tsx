import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/store/store';

const initialState = {
  value: '',
  request: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setRequest: (state, action: PayloadAction<string>) => {
      state.request = action.payload;
    },
  },
});

export const { changeValue, setRequest } = inputSlice.actions;
export const selectInputValue = (state: RootState) => state.input;
export const inputReducer = inputSlice.reducer;
