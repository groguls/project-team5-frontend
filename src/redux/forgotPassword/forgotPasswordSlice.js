
import { createSlice } from '@reduxjs/toolkit';
import { sendForgotPasswordRequest } from './forgotPasswordOperations';

const initialState = {
  status: 'idle',
  error: null,
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendForgotPasswordRequest.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(sendForgotPasswordRequest.fulfilled, (state) => {
        state.status = 'fulfilled';
        state.error = null;
      })
      .addCase(sendForgotPasswordRequest.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const forgotPasswordReducer = forgotPasswordSlice.reducer;

