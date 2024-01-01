import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
});

// const setTokenWater = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearTokenWater = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const getMonthInfo = createAsyncThunk(
  'water/getMonthInfo',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get('/');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTodayInfo = createAsyncThunk(
  'today/getTodayInfo',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(/* ENDPOINT */);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (amount, thunkAPI) => {
    try {
      const { data } = await instance.post('', amount);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async ({ newWater, _id }, thunkAPI) => {
    try {
      const { data } = await instance.patch({ newWater, id: _id });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
