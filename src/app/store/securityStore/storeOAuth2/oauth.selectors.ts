


import { createSelector, createFeatureSelector } from '@ngrx/store';
import { OAuthState } from './oauth.state';

export const selectOAuthState = createFeatureSelector<OAuthState>('oauth');

export const selectIsAuthenticatedOAuth = createSelector(
  selectOAuthState,
  state => state.authenticated
);

export const selectUserRoleOAuth = createSelector(
  selectOAuthState,
  state => state.role
);

export const selectUserIdOAuth = createSelector(
  selectOAuthState,
  state => state.userId
);

export const selectOAuthLoading = createSelector(
  selectOAuthState,
  state => state.loading
);

export const selectOAuthError = createSelector(
  selectOAuthState,
  state => state.error
);

