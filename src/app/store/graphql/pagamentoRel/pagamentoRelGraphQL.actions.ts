// store/pagamenti.actions.ts
import { createAction, props } from '@ngrx/store';
import { Pagamenti } from './pagamentoRelGraphQL.state';

// Caricamento dei pagamenti
export const loadPagamenti = createAction(
  '[Pagamenti] Load Pagamenti',
  props<{ paramQuery: any; pagamenti: Partial<Pagamenti> }>()
);
export const loadPagamentiSuccess = createAction(
  '[Pagamenti] Load Pagamenti Success',
  props<{ pagamenti: Pagamenti[] }>()
);
export const loadPagamentiFailure = createAction(
  '[Pagamenti] Load Pagamenti Failure',
  props<{ error: string }>()
);
