// store/recensioni.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as RecensioniActions from './recensioneMonRest.actions';
import { RecensioniState, initialState } from './recensioneMonRest.state';

export const recensioniReducer = createReducer(
  initialState,
  on(RecensioniActions.loadRecensioniByProduct, (state) => ({ ...state, loading: true })),
  on(RecensioniActions.loadRecensioniByProductSuccess, (state, { recensioni }) => ({
    ...state,
    recensioni,
    loading: false,
    error: null
  })),
  on(RecensioniActions.loadRecensioniByProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
