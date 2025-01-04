// store/shipping-status.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShippingStatusWebSocketService } from '../../../api/services/webSocket/shippingStatusFireService/shipping-status-fire-ws.service';
import * as ShippingStatusActions from './shippingStatusFireWS.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ShippingStatusEffects {
  constructor(private actions$: Actions, private shippingStatusService: ShippingStatusWebSocketService) {}

  createShippingStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShippingStatusActions.createShippingStatus),
      mergeMap((action) =>
        this.shippingStatusService.createShippingStatus(action.shippingStatus).pipe(
          map(() => ShippingStatusActions.createShippingStatusSuccess()),
          catchError((error) => of(ShippingStatusActions.createShippingStatusFailure({ error: error.message })))
        )
      )
    )
  );
}
