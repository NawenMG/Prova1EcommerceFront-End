// store/transizioni.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransizioniService } from '../../../api/services/graphql/transizioneCasService/transizione-cas-graphql.service';
import * as TransizioniActions from './transizioneCasGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TransizioniEffects {
  constructor(private actions$: Actions, private transizioniService: TransizioniService) {}

  loadTransizioni$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransizioniActions.loadTransizioni),
      mergeMap(() =>
        this.transizioniService.findAllTransizioni().pipe(
          map(transizioni => TransizioniActions.loadTransizioniSuccess({ transizioni })),
          catchError(error => of(TransizioniActions.loadTransizioniFailure({ error: error.message })))
        )
      )
    )
  );

  loadTransizioneById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransizioniActions.loadTransizioneById),
      mergeMap((action) =>
        this.transizioniService.findTransizioneById(action.id).pipe(
          map(transizione => transizione
            ? TransizioniActions.loadTransizioneByIdSuccess({ transizione })
            : TransizioniActions.loadTransizioneByIdFailure({ error: 'Transizione non trovata' })),
          catchError(error => of(TransizioniActions.loadTransizioneByIdFailure({ error: error.message })))
        )
      )
    )
  );
}
