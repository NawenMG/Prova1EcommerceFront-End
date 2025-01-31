/* import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

// ✅ Seleziona lo stato di autenticazione
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.authenticated
);

// ✅ Seleziona il ruolo dell'utente
export const selectUserRole = createSelector(
  selectAuthState,
  (state) => state.role
);

// ✅ Seleziona lo userId dell'utente
export const selectUserId = createSelector(
  selectAuthState,
  (state) => state.userId
);

// ✅ Seleziona lo stato di caricamento
export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

// ✅ Seleziona eventuali errori di autenticazione
export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);
 */


import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  state => state.authenticated
);

export const selectUserRole = createSelector(
  selectAuthState,
  state => state.role
);

/* export const selectUserId = createSelector(
  selectAuthState,
  state => state.userId
);
 */
export const selectAuthLoading = createSelector(
  selectAuthState,
  state => state.loading
);

export const selectAuthError = createSelector(
  selectAuthState,
  state => state.error
);
