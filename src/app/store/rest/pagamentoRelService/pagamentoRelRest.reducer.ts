// store/pagamenti.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as PagamentiActions from './pagamentoRelRest.actions';
import { PagamentiState, initialState } from './pagamentoRelRest.state';

export const pagamentiReducer = createReducer(
  initialState,
  on(PagamentiActions.loadPagamenti, (state) => ({ ...state, loading: true })),
  on(PagamentiActions.loadPagamentiSuccess, (state, { pagamenti }) => ({
    ...state,
    pagamenti,
    loading: false,
    error: null
  })),
  on(PagamentiActions.loadPagamentiFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(PagamentiActions.inserisciPagamento, (state) => ({ ...state, loading: true })),
  on(PagamentiActions.inserisciPagamentoSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(PagamentiActions.inserisciPagamentoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
