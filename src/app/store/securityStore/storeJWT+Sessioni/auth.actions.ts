import { createAction, props } from '@ngrx/store';

// Verifica autenticazione
export const checkAuth = createAction('[Auth] Check Auth');
export const checkAuthSuccess = createAction(
  '[Auth] Check Auth Success',
  props<{ authenticated: boolean; role: string }>()
);
export const checkAuthFailure = createAction(
  '[Auth] Check Auth Failure',
  props<{ error: string }>()
);

// Login
export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ authenticated: boolean; role: string; token: string }>()
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

// Logout
export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
);
