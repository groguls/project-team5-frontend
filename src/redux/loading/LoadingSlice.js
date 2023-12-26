import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        action => {
          const result = action.type.match(/^user\/.+\/pending$/) || [];
          if (result[0]) {
            return true;
          }
          return false;
        },
        () => true
      )
      .addMatcher(
        action => {
          const result =
            action.type.match(/^user\/.+\/(rejected|fulfilled)/) || [];
          if (result[0]) {
            return true;
          }
          return false;
        },
        () => false
      );
  },
});

export const loadingReducer = LoadingSlice.reducer;
