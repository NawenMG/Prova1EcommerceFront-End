


import { createAction, props } from '@ngrx/store';

// ✅ Controllo autenticazione
export const checkOAuth = createAction('[OAuth] Check Auth');
export const checkOAuthSuccess = createAction(
  '[OAuth] Check Auth Success',
  props<{ authenticated: boolean; role: string; }>()
);
export const checkOAuthFailure = createAction(
  '[OAuth] Check Auth Failure',
  props<{ error: string }>()
);

// ✅ Login OAuth2
export const loginOAuth = createAction('[OAuth] Login');
export const loginOAuthSuccess = createAction(
  '[OAuth] Login Success',
  props<{ authenticated: boolean; role: string; token: string }>()
);
export const loginOAuthFailure = createAction(
  '[OAuth] Login Failure',
  props<{ error: string }>()
);

// ✅ Logout OAuth2
export const logoutOAuth = createAction('[OAuth] Logout');
export const logoutOAuthSuccess = createAction('[OAuth] Logout Success');
export const logoutOAuthFailure = createAction(
  '[OAuth] Logout Failure',
  props<{ error: string }>()
);

// ✅ Registrazione OAuth2
export const registerOAuth = createAction(
  '[OAuth] Register',
  props<{ username: string; password: string; roles: string[] }>()
);
export const registerOAuthSuccess = createAction('[OAuth] Register Success');
export const registerOAuthFailure = createAction(
  '[OAuth] Register Failure',
  props<{ error: string }>()
);

