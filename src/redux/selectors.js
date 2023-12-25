import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.loading;

// user selecctors
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectUserLogo = state => state.auth.user.avatar;
export const selectDailyNorma = state => state.auth.user.dailyNorma;

export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => token && isLoggedIn
);

export const selectIsRefreshing = state => state.auth.isRefreshing;
