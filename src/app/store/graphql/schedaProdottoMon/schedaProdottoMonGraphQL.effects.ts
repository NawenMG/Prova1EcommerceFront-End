// store/schede-prodotti.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SchedeProdottiService } from '../../../api/services/graphql/schedaProdottoMonService/scheda-prodotto-mon-graphql.service';
import * as SchedeProdottiActions from './schedaProdottoMonGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class SchedeProdottiEffects {
  constructor(private actions$: Actions, private schedeProdottiService: SchedeProdottiService) {}

  loadSchedeProdotti$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchedeProdottiActions.loadSchedeProdotti),
      mergeMap((action) =>
        this.schedeProdottiService.getSchedeProdotti(action.paramQuery, action.schedeProdotti).pipe(
          map((schedeProdotti) => SchedeProdottiActions.loadSchedeProdottiSuccess({ schedeProdotti })),
          catchError((error) => of(SchedeProdottiActions.loadSchedeProdottiFailure({ error: error.message })))
        )
      )
    )
  );
}
