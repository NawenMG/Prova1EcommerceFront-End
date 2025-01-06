// store/ordini.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as OrdiniActions from './ordineRelGraphQL.actions';
import { OrdiniState, initialState } from './ordineRelGraphQL.state';

export const ordiniReducer = createReducer(
  initialState,
  on(OrdiniActions.loadOrdini, (state) => ({ ...state, loading: true })),
  on(OrdiniActions.loadOrdiniSuccess, (state, { ordini }) => ({
    ...state,
    ordini,
    loading: false,
    error: null
  })),
  on(OrdiniActions.loadOrdiniFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
