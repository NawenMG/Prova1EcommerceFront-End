// store/recensioni.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecensioniService } from '../../../api/services/rest/recensioneMonService/recesione-mon-rest.service';
import * as RecensioniActions from './recensioneMonRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class RecensioniEffects {
  constructor(private actions$: Actions, private recensioniService: RecensioniService) {}

  loadRecensioniByProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecensioniActions.loadRecensioniByProduct),
      mergeMap((action) =>
        this.recensioniService.getRecensioniByProductId(action.productId).pipe(
          map((recensioni) => RecensioniActions.loadRecensioniByProductSuccess({ recensioni })),
          catchError((error) => of(RecensioniActions.loadRecensioniByProductFailure({ error: error.message })))
        )
      )
    )
  );
}
