
import { createAction, props } from '@ngrx/store';

// ✅ Controllo autenticazione
export const checkAuth = createAction('[Auth] Check Auth');
export const checkAuthSuccess = createAction(
  '[Auth] Check Auth Success',
  props<{ authenticated: boolean; role: string;  }>()
);
export const checkAuthFailure = createAction(
  '[Auth] Check Auth Failure',
  props<{ error: string }>()
);

// ✅ Login
export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ authenticated: boolean; role: string;  token: string }>()
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

// ✅ Verifica 2FA
export const verify2FA = createAction(
  '[Auth] Verify 2FA',
  props<{ username: string; code: string }>()
);
export const verify2FASuccess = createAction(
  '[Auth] Verify 2FA Success',
  props<{ authenticated: boolean; role: string;  token: string }>()
);
export const verify2FAFailure = createAction(
  '[Auth] Verify 2FA Failure',
  props<{ error: string }>()
);

// ✅ Logout
export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
);

// ✅ Registrazione
export const register = createAction(
  '[Auth] Register',
  props<{
    nome: string;
    cognome: string;
    username: string;
    password: string;
    email: string;
    roles: string[];
    twoFactorEnabled: boolean;
    immagine?: Blob;
  }>()
);
export const registerSuccess = createAction('[Auth] Register Success');
export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);

// ✅ Recupero password
export const forgotPassword = createAction(
  '[Auth] Forgot Password',
  props<{ email: string }>()
);
export const forgotPasswordSuccess = createAction('[Auth] Forgot Password Success');
export const forgotPasswordFailure = createAction(
  '[Auth] Forgot Password Failure',
  props<{ error: string }>()
);

// ✅ Reset password
export const resetPassword = createAction(
  '[Auth] Reset Password',
  props<{ token: string; newPassword: string }>()
);
export const resetPasswordSuccess = createAction('[Auth] Reset Password Success');
export const resetPasswordFailure = createAction(
  '[Auth] Reset Password Failure',
  props<{ error: string }>()
);
