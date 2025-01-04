// store/graphdb.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GraphDBState } from './graphNeoRest.state';

export const selectGraphDBState = createFeatureSelector<GraphDBState>('graphDB');

export const selectUtenti = createSelector(
  selectGraphDBState,
  (state) => state.utenti
);

export const selectProdotti = createSelector(
  selectGraphDBState,
  (state) => state.prodotti
);

export const selectLoading = createSelector(
  selectGraphDBState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectGraphDBState,
  (state) => state.error
);
