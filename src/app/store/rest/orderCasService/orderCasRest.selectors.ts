// store/ordini.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { OrdiniState } from './orderCasRest.state';

export const selectOrdiniState = createFeatureSelector<OrdiniState>('ordini');

export const selectAllOrdini = createSelector(
  selectOrdiniState,
  (state) => state.ordini
);

export const selectLoading = createSelector(
  selectOrdiniState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectOrdiniState,
  (state) => state.error
);
