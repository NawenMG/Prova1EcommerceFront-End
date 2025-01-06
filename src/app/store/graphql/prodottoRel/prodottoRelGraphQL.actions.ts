// store/prodotti.actions.ts
import { createAction, props } from '@ngrx/store';
import { Prodotti } from './prodottoRelGraphQL.state';

// Caricamento dei prodotti
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
