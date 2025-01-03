// store/recensioni.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RecensioniState } from './recensioneMonRest.state';

export const selectRecensioniState = createFeatureSelector<RecensioniState>('recensioni');

export const selectAllRecensioni = createSelector(
  selectRecensioniState,
  (state) => state.recensioni
);

export const selectLoading = createSelector(
  selectRecensioniState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectRecensioniState,
  (state) => state.error
);
