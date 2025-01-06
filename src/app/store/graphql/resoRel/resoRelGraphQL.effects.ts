// store/resi.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ResiGraphqlService } from '../../../api/services/graphql/resoRelService/reso-rel-graphql.service';
import * as ResiActions from './resoRelGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ResiEffects {
  constructor(private actions$: Actions, private resiService: ResiGraphqlService) {}

  loadResi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ResiActions.loadResi),
      mergeMap((action) =>
        this.resiService.getResi(action.paramQuery, action.resi).pipe(
          map((resi) => ResiActions.loadResiSuccess({ resi })),
          catchError((error) => of(ResiActions.loadResiFailure({ error: error.message })))
        )
      )
    )
  );
}
