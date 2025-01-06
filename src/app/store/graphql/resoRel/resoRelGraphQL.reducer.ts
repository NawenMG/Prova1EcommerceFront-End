// store/resi.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ResiActions from './resoRelGraphQL.actions';
import { ResiState, initialState } from './resoRelGraphQL.state';

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
  }))
);
