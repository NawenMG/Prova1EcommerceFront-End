// store/user-analysis.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserAnalysisService } from '../../../api/services/rest/userAnalysistsService/user-analysis-tsrest.service';
import * as UserAnalysisActions from './userAnalysisTSRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserAnalysisEffects {
  constructor(private actions$: Actions, private userAnalysisService: UserAnalysisService) {}

  loadRandomUserAnalysis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAnalysisActions.loadRandomUserAnalysis),
      mergeMap((action) =>
        this.userAnalysisService.generateRandomUserAnalysis(action.count).pipe(
          map((userAnalysisList) =>
            UserAnalysisActions.loadRandomUserAnalysisSuccess({ userAnalysisList })
          ),
          catchError((error) =>
            of(UserAnalysisActions.loadRandomUserAnalysisFailure({ error: error.message }))
          )
        )
      )
    )
  );

  insertUserAnalysis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAnalysisActions.insertUserAnalysis),
      mergeMap((action) =>
        this.userAnalysisService.insertUserAnalysis(action.analysis).pipe(
          map(() => UserAnalysisActions.insertUserAnalysisSuccess()),
          catchError((error) =>
            of(UserAnalysisActions.insertUserAnalysisFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
