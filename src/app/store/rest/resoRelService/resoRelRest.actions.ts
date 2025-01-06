// store/resi.actions.ts
import { createAction, props } from '@ngrx/store';
import { Reso } from './resoRelRest.state';

// Caricare resi
export const loadResi = createAction(
  '[Resi] Load Resi',
  props<{ paramQuery: any; reso: Partial<Reso> }>()
);

export const loadResiSuccess = createAction(
  '[Resi] Load Resi Success',
  props<{ resi: Reso[] }>()
);

export const loadResiFailure = createAction(
  '[Resi] Load Resi Failure',
  props<{ error: string }>()
);

// Inserire un reso
export const inserisciReso = createAction(
  '[Resi] Inserisci Reso',
  props<{ reso: Reso }>()
);

export const inserisciResoSuccess = createAction('[Resi] Inserisci Reso Success');

export const inserisciResoFailure = createAction(
  '[Resi] Inserisci Reso Failure',
  props<{ error: string }>()
);
