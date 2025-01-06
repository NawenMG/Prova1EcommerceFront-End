// store/server-response.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ServerResponseActions from './serverResponseTSRest.actions';
import { ServerResponseState, initialState } from './serverResponseTSRest.state';

export const serverResponseReducer = createReducer(
  initialState,

  on(ServerResponseActions.loadRandomServerResponses, (state) => ({
    ...state, loading: true, error: null
  })),

  on(ServerResponseActions.loadRandomServerResponsesSuccess, (state, { serverResponses }) => ({
    ...state, serverResponses, loading: false
  })),

  on(ServerResponseActions.loadRandomServerResponsesFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  on(ServerResponseActions.insertServerResponse, (state) => ({
    ...state, loading: true
  })),

  on(ServerResponseActions.insertServerResponseSuccess, (state) => ({
    ...state, loading: false, error: null
  })),

  on(ServerResponseActions.insertServerResponseFailure, (state, { error }) => ({
    ...state, loading: false, error
  }))
);
