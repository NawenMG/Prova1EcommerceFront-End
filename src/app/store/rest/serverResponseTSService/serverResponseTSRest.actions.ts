// store/server-response.actions.ts
import { createAction, props } from '@ngrx/store';
import { ServerResponse } from './serverResponseTSRest.state';

// Caricamento delle risposte casuali
export const loadRandomServerResponses = createAction(
  '[ServerResponse] Load Random ServerResponses',
  props<{ count: number }>()
);

export const loadRandomServerResponsesSuccess = createAction(
  '[ServerResponse] Load Random ServerResponses Success',
  props<{ serverResponses: ServerResponse[] }>()
);

export const loadRandomServerResponsesFailure = createAction(
  '[ServerResponse] Load Random ServerResponses Failure',
  props<{ error: string }>()
);

// Inserimento di una risposta del server
export const insertServerResponse = createAction(
  '[ServerResponse] Insert ServerResponse',
  props<{ serverResponse: ServerResponse }>()
);

export const insertServerResponseSuccess = createAction(
  '[ServerResponse] Insert ServerResponse Success'
);

export const insertServerResponseFailure = createAction(
  '[ServerResponse] Insert ServerResponse Failure',
  props<{ error: string }>()
);
