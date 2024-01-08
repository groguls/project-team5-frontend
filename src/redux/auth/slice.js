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
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
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
