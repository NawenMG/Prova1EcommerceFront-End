// store/pagamenti.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PagamentiRestService } from '../../../api/services/rest/pagamentoRelService/pagamento-rel-rest.service';
import * as PagamentiActions from './pagamentoRelRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class PagamentiEffects {
  constructor(private actions$: Actions, private pagamentiService: PagamentiRestService) {}

  loadPagamenti$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PagamentiActions.loadPagamenti),
      mergeMap((action) =>
        this.pagamentiService.queryPagamenti(action.paramQuery, action.pagamenti).pipe(
          map((pagamenti) => PagamentiActions.loadPagamentiSuccess({ pagamenti })),
          catchError((error) => of(PagamentiActions.loadPagamentiFailure({ error: error.message })))
        )
      )
    )
  );

  inserisciPagamento$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PagamentiActions.inserisciPagamento),
      mergeMap((action) =>
        this.pagamentiService.inserisciPagamento(action.pagamenti).pipe(
          map(() => PagamentiActions.inserisciPagamentoSuccess()),
          catchError((error) => of(PagamentiActions.inserisciPagamentoFailure({ error: error.message })))
        )
      )
    )
  );
}
