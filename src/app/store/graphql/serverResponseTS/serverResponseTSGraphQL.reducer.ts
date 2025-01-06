// store/server-response.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ServerResponseActions from './serverResponseTSGraphQL.actions';
import { ServerResponseState, initialState } from './serverResponseTSGraphQL.state';

export const serverResponseReducer = createReducer(
  initialState,

  on(ServerResponseActions.loadServerResponsesByTimeRange, (state) => ({
    ...state, loading: true, error: null
  })),
  on(ServerResponseActions.loadServerResponsesByTimeRangeSuccess, (state, { serverResponses }) => ({
    ...state, serverResponses, loading: false
  })),
  on(ServerResponseActions.loadServerResponsesByTimeRangeFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  on(ServerResponseActions.loadServerResponsesByServer, (state) => ({
    ...state, loading: true
  })),
  on(ServerResponseActions.loadServerResponsesByServerSuccess, (state, { serverResponses }) => ({
    ...state, serverResponses, loading: false
  })),
  on(ServerResponseActions.loadServerResponsesByServerFailure, (state, { error }) => ({
    ...state, loading: false, error
  }))
);
