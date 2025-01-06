// store/server-response.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ServerResponseService } from '../../../api/services/graphql/serverResponseTSService/server-response-tsgraphql.service';
import * as ServerResponseActions from './serverResponseTSGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ServerResponseEffects {
  constructor(private actions$: Actions, private serverResponseService: ServerResponseService) {}

  loadServerResponsesByTimeRange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServerResponseActions.loadServerResponsesByTimeRange),
      mergeMap((action) =>
        this.serverResponseService.findServerResponsesByTimeRange(action.startTime, action.endTime).pipe(
          map((serverResponses) => ServerResponseActions.loadServerResponsesByTimeRangeSuccess({ serverResponses })),
          catchError((error) => of(ServerResponseActions.loadServerResponsesByTimeRangeFailure({ error: error.message })))
        )
      )
    )
  );

  loadServerResponsesByServer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServerResponseActions.loadServerResponsesByServer),
      mergeMap((action) =>
        this.serverResponseService.findServerResponsesByServer(action.server).pipe(
          map((serverResponses) => ServerResponseActions.loadServerResponsesByServerSuccess({ serverResponses })),
          catchError((error) => of(ServerResponseActions.loadServerResponsesByServerFailure({ error: error.message })))
        )
      )
    )
  );
}
