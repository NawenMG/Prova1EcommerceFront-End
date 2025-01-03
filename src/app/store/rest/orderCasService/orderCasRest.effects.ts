// store/ordini.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdiniService } from '../../../api/services/rest/orderCasService/order-cas-rest.service';
import * as OrdiniActions from './orderCasRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class OrdiniEffects {
  constructor(private actions$: Actions, private ordiniService: OrdiniService) {}

  loadOrdini$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdiniActions.loadOrdini),
      mergeMap(() =>
        this.ordiniService.getAllOrdini().pipe(
          map((ordini) => OrdiniActions.loadOrdiniSuccess({ ordini })),
          catchError((error) => of(OrdiniActions.loadOrdiniFailure({ error: error.message })))
        )
      )
    )
  );
}
