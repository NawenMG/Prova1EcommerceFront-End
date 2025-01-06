// store/resi.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ResiActions from './resoRelRest.actions';
import { ResiState, initialState } from './resoRelRest.state';

export const resiReducer = createReducer(
  initialState,

  on(ResiActions.loadResi, (state) => ({ ...state, loading: true })),
  on(ResiActions.loadResiSuccess, (state, { resi }) => ({
    ...state,
    resi,
    loading: false,
    error: null
  })),
  on(ResiActions.loadResiFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(ResiActions.inserisciReso, (state) => ({ ...state, loading: true })),
  on(ResiActions.inserisciResoSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(ResiActions.inserisciResoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
