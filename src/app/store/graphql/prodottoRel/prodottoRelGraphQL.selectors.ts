// store/prodotti.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProdottiState } from './prodottoRelGraphQL.state';

export const selectProdottiState = createFeatureSelector<ProdottiState>('prodotti');

export const selectProdotti = createSelector(
  selectProdottiState,
  (state) => state.prodotti
);

export const selectLoading = createSelector(
  selectProdottiState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectProdottiState,
  (state) => state.error
);
