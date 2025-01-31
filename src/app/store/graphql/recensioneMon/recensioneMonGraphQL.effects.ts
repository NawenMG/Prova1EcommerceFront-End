import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecensioniService } from '../../../api/services/graphql/recensioneMonService/recensione-mon-graphql.service';
import * as RecensioniActions from './recensioneMonGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class RecensioniEffects {
  constructor(private actions$: Actions, private recensioniService: RecensioniService) {}

  loadRecensioni$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecensioniActions.loadRecensioni),
      mergeMap((action) =>
        this.recensioniService.getRecensioni(action.paramQuery, action.recensione, action.limit ?? 5, action.offset ?? 0).pipe(
          map((recensioni) => RecensioniActions.loadRecensioniSuccess({ recensioni })),
          catchError((error) => of(RecensioniActions.loadRecensioniFailure({ error: error.message })))
        )
      )
    )
  );
}
