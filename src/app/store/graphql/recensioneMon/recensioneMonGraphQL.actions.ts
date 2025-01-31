import { createAction, props } from '@ngrx/store';
import { Recensione } from './recensioneMonGraphQL.state';

// ✅ Caricamento di tutte le recensioni con paginazione
export const loadRecensioni = createAction(
  '[Recensioni] Load Recensioni',
  props<{ paramQuery: any; recensione: any; limit?: number; offset?: number }>() // ✅ Aggiunti limit e offset opzionali
);

export const loadRecensioniSuccess = createAction(
  '[Recensioni] Load Recensioni Success',
  props<{ recensioni: Recensione[] }>()
);

export const loadRecensioniFailure = createAction(
  '[Recensioni] Load Recensioni Failure',
  props<{ error: string }>()
);
