// store/traffic-analysis.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TrafficAnalysisService } from '../../../api/services/rest/trafficAnalysisTSService/traffic-analysis-tsrest.service';
import * as TrafficAnalysisActions from './trafficAnalysisTSRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TrafficAnalysisEffects {
  constructor(private actions$: Actions, private trafficAnalysisService: TrafficAnalysisService) {}

  loadRandomTrafficAnalysis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrafficAnalysisActions.loadRandomTrafficAnalysis),
      mergeMap((action) =>
        this.trafficAnalysisService.generateRandomTrafficAnalysis(action.count).pipe(
          map((trafficAnalysisList) =>
            TrafficAnalysisActions.loadRandomTrafficAnalysisSuccess({ trafficAnalysisList })
          ),
          catchError((error) =>
            of(TrafficAnalysisActions.loadRandomTrafficAnalysisFailure({ error: error.message }))
          )
        )
      )
    )
  );

  insertTrafficAnalysis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrafficAnalysisActions.insertTrafficAnalysis),
      mergeMap((action) =>
        this.trafficAnalysisService.insertTrafficAnalysis(action.analysis).pipe(
          map(() => TrafficAnalysisActions.insertTrafficAnalysisSuccess()),
          catchError((error) =>
            of(TrafficAnalysisActions.insertTrafficAnalysisFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
