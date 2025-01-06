// store/user.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './userRelRest.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);

export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUserState,
  (state) => state.error
);
