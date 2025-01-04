// store/cronologia.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CronologiaService } from '../../../api/services/rest/cronologiaAraService/cronologia-ara-rest.service';
import * as CronologiaActions from './cronologiaAraRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CronologiaEffects {
  constructor(private actions$: Actions, private cronologiaService: CronologiaService) {}

  loadCronologia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CronologiaActions.loadCronologia),
      mergeMap((action) =>
        this.cronologiaService.visualizzaCronologia(action.userId).pipe(
          map((cronologia) => {
            if (cronologia === null) {
              throw new Error('Cronologia is null');
            }
            return CronologiaActions.loadCronologiaSuccess({ cronologia });
          }),
          catchError((error) => of(CronologiaActions.loadCronologiaFailure({ error: error.message })))
        )
      )
    )
  );
}
