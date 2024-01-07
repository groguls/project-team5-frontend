import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.loading;

// user selecctors
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;

export const selectEmail = state => state.auth.user.email;

export const selectName = state => state.auth.user.name;
// {
//   return state.auth.user.name || state.auth.user.email?.split('@')[0];
// };

export const selectUserLogo = state => state.auth.user.avatar;
export const selectDailyNorma = state => state.auth.user.waterRate;

export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => token && isLoggedIn
);

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectMonthInfo = state => state.water.monthInfo;
export const selectorWaterInfo = state => state.water.today;
export const selectWaterList = state => state.water.today.dailyWaterList;
export const selectIsWaterLoading = state => state.water.isLoading;

export const selectAddWater = state => state.water.waterNote.waterVolume;
export const selectTimeOfPortion = state => state.water.waterNote.date;
export const selectWaterNote = state => state.water.waterNote;
