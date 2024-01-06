
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://watertracker-by-group5.onrender.com/api';

export const sendForgotPasswordRequest = createAsyncThunk(
  'forgotPassword/sendRequest',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/settings/forgotPassword`, { email });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

