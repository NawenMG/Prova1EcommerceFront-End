// store/carrello.actions.ts
import { createAction, props } from '@ngrx/store';
import { Prodotto, Carrello } from './carrelloAraRest.state';

// Aggiunta di prodotti al carrello
export const aggiungiProdotti = createAction(
  '[Carrello] Aggiungi Prodotti',
  props<{ userId: string; prodotti: Prodotto[] }>()
);
export const aggiungiProdottiSuccess = createAction('[Carrello] Aggiungi Prodotti Success');
export const aggiungiProdottiFailure = createAction(
  '[Carrello] Aggiungi Prodotti Failure',
  props<{ error: string }>()
);

// Caricamento del carrello
export const loadCarrello = createAction(
  '[Carrello] Load Carrello',
  props<{ userId: string }>()
);
export const loadCarrelloSuccess = createAction(
  '[Carrello] Load Carrello Success',
  props<{ carrello: Carrello }>()
);
export const loadCarrelloFailure = createAction(
  '[Carrello] Load Carrello Failure',
  props<{ error: string }>()
);

// Rimozione prodotto dal carrello
export const rimuoviProdotto = createAction(
  '[Carrello] Rimuovi Prodotto',
  props<{ userId: string; prodottoId: string }>()
);
export const rimuoviProdottoSuccess = createAction('[Carrello] Rimuovi Prodotto Success');
export const rimuoviProdottoFailure = createAction(
  '[Carrello] Rimuovi Prodotto Failure',
  props<{ error: string }>()
);

// Svuotamento del carrello
export const svuotaCarrello = createAction(
  '[Carrello] Svuota Carrello',
  props<{ userId: string }>()
);
export const svuotaCarrelloSuccess = createAction('[Carrello] Svuota Carrello Success');
export const svuotaCarrelloFailure = createAction(
  '[Carrello] Svuota Carrello Failure',
  props<{ error: string }>()
);
