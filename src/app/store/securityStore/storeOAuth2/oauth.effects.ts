import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as OAuthActions from './oauth.actions';
import { OAuth } from '../../../security/oauth2/oauth.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class OAuthEffects {
  constructor(private actions$: Actions, private oauthService: OAuth) {}

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OAuthActions.checkOAuth),
      mergeMap(() =>
        this.oauthService.checkAuthStatus().then(
          (response) => OAuthActions.checkOAuthSuccess({ authenticated: response.authenticated, role: response.role }),
          (error) => OAuthActions.checkOAuthFailure({ error: error.message })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OAuthActions.logoutOAuth),
      mergeMap(() =>
        this.oauthService.logout().then(
          () => OAuthActions.logoutOAuthSuccess(),
          (error) => OAuthActions.logoutOAuthFailure({ error: error.message })
        )
      )
    )
  );
}
