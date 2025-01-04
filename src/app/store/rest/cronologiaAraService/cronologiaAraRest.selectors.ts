// store/cronologia.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CronologiaState } from './cronologiaAraRest.state';

export const selectCronologiaState = createFeatureSelector<CronologiaState>('cronologia');

export const selectCronologia = createSelector(
  selectCronologiaState,
  (state) => state.cronologia
);

export const selectLoading = createSelector(
  selectCronologiaState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectCronologiaState,
  (state) => state.error
);
