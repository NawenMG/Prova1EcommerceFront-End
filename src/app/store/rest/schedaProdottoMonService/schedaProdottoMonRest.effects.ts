// store/schede-prodotti.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SchedeProdottiService } from '../../../api/services/rest/schedaProdottoMonService/scheda-prodotto-mon-rest.service';
import * as SchedeProdottiActions from './schedaProdottoMonRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class SchedeProdottiEffects {
  constructor(private actions$: Actions, private schedeProdottiService: SchedeProdottiService) {}

  loadSchedeProdottiByNome$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchedeProdottiActions.loadSchedeProdottiByNome),
      mergeMap((action) =>
        this.schedeProdottiService.getProdottiByNome(action.nome).pipe(
          map((schedeProdotti) => SchedeProdottiActions.loadSchedeProdottiByNomeSuccess({ schedeProdotti })),
          catchError((error) => of(SchedeProdottiActions.loadSchedeProdottiByNomeFailure({ error: error.message })))
        )
      )
    )
  );
}
