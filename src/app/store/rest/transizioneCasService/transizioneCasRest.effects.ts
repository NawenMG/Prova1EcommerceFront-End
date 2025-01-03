// store/transizioni.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransizioniService } from '../../../api/services/rest/transizioneCasService/transizione-cas-rest.service';
import * as TransizioniActions from './transizioneCasRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TransizioniEffects {
  constructor(private actions$: Actions, private transizioniService: TransizioniService) {}

  loadTransizioni$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransizioniActions.loadTransizioni),
      mergeMap(() =>
        this.transizioniService.getAllTransizioni().pipe(
          map((transizioni) => TransizioniActions.loadTransizioniSuccess({ transizioni })),
          catchError((error) => of(TransizioniActions.loadTransizioniFailure({ error: error.message })))
        )
      )
    )
  );
}
