// store/segnalazioni.actions.ts
import { createAction, props } from '@ngrx/store';
import { Segnalazione } from './segnalazioneCasRest.state';

// Azioni per il caricamento di tutte le segnalazioni
export const loadSegnalazioni = createAction('[Segnalazioni] Load Segnalazioni');
export const loadSegnalazioniSuccess = createAction('[Segnalazioni] Load Segnalazioni Success', props<{ segnalazioni: Segnalazione[] }>());
export const loadSegnalazioniFailure = createAction('[Segnalazioni] Load Segnalazioni Failure', props<{ error: string }>());

// Azioni per il caricamento di una singola segnalazione per ID
export const loadSegnalazioneById = createAction('[Segnalazioni] Load Segnalazione By ID', props<{ id: string }>());
export const loadSegnalazioneByIdSuccess = createAction('[Segnalazioni] Load Segnalazione By ID Success', props<{ segnalazione: Segnalazione }>());
export const loadSegnalazioneByIdFailure = createAction('[Segnalazioni] Load Segnalazione By ID Failure', props<{ error: string }>());
