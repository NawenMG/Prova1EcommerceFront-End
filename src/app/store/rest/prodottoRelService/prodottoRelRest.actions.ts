// store/prodotti.actions.ts
import { createAction, props } from '@ngrx/store';
import { Prodotti } from './prodottoRelRest.state';

// Caricamento prodotti
export const loadProdotti = createAction(
  '[Prodotti] Load Prodotti',
  props<{ paramQuery: any; prodotti: Partial<Prodotti> }>()
);
export const loadProdottiSuccess = createAction(
  '[Prodotti] Load Prodotti Success',
  props<{ prodotti: Prodotti[] }>()
);
export const loadProdottiFailure = createAction(
  '[Prodotti] Load Prodotti Failure',
  props<{ error: string }>()
);

// Inserimento prodotto
export const inserisciProdotto = createAction(
  '[Prodotti] Inserisci Prodotto',
  props<{ prodotto: Prodotti }>()
);
export const inserisciProdottoSuccess = createAction('[Prodotti] Inserisci Prodotto Success');
export const inserisciProdottoFailure = createAction(
  '[Prodotti] Inserisci Prodotto Failure',
  props<{ error: string }>()
);

// Aggiornamento prodotto
export const aggiornaProdotto = createAction(
  '[Prodotti] Aggiorna Prodotto',
  props<{ productId: string; prodotto: Prodotti }>()
);
export const aggiornaProdottoSuccess = createAction('[Prodotti] Aggiorna Prodotto Success');
export const aggiornaProdottoFailure = createAction(
  '[Prodotti] Aggiorna Prodotto Failure',
  props<{ error: string }>()
);

// Eliminazione prodotto
export const eliminaProdotto = createAction(
  '[Prodotti] Elimina Prodotto',
  props<{ productId: string }>()
);
export const eliminaProdottoSuccess = createAction('[Prodotti] Elimina Prodotto Success');
export const eliminaProdottoFailure = createAction(
  '[Prodotti] Elimina Prodotto Failure',
  props<{ error: string }>()
);
