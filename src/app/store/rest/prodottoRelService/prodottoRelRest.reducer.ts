// store/prodotti.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ProdottiActions from './prodottoRelRest.actions';
import { ProdottiState, initialState } from './prodottoRelRest.state';

export const prodottiReducer = createReducer(
  initialState,

  // Caricamento
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
  })),

  // Inserimento
  on(ProdottiActions.inserisciProdotto, (state) => ({ ...state, loading: true })),
  on(ProdottiActions.inserisciProdottoSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(ProdottiActions.inserisciProdottoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Aggiornamento
  on(ProdottiActions.aggiornaProdotto, (state) => ({ ...state, loading: true })),
  on(ProdottiActions.aggiornaProdottoSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(ProdottiActions.aggiornaProdottoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Eliminazione
  on(ProdottiActions.eliminaProdotto, (state) => ({ ...state, loading: true })),
  on(ProdottiActions.eliminaProdottoSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(ProdottiActions.eliminaProdottoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
