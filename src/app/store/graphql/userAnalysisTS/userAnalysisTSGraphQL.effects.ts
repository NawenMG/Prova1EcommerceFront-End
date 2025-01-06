// store/user-analysis.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserAnalysisService } from '../../../api/services/graphql/userAnalysisTSService/user-analysis-tsgraphql.service';
import * as UserAnalysisActions from './userAnalysisTSGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserAnalysisEffects {
  constructor(private actions$: Actions, private userAnalysisService: UserAnalysisService) {}

  loadUserAnalysisByTimeRange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAnalysisActions.loadUserAnalysisByTimeRange),
      mergeMap((action) =>
        this.userAnalysisService.findByTimeRange(action.startTime, action.endTime).pipe(
          map((userAnalysisData) => UserAnalysisActions.loadUserAnalysisByTimeRangeSuccess({ userAnalysisData })),
          catchError((error) => of(UserAnalysisActions.loadUserAnalysisByTimeRangeFailure({ error: error.message })))
        )
      )
    )
  );

  loadUserAnalysisByUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAnalysisActions.loadUserAnalysisByUser),
      mergeMap((action) =>
        this.userAnalysisService.findByUser(action.utente).pipe(
          map((userAnalysisData) => UserAnalysisActions.loadUserAnalysisByUserSuccess({ userAnalysisData })),
          catchError((error) => of(UserAnalysisActions.loadUserAnalysisByUserFailure({ error: error.message })))
        )
      )
    )
  );
}
