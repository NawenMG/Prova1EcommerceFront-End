// store/cronologia.actions.ts
import { createAction, props } from '@ngrx/store';
import { Cronologia, Prodotto } from './cronologiaAraRest.state';

// Aggiungi prodotti alla cronologia
export const aggiungiProdotti = createAction(
  '[Cronologia] Aggiungi Prodotti',
  props<{ userId: string; prodotti: Prodotto[] }>()
);

export const aggiungiProdottiSuccess = createAction('[Cronologia] Aggiungi Prodotti Success');
export const aggiungiProdottiFailure = createAction(
  '[Cronologia] Aggiungi Prodotti Failure',
  props<{ error: string }>()
);

// Carica cronologia utente
export const loadCronologia = createAction(
  '[Cronologia] Load Cronologia',
  props<{ userId: string }>()
);

export const loadCronologiaSuccess = createAction(
  '[Cronologia] Load Cronologia Success',
  props<{ cronologia: Cronologia }>()
);

export const loadCronologiaFailure = createAction(
  '[Cronologia] Load Cronologia Failure',
  props<{ error: string }>()
);

// Elimina prodotto dalla cronologia
export const eliminaSingolaRicerca = createAction(
  '[Cronologia] Elimina Singola Ricerca',
  props<{ userId: string; productId: string }>()
);

export const eliminaSingolaRicercaSuccess = createAction('[Cronologia] Elimina Singola Ricerca Success');
export const eliminaSingolaRicercaFailure = createAction(
  '[Cronologia] Elimina Singola Ricerca Failure',
  props<{ error: string }>()
);

// Elimina tutta la cronologia
export const eliminaTutteLeRicerche = createAction(
  '[Cronologia] Elimina Tutte Le Ricerche',
  props<{ userId: string }>()
);

export const eliminaTutteLeRicercheSuccess = createAction('[Cronologia] Elimina Tutte Le Ricerche Success');
export const eliminaTutteLeRicercheFailure = createAction(
  '[Cronologia] Elimina Tutte Le Ricerche Failure',
  props<{ error: string }>()
);
