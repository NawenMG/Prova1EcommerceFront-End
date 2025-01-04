// store/setting-site.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SettingSiteService } from '../../../api/services/rest/settingSiteAraService/setting-site-ara-rest.service';
import * as SettingSiteActions from './settingSiteAraRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class SettingSiteEffects {
  constructor(private actions$: Actions, private settingSiteService: SettingSiteService) {}

  loadImpostazioni$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingSiteActions.loadImpostazioni),
      mergeMap((action) =>
        this.settingSiteService.getImpostazioni(action.userId).pipe(
          map((settings) => {
            if (settings === null) {
              throw new Error('Settings is null');
            }
            return SettingSiteActions.loadImpostazioniSuccess({ settings });
          }),
          catchError((error) => of(SettingSiteActions.loadImpostazioniFailure({ error: error.message })))
        )
      )
    )
  );
}
