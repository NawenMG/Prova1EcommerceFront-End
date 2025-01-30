import { createAction, props } from '@ngrx/store';

export const checkOAuth = createAction('[OAuth] Check Auth');
export const checkOAuthSuccess = createAction(
  '[OAuth] Check Auth Success',
  props<{ authenticated: boolean; role: string }>()
);
export const checkOAuthFailure = createAction(
  '[OAuth] Check Auth Failure',
  props<{ error: string }>()
);

export const logoutOAuth = createAction('[OAuth] Logout');
export const logoutOAuthSuccess = createAction('[OAuth] Logout Success');
export const logoutOAuthFailure = createAction(
  '[OAuth] Logout Failure',
  props<{ error: string }>()
);
