// store/pagamenti.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PagamentiGraphqlService } from '../../../api/services/graphql/pagamentoRelService/pagamento-rel-graphql.service';
import * as PagamentiActions from './pagamentoRelGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class PagamentiEffects {
  constructor(private actions$: Actions, private pagamentiService: PagamentiGraphqlService) {}

  loadPagamenti$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PagamentiActions.loadPagamenti),
      mergeMap((action) =>
        this.pagamentiService.getPagamenti(action.paramQuery, action.pagamenti).pipe(
          map((pagamenti) => PagamentiActions.loadPagamentiSuccess({ pagamenti })),
          catchError((error) => of(PagamentiActions.loadPagamentiFailure({ error: error.message })))
        )
      )
    )
  );
}
