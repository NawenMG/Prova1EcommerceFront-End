// store/ordini.actions.ts
import { createAction, props } from '@ngrx/store';
import { Ordini } from './ordineRelGraphQL.state';

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
