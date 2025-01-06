// store/traffic-analysis.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TrafficAnalysisService } from '../../../api/services/graphql/trafficAnalysisTSService/traffic-analysis-tsgraphql.service';
import * as TrafficAnalysisActions from './trafficAnalysisTSGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TrafficAnalysisEffects {
  constructor(private actions$: Actions, private trafficAnalysisService: TrafficAnalysisService) {}

  loadTrafficByTimeRange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrafficAnalysisActions.loadTrafficByTimeRange),
      mergeMap((action) =>
        this.trafficAnalysisService.findByTimeRange(action.startTime, action.endTime).pipe(
          map((trafficData) => TrafficAnalysisActions.loadTrafficByTimeRangeSuccess({ trafficData })),
          catchError((error) => of(TrafficAnalysisActions.loadTrafficByTimeRangeFailure({ error: error.message })))
        )
      )
    )
  );

  loadTrafficByUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrafficAnalysisActions.loadTrafficByUrl),
      mergeMap((action) =>
        this.trafficAnalysisService.findByUrl(action.urlPagina).pipe(
          map((trafficData) => TrafficAnalysisActions.loadTrafficByUrlSuccess({ trafficData })),
          catchError((error) => of(TrafficAnalysisActions.loadTrafficByUrlFailure({ error: error.message })))
        )
      )
    )
  );
}
