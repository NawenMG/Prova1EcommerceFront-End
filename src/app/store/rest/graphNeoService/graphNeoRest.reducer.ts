// store/graphdb.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as GraphDBActions from './graphNeoRest.actions';
import { GraphDBState, initialState } from './graphNeoRest.state';

export const graphDBReducer = createReducer(
  initialState,
  on(GraphDBActions.createEntity, (state) => ({ ...state, loading: true })),
  on(GraphDBActions.createEntitySuccess, (state, { entity }) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(GraphDBActions.createEntityFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(GraphDBActions.deleteEntity, (state) => ({ ...state, loading: true })),
  on(GraphDBActions.deleteEntitySuccess, (state, { id }) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(GraphDBActions.deleteEntityFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
