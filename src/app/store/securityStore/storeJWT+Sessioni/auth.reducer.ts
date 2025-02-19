


import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.checkAuth, state => ({ ...state, loading: true })),
  on(AuthActions.checkAuthSuccess, (state, { authenticated, role }) => ({
    ...state,
    authenticated,
    role,
    loading: false,
    error: null
  })),
  on(AuthActions.checkAuthFailure, (state, { error }) => ({
    ...state,
    authenticated: false,
    role: 'GUEST',
    userId: '',
    loading: false,
    error
  })),
  on(AuthActions.loginSuccess, (state, { authenticated, role }) => ({
    ...state,
    authenticated,
    role,
    loading: false,
    error: null
  })),
  on(AuthActions.logoutSuccess, () => initialAuthState)
);
