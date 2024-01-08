import { createSlice } from '@reduxjs/toolkit';
import {
  logOut,
  refreshUser,
  signIn,
  signUp,
  updateWaterRate,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    avatar: null,
    gender: null,
    dailyNorma: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isLoading = false;
};
const handlePending = (state, action) => {
  state.isLoading = true;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = '';
        state.isLoading = false;
      })
      .addCase(signIn.pending, handlePending)
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = '';
        state.isLoading = false;
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(updateWaterRate.fulfilled, (state, { payload }) => {
        state.user.waterRate = payload.waterRate;
      })
      .addCase(signIn.rejected, handleRejected)
      .addCase(signUp.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
