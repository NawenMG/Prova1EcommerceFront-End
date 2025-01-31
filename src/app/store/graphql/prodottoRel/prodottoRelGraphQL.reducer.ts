import { createReducer, on } from '@ngrx/store';
import * as ProdottiActions from './prodottoRelGraphQL.actions';
import { ProdottiState, initialState } from './prodottoRelGraphQL.state';

export const prodottiReducer = createReducer(
  initialState,
  on(ProdottiActions.loadProdotti, (state) => ({ ...state, loading: true })),
  on(ProdottiActions.loadProdottiSuccess, (state, { prodotti }) => ({
    ...state,
    prodotti,
    loading: false,
    error: null
  })),
  on(ProdottiActions.loadProdottiFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
