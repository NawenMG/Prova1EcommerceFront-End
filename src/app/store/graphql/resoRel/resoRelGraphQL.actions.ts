// store/resi.actions.ts
import { createAction, props } from '@ngrx/store';
import { Resi } from './resoRelGraphQL.state';

// Caricamento dei resi
export const loadResi = createAction(
  '[Resi] Load Resi',
  props<{ paramQuery: any; resi: Partial<Resi> }>()
);
export const loadResiSuccess = createAction(
  '[Resi] Load Resi Success',
  props<{ resi: Resi[] }>()
);
export const loadResiFailure = createAction(
  '[Resi] Load Resi Failure',
  props<{ error: string }>()
);
