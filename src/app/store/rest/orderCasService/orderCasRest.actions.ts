// store/ordini.actions.ts
import { createAction, props } from '@ngrx/store';
import { Ordine } from './orderCasRest.state';

// Caricare tutti gli ordini
export const loadOrdini = createAction('[Ordini] Load Ordini');
export const loadOrdiniSuccess = createAction('[Ordini] Load Ordini Success', props<{ ordini: Ordine[] }>());
export const loadOrdiniFailure = createAction('[Ordini] Load Ordini Failure', props<{ error: string }>());

// Caricare un ordine per ID
export const loadOrdineById = createAction('[Ordini] Load Ordine By ID', props<{ id: string }>());
export const loadOrdineByIdSuccess = createAction('[Ordini] Load Ordine By ID Success', props<{ ordine: Ordine }>());
export const loadOrdineByIdFailure = createAction('[Ordini] Load Ordine By ID Failure', props<{ error: string }>());

// Creare un ordine
export const createOrdine = createAction('[Ordini] Create Ordine', props<{ ordine: Ordine }>());
export const createOrdineSuccess = createAction('[Ordini] Create Ordine Success');
export const createOrdineFailure = createAction('[Ordini] Create Ordine Failure', props<{ error: string }>());

// Eliminare un ordine
export const deleteOrdine = createAction('[Ordini] Delete Ordine', props<{ id: string }>());
export const deleteOrdineSuccess = createAction('[Ordini] Delete Ordine Success');
export const deleteOrdineFailure = createAction('[Ordini] Delete Ordine Failure', props<{ error: string }>());
