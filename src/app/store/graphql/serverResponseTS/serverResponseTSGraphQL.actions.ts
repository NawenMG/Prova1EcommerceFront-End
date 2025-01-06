// store/server-response.actions.ts
import { createAction, props } from '@ngrx/store';
import { ServerResponse } from './serverResponseTSGraphQL.state';

// Caricare risposte del server per intervallo di tempo
export const loadServerResponsesByTimeRange = createAction(
  '[ServerResponse] Load Server Responses By Time Range',
  props<{ startTime: string; endTime: string }>()
);
export const loadServerResponsesByTimeRangeSuccess = createAction(
  '[ServerResponse] Load Server Responses By Time Range Success',
  props<{ serverResponses: ServerResponse[] }>()
);
export const loadServerResponsesByTimeRangeFailure = createAction(
  '[ServerResponse] Load Server Responses By Time Range Failure',
  props<{ error: string }>()
);

// Caricare risposte del server per nome server
export const loadServerResponsesByServer = createAction(
  '[ServerResponse] Load Server Responses By Server',
  props<{ server: string }>()
);
export const loadServerResponsesByServerSuccess = createAction(
  '[ServerResponse] Load Server Responses By Server Success',
  props<{ serverResponses: ServerResponse[] }>()
);
export const loadServerResponsesByServerFailure = createAction(
  '[ServerResponse] Load Server Responses By Server Failure',
  props<{ error: string }>()
);
