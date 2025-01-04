// store/carrello.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CarrelloActions from './carrelloAraRest.actions';
import { CarrelloState, initialState } from './carrelloAraRest.state';

export const carrelloReducer = createReducer(
  initialState,
  on(CarrelloActions.loadCarrello, (state) => ({ ...state, loading: true })),
  on(CarrelloActions.loadCarrelloSuccess, (state, { carrello }) => ({
    ...state,
    carrello,
    loading: false,
    error: null
  })),
  on(CarrelloActions.loadCarrelloFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(CarrelloActions.svuotaCarrelloSuccess, (state) => ({
    ...state,
    carrello: null,
    loading: false
  })),
  on(CarrelloActions.rimuoviProdottoSuccess, (state) => ({
    ...state,
    loading: false
  }))
);
