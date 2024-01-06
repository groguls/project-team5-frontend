
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/users', // Подставьте ваш URL бэкенда
});

export const recoverPassword = createAsyncThunk(
  'forgotPassword/recoverPassword',
  async (email, thunkAPI) => {
    try {
      const { data } = await instance.post('/recover-password', { email });
      return data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
