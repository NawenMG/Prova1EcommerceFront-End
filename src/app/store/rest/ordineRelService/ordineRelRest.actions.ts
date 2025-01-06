// store/ordini.actions.ts
import { createAction, props } from '@ngrx/store';
import { Ordini, Pagamenti } from './ordineRelRest.state';

// Caricamento degli ordini
export const loadOrdini = createAction(
  '[Ordini] Load Ordini',
  props<{ paramQuery: any; ordini: Partial<Ordini> }>()
);

export const loadOrdiniSuccess = createAction(
  '[Ordini] Load Ordini Success',
  props<{ ordini: Ordini[] }>()
);

export const loadOrdiniFailure = createAction(
  '[Ordini] Load Ordini Failure',
  props<{ error: string }>()
);

// Inserimento di un ordine
export const inserisciOrdine = createAction(
  '[Ordini] Inserisci Ordine',
  props<{ pagamenti: Pagamenti; ordini: Ordini }>()
);

export const inserisciOrdineSuccess = createAction('[Ordini] Inserisci Ordine Success');

export const inserisciOrdineFailure = createAction(
  '[Ordini] Inserisci Ordine Failure',
  props<{ error: string }>()
);
