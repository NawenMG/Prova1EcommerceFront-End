import { createReducer, on } from '@ngrx/store';
import * as OAuthActions from './oauth.actions';
import { OAuthState, initialOAuthState } from './oauth.state';

export const oauthReducer = createReducer(
  initialOAuthState,
  on(OAuthActions.checkOAuth, (state) => ({ ...state, loading: true })),
  on(OAuthActions.checkOAuthSuccess, (state, { authenticated, role }) => ({
    ...state,
    authenticated,
    role,
    loading: false,
    error: null
  })),
  on(OAuthActions.checkOAuthFailure, (state, { error }) => ({
    ...state,
    authenticated: false,
    role: 'GUEST',
    loading: false,
    error
  })),
  on(OAuthActions.logoutOAuthSuccess, () => initialOAuthState)
);
