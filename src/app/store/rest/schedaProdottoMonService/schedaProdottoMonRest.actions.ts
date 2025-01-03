// store/schede-prodotti.actions.ts
import { createAction, props } from '@ngrx/store';
import { SchedaProdotto } from './schedaProdottoMonRest.state';

// Caricare prodotti per nome
export const loadSchedeProdottiByNome = createAction(
  '[SchedeProdotti] Load SchedeProdotti By Nome',
  props<{ nome: string }>()
);

export const loadSchedeProdottiByNomeSuccess = createAction(
  '[SchedeProdotti] Load SchedeProdotti By Nome Success',
  props<{ schedeProdotti: SchedaProdotto[] }>()
);

export const loadSchedeProdottiByNomeFailure = createAction(
  '[SchedeProdotti] Load SchedeProdotti By Nome Failure',
  props<{ error: string }>()
);

// Creazione di un prodotto
export const createSchedaProdotto = createAction(
  '[SchedeProdotti] Create SchedaProdotto',
  props<{ prodotto: SchedaProdotto }>()
);

export const createSchedaProdottoSuccess = createAction(
  '[SchedeProdotti] Create SchedaProdotto Success',
  props<{ prodotto: SchedaProdotto }>()
);

export const createSchedaProdottoFailure = createAction(
  '[SchedeProdotti] Create SchedaProdotto Failure',
  props<{ error: string }>()
);
