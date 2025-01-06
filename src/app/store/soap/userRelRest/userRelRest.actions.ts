// store/user.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from './userRelRest.state';

// Trova un utente per nome utente
export const findUserByNomeUtente = createAction(
  '[User] Find User By NomeUtente',
  props<{ nomeUtente: string }>()
);

export const findUserByNomeUtenteSuccess = createAction(
  '[User] Find User By NomeUtente Success',
  props<{ user: User }>()
);

export const findUserByNomeUtenteFailure = createAction(
  '[User] Find User By NomeUtente Failure',
  props<{ error: string }>()
);

// Creazione di un nuovo utente
export const createUser = createAction(
  '[User] Create User',
  props<{ user: User }>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{ user: User }>()
);

export const createUserFailure = createAction(
  '[User] Create User Failure',
  props<{ error: string }>()
);
