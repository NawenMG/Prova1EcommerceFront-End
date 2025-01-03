// store/schede-prodotti.actions.ts
import { createAction, props } from '@ngrx/store';
import { SchedaProdotto } from './schedaProdottoMonGraphQL.state';

// Caricamento di tutte le schede prodotto
export const loadSchedeProdotti = createAction(
  '[SchedeProdotti] Load SchedeProdotti',
  props<{ paramQuery: any; schedeProdotti: any }>()
);

export const loadSchedeProdottiSuccess = createAction(
  '[SchedeProdotti] Load SchedeProdotti Success',
  props<{ schedeProdotti: SchedaProdotto[] }>()
);

export const loadSchedeProdottiFailure = createAction(
  '[SchedeProdotti] Load SchedeProdotti Failure',
  props<{ error: string }>()
);
