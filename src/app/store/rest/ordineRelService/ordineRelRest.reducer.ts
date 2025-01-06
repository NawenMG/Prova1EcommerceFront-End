// store/ordini.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as OrdiniActions from './ordineRelRest.actions';
import { OrdiniState, initialState } from './ordineRelRest.state';

export const ordiniReducer = createReducer(
  initialState,

  on(OrdiniActions.loadOrdini, (state) => ({
    ...state, loading: true, error: null
  })),

  on(OrdiniActions.loadOrdiniSuccess, (state, { ordini }) => ({
    ...state, ordini, loading: false, error: null
  })),

  on(OrdiniActions.loadOrdiniFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  on(OrdiniActions.inserisciOrdine, (state) => ({
    ...state, loading: true
  })),

  on(OrdiniActions.inserisciOrdineSuccess, (state) => ({
    ...state, loading: false, error: null
  })),

  on(OrdiniActions.inserisciOrdineFailure, (state, { error }) => ({
    ...state, loading: false, error
  }))
);
