


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as OAuthActions from './oauth.actions';
import { OAuthService } from '../../../security/oauth2/oauth.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class OAuthEffects {
  constructor(private actions$: Actions, private oauthService: OAuthService) {}

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OAuthActions.checkOAuth),
      mergeMap(() =>
        this.oauthService.checkAuthStatus().then(
          response => OAuthActions.checkOAuthSuccess({ authenticated: response.authenticated, role: response.role }),
          error => OAuthActions.checkOAuthFailure({ error: error.message })
        )
      )
    )
  );

  loginOAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OAuthActions.loginOAuth),
      mergeMap(() =>
        this.oauthService.handleOAuth2Success().then(
          response => response
            ? OAuthActions.loginOAuthSuccess({ authenticated: true, role: response.role,  token: response.token })
            : OAuthActions.loginOAuthFailure({ error: 'OAuth2 login failed' }),
          error => OAuthActions.loginOAuthFailure({ error: error.message })
        )
      )
    )
  );

  logoutOAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OAuthActions.logoutOAuth),
      mergeMap(() =>
        this.oauthService.logout().then(
          () => OAuthActions.logoutOAuthSuccess(),
          error => OAuthActions.logoutOAuthFailure({ error: error.message })
        )
      )
    )
  );

  registerOAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OAuthActions.registerOAuth),
      mergeMap(action =>
        this.oauthService.register({ username: action.username, password: action.password, roles: action.roles }).then(
          success => success
            ? OAuthActions.registerOAuthSuccess()
            : OAuthActions.registerOAuthFailure({ error: 'Registrazione OAuth2 fallita' }),
          error => OAuthActions.registerOAuthFailure({ error: error.message })
        )
      )
    )
  );
}
