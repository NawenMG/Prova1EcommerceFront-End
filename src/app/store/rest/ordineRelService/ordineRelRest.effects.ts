// store/ordini.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdiniRestService } from '../../../api/services/rest/ordineRelService/ordine-rel-rest.service';
import * as OrdiniActions from './ordineRelRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class OrdiniEffects {
  constructor(private actions$: Actions, private ordiniService: OrdiniRestService) {}

  loadOrdini$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdiniActions.loadOrdini),
      mergeMap((action) =>
        this.ordiniService.queryOrdini(action.paramQuery, action.ordini).pipe(
          map((ordini) => OrdiniActions.loadOrdiniSuccess({ ordini })),
          catchError((error) => of(OrdiniActions.loadOrdiniFailure({ error: error.message })))
        )
      )
    )
  );

  inserisciOrdine$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdiniActions.inserisciOrdine),
      mergeMap((action) =>
        this.ordiniService.inserisciOrdine(action.pagamenti, action.ordini).pipe(
          map(() => OrdiniActions.inserisciOrdineSuccess()),
          catchError((error) => of(OrdiniActions.inserisciOrdineFailure({ error: error.message })))
        )
      )
    )
  );
}
