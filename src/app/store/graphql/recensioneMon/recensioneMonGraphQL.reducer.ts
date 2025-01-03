// store/recensioni.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as RecensioniActions from './recensioneMonGraphQL.actions';
import { RecensioniState, initialState } from './recensioneMonGraphQL.state';

export const recensioniReducer = createReducer(
  initialState,
  on(RecensioniActions.loadRecensioni, (state) => ({ ...state, loading: true })),
  on(RecensioniActions.loadRecensioniSuccess, (state, { recensioni }) => ({
    ...state,
    recensioni,
    loading: false,
    error: null
  })),
  on(RecensioniActions.loadRecensioniFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
