import { createSlice } from '@reduxjs/toolkit';
import { recoverPassword } from './forgotPasswordOperations';

const initialState = {
  loading: false,
  successMessage: '',
  error: null,
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    clearForgotPasswordState: state => {
      state.loading = false;
      state.successMessage = '';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(recoverPassword.pending, state => {
        state.loading = true;
        state.successMessage = '';
        state.error = null;
      })
      .addCase(recoverPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      })
      .addCase(recoverPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearForgotPasswordState } = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
