// store/transizioni.actions.ts
import { createAction, props } from '@ngrx/store';
import { Transizione } from './transizioneCasRest.state';

// Azioni per il caricamento di tutte le transizioni
export const loadTransizioni = createAction('[Transizioni] Load Transizioni');
export const loadTransizioniSuccess = createAction('[Transizioni] Load Transizioni Success', props<{ transizioni: Transizione[] }>());
export const loadTransizioniFailure = createAction('[Transizioni] Load Transizioni Failure', props<{ error: string }>());

// Azioni per il caricamento di una singola transizione per ID
export const loadTransizioneById = createAction('[Transizioni] Load Transizione By ID', props<{ id: string }>());
export const loadTransizioneByIdSuccess = createAction('[Transizioni] Load Transizione By ID Success', props<{ transizione: Transizione }>());
export const loadTransizioneByIdFailure = createAction('[Transizioni] Load Transizione By ID Failure', props<{ error: string }>());

// Azioni per creare una nuova transizione
export const createTransizione = createAction('[Transizioni] Create Transizione', props<{ transizione: Transizione }>());
export const createTransizioneSuccess = createAction('[Transizioni] Create Transizione Success');
export const createTransizioneFailure = createAction('[Transizioni] Create Transizione Failure', props<{ error: string }>());
