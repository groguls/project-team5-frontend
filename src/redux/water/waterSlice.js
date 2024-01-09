import { createSlice } from '@reduxjs/toolkit';

import {
  getMonthInfo,
  getTodayInfo,
  addWater,
  deleteWater,
  editWater,
} from './waterOperations';

const initialState = {
  monthInfo: [],
  currentMonth: '',
  today: {
    percent: 0,
    dailyWaterList: [],
  },
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    updateDailyNorma: (state, { payload }) => {
      state.monthInfo = state.monthInfo.map(day => ({
        ...day,
        dailyWaterRate: payload,
      }));
    },
    updateMonthInfo(state, action) {
      state.monthInfo = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMonthInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMonthInfo.fulfilled, (state, { payload }) => {
        state.monthInfo = state.monthInfo.map(prevItem => {
          const newData = payload.find(
            newItem => newItem.date === prevItem.date
          );
          if (newData) {
            return { ...prevItem, ...newData };
          }
          return prevItem;
        });
        state.isLoading = false;
      })
      .addCase(getMonthInfo.rejected, (_, { payload }) => ({
        ...initialState,
        error: payload,
      }))
      .addCase(getTodayInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTodayInfo.fulfilled, (state, { payload }) => {
        if (payload.length === 0) {
          state.today.dailyWaterList = [];
          state.today.percent = 0;
        } else {
          state.today.dailyWaterList = payload.waterRecords;
          state.today.percent = payload.percentage ?? 0;
          state.isLoading = false;
        }
      })
      .addCase(getTodayInfo.rejected, (_, { payload }) => ({
        ...initialState,
        error: payload,
      }))
      .addCase(addWater.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList = payload.waterRecords;
        state.isLoading = false;
      })
      .addCase(addWater.rejected, (_, { payload }) => ({
        ...initialState,
        error: payload,
      }))
      .addCase(deleteWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWater.fulfilled, (state, { payload }) => {
        const index = state.today.dailyWaterList.findIndex(
          data => data._id === payload._id
        );
        state.today.dailyWaterList.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(deleteWater.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(editWater.rejected, (_, { payload }) => ({
        ...initialState,
        error: payload,
      }))
      .addCase(editWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(editWater.fulfilled, (state, { payload }) => {
        const array = state.today.dailyWaterList;
        const indexChange = array.findIndex(item => item._id === payload._id);

        if (indexChange !== -1) {
          array[indexChange] = payload;
        }
      });
  },
});

export const {
  updateDailyNorma,
  updateMonthInfo,
  updatePortionInfo,
  updateTimeInfo,
  addWaterRecord,
} = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
