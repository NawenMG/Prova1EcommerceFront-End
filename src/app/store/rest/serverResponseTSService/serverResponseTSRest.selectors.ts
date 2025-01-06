// store/server-response.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ServerResponseState } from './serverResponseTSRest.state';

export const selectServerResponseState = createFeatureSelector<ServerResponseState>('serverResponses');

export const selectServerResponses = createSelector(
  selectServerResponseState,
  (state) => state.serverResponses
);

export const selectLoading = createSelector(
  selectServerResponseState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectServerResponseState,
  (state) => state.error
);
