import { createAction, props } from '@ngrx/store';
import { Prodotti } from './prodottoRelGraphQL.state';

// Caricamento dei prodotti con limit e offset per la paginazione
export const loadProdotti = createAction(
  '[Prodotti] Load Prodotti',
  props<{ paramQuery: any; prodotti: Partial<Prodotti>; limit: number; offset: number }>()
);

export const loadProdottiSuccess = createAction(
  '[Prodotti] Load Prodotti Success',
  props<{ prodotti: Prodotti[] }>()
);

export const loadProdottiFailure = createAction(
  '[Prodotti] Load Prodotti Failure',
  props<{ error: string }>()
);
