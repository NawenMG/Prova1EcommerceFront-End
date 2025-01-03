// store/transizioni.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TransizioniState } from './transizioneCasRest.state';

export const selectTransizioniState = createFeatureSelector<TransizioniState>('transizioni');

export const selectAllTransizioni = createSelector(
  selectTransizioniState,
  (state) => state.transizioni
);

export const selectLoading = createSelector(
  selectTransizioniState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectTransizioniState,
  (state) => state.error
);
