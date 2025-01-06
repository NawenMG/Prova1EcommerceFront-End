// store/server-response.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ServerResponseService } from '../../../api/services/rest/serverResponseTSService/server-response-tsrest.service';
import * as ServerResponseActions from './serverResponseTSRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ServerResponseEffects {
  constructor(private actions$: Actions, private serverResponseService: ServerResponseService) {}

  loadRandomServerResponses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServerResponseActions.loadRandomServerResponses),
      mergeMap((action) =>
        this.serverResponseService.generateRandomServerResponse(action.count).pipe(
          map((serverResponses) =>
            ServerResponseActions.loadRandomServerResponsesSuccess({ serverResponses })
          ),
          catchError((error) =>
            of(ServerResponseActions.loadRandomServerResponsesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  insertServerResponse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServerResponseActions.insertServerResponse),
      mergeMap((action) =>
        this.serverResponseService.insert(action.serverResponse).pipe(
          map(() => ServerResponseActions.insertServerResponseSuccess()),
          catchError((error) => of(ServerResponseActions.insertServerResponseFailure({ error: error.message })))
        )
      )
    )
  );
}
