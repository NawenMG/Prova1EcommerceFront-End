// store/pagamenti.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PagamentiState } from './pagamentoRelGraphQL.state';

export const selectPagamentiState = createFeatureSelector<PagamentiState>('pagamenti');

export const selectPagamenti = createSelector(
  selectPagamentiState,
  (state) => state.pagamenti
);

export const selectLoading = createSelector(
  selectPagamentiState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectPagamentiState,
  (state) => state.error
);
