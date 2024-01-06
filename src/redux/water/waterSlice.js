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
        dailyNorma: payload,
      }));
    },
    updateMonthInfo(state, action) {
      state.monthInfo = action.payload;
    },
    updateDayInfo(state, action) {
      state.dayInfo = action.payload;
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
        state.today.dailyWaterList = payload[0].waterRecords;
        state.today.percent = payload[0].percentage ?? 0;
        state.isLoading = false;
      })
      .addCase(getTodayInfo.rejected, (_, { payload }) => ({
        ...initialState,
        error: payload,
      }))
      .addCase(
        addWater.fulfilled,
        (state, { payload: { amount, time, _id } }) => {
          state.today.dailyWaterList.push({ amount, time, _id });
          state.isLoading = false;
        }
      )
      .addCase(addWater.rejected, (_, { payload }) => ({
        ...initialState,
        error: payload,
      }))
      .addCase(deleteWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWater.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList = state.today.dailyWaterList.filter(
          data => data._id !== payload.removedId
        );
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

export const { updateDailyNorma, updateMonthInfo, updateDayInfo } =
  waterSlice.actions;
export const waterReducer = waterSlice.reducer;
