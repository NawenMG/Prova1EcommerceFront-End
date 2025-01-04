// store/carrello.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CarrelloState } from './carrelloAraRest.state';

export const selectCarrelloState = createFeatureSelector<CarrelloState>('carrello');

export const selectCarrello = createSelector(
  selectCarrelloState,
  (state) => state.carrello
);

export const selectLoading = createSelector(
  selectCarrelloState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectCarrelloState,
  (state) => state.error
);
