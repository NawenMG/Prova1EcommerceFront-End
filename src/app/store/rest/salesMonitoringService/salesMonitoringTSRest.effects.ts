// store/sales-monitoring.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SalesMonitoringService } from '../../../api/services/rest/salesMonitoringTSService/sales-monitoring-tsrest.service';
import * as SalesMonitoringActions from './salesMonitoringTSRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class SalesMonitoringEffects {
  constructor(private actions$: Actions, private salesMonitoringService: SalesMonitoringService) {}

  loadRandomSalesMonitoring$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesMonitoringActions.loadRandomSalesMonitoring),
      mergeMap((action) =>
        this.salesMonitoringService.generateRandomSalesMonitoring(action.count).pipe(
          map((salesMonitoringData) =>
            SalesMonitoringActions.loadRandomSalesMonitoringSuccess({ salesMonitoringData })
          ),
          catchError((error) =>
            of(SalesMonitoringActions.loadRandomSalesMonitoringFailure({ error: error.message }))
          )
        )
      )
    )
  );

  addSalesMonitoring$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesMonitoringActions.addSalesMonitoring),
      mergeMap((action) =>
        this.salesMonitoringService.addSalesMonitoring(action.salesMonitoring).pipe(
          map(() => SalesMonitoringActions.addSalesMonitoringSuccess()),
          catchError((error) => of(SalesMonitoringActions.addSalesMonitoringFailure({ error: error.message })))
        )
      )
    )
  );
}
