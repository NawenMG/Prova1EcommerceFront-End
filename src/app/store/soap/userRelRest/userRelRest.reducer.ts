// store/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './userRelRest.actions';
import { UserState, initialState } from './userRelRest.state';

export const userReducer = createReducer(
  initialState,
  on(UserActions.findUserByNomeUtente, (state) => ({ ...state, loading: true })),
  on(UserActions.findUserByNomeUtenteSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null
  })),
  on(UserActions.findUserByNomeUtenteFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(UserActions.createUser, (state) => ({ ...state, loading: true })),
  on(UserActions.createUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null
  })),
  on(UserActions.createUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
