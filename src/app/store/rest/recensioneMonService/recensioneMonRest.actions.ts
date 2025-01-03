// store/recensioni.actions.ts
import { createAction, props } from '@ngrx/store';
import { Recensione } from './recensioneMonRest.state';

// Caricamento di tutte le recensioni per prodotto
export const loadRecensioniByProduct = createAction(
  '[Recensioni] Load Recensioni By Product',
  props<{ productId: string }>()
);

export const loadRecensioniByProductSuccess = createAction(
  '[Recensioni] Load Recensioni By Product Success',
  props<{ recensioni: Recensione[] }>()
);

export const loadRecensioniByProductFailure = createAction(
  '[Recensioni] Load Recensioni By Product Failure',
  props<{ error: string }>()
);

// Creazione di una recensione
export const createRecensione = createAction(
  '[Recensioni] Create Recensione',
  props<{ recensione: Recensione }>()
);

export const createRecensioneSuccess = createAction(
  '[Recensioni] Create Recensione Success',
  props<{ recensione: Recensione }>()
);

export const createRecensioneFailure = createAction(
  '[Recensioni] Create Recensione Failure',
  props<{ error: string }>()
);
