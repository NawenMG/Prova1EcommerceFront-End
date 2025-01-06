// store/resi.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ResiRestService } from '../../../api/services/rest/resoRelService/reso-rel-rest.service';
import * as ResiActions from './resoRelRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ResiEffects {
  constructor(private actions$: Actions, private resiService: ResiRestService) {}

  loadResi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ResiActions.loadResi),
      mergeMap((action) =>
        this.resiService.queryResi(action.paramQuery, action.reso).pipe(
          map((resi) => ResiActions.loadResiSuccess({ resi })),
          catchError((error) => of(ResiActions.loadResiFailure({ error: error.message })))
        )
      )
    )
  );

  inserisciReso$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ResiActions.inserisciReso),
      mergeMap((action) =>
        this.resiService.inserisciReso(action.reso).pipe(
          map(() => ResiActions.inserisciResoSuccess()),
          catchError((error) => of(ResiActions.inserisciResoFailure({ error: error.message })))
        )
      )
    )
  );
}
