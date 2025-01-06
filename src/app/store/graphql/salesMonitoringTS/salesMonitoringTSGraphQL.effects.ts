// store/sales-monitoring.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SalesMonitoringService } from '../../../api/services/graphql/salesMonitoringTSService/sales-monitoring-tsgraphql.service';
import * as SalesMonitoringActions from './salesMonitoringTSGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class SalesMonitoringEffects {
  constructor(private actions$: Actions, private salesService: SalesMonitoringService) {}

  loadSalesByTimeRange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesMonitoringActions.loadSalesByTimeRange),
      mergeMap((action) =>
        this.salesService.findSalesByTimeRange(action.startTime, action.endTime).pipe(
          map((sales) => SalesMonitoringActions.loadSalesByTimeRangeSuccess({ sales })),
          catchError((error) => of(SalesMonitoringActions.loadSalesByTimeRangeFailure({ error: error.message })))
        )
      )
    )
  );

  loadSalesByProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesMonitoringActions.loadSalesByProduct),
      mergeMap((action) =>
        this.salesService.findSalesByProduct(action.prodotto).pipe(
          map((sales) => SalesMonitoringActions.loadSalesByProductSuccess({ sales })),
          catchError((error) => of(SalesMonitoringActions.loadSalesByProductFailure({ error: error.message })))
        )
      )
    )
  );
}
