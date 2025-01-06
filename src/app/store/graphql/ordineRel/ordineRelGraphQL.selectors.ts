// store/ordini.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { OrdiniState } from './ordineRelGraphQL.state';

export const selectOrdiniState = createFeatureSelector<OrdiniState>('ordini');

export const selectOrdini = createSelector(
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
