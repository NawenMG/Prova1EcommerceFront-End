// store/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserSoapService } from '../../../api/services/soap/userRelService/user-rel-rest.service';
import * as UserActions from './userRelRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserSoapService) {}

  findUserByNomeUtente$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.findUserByNomeUtente),
      mergeMap((action) =>
        this.userService.findUserByNomeUtente(action.nomeUtente).pipe(
          map((user) => {
            if (user === null) {
              throw new Error('User not found');
            }
            return UserActions.findUserByNomeUtenteSuccess({ user });
          }),
          catchError((error) => of(UserActions.findUserByNomeUtenteFailure({ error: error.message })))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      mergeMap((action) =>
        this.userService.createUser(action.user).pipe(
          map((user) => {
            if (user === null) {
              throw new Error('User creation failed');
            }
            return UserActions.createUserSuccess({ user });
          }),
          catchError((error) => of(UserActions.createUserFailure({ error: error.message })))
        )
      )
    )
  );
}
