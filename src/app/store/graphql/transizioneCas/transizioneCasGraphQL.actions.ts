// store/transizioni.actions.ts
import { createAction, props } from '@ngrx/store';
import { Transizione } from './transizioneCasGraphQL.state';

// Azioni per caricare tutte le transizioni
export const loadTransizioni = createAction('[Transizioni] Load Transizioni');
export const loadTransizioniSuccess = createAction(
  '[Transizioni] Load Transizioni Success',
  props<{ transizioni: Transizione[] }>()
);
export const loadTransizioniFailure = createAction(
  '[Transizioni] Load Transizioni Failure',
  props<{ error: string }>()
);

// Azioni per caricare una transizione per ID
export const loadTransizioneById = createAction(
  '[Transizioni] Load Transizione By ID',
  props<{ id: string }>()
);
export const loadTransizioneByIdSuccess = createAction(
  '[Transizioni] Load Transizione By ID Success',
  props<{ transizione: Transizione }>()
);
export const loadTransizioneByIdFailure = createAction(
  '[Transizioni] Load Transizione By ID Failure',
  props<{ error: string }>()
);
