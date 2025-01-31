
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { AuthService } from '../../../security/jwt+sessioni/auth.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkAuth),
      mergeMap(() =>
        this.authService.checkAuthStatus().then(
          response => AuthActions.checkAuthSuccess({ authenticated: response.authenticated, role: response.role }),
          error => AuthActions.checkAuthFailure({ error: error.message })
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(action =>
        this.authService.login({ username: action.username, password: action.password }).then(
          response => response
            ? AuthActions.loginSuccess({ authenticated: true, role: response.role, token: response.token })
            : AuthActions.loginFailure({ error: 'Null response' }),
          error => AuthActions.loginFailure({ error: error.message })
        )
      )
    )
  );

  verify2FA$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.verify2FA),
      mergeMap(action =>
        this.authService.verify2FA(action.username, action.code).then(
          response => response
            ? AuthActions.verify2FASuccess({ authenticated: true, role: response.role, token: response.token })
            : AuthActions.verify2FAFailure({ error: 'Invalid code' }),
          error => AuthActions.verify2FAFailure({ error: error.message })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      mergeMap(() =>
        this.authService.logout().then(
          () => AuthActions.logoutSuccess(),
          error => AuthActions.logoutFailure({ error: error.message })
        )
      )
    )
  );
}
