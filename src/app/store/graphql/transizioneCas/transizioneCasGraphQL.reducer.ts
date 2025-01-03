// store/transizioni.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as TransizioniActions from './transizioneCasGraphQL.actions';
import { TransizioniState, initialState } from './transizioneCasGraphQL.state';

export const transizioniReducer = createReducer(
  initialState,
  on(TransizioniActions.loadTransizioni, (state) => ({ ...state, loading: true })),
  on(TransizioniActions.loadTransizioniSuccess, (state, { transizioni }) => ({
    ...state,
    transizioni,
    loading: false,
    error: null
  })),
  on(TransizioniActions.loadTransizioniFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
