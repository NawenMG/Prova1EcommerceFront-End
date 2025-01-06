// store/pagamenti.actions.ts
import { createAction, props } from '@ngrx/store';
import { Pagamenti } from './pagamentoRelRest.state';

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

// Inserimento di un nuovo pagamento
export const inserisciPagamento = createAction(
  '[Pagamenti] Inserisci Pagamento',
  props<{ pagamenti: Pagamenti }>()
);
export const inserisciPagamentoSuccess = createAction('[Pagamenti] Inserisci Pagamento Success');
export const inserisciPagamentoFailure = createAction(
  '[Pagamenti] Inserisci Pagamento Failure',
  props<{ error: string }>()
);
