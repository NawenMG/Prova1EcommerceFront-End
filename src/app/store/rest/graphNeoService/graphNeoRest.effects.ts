// store/graphdb.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GraphDBService } from '../../../api/services/rest/graphNeoService/graph-neo-rest.service';
import * as GraphDBActions from './graphNeoRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class GraphDBEffects {
  constructor(private actions$: Actions, private graphDBService: GraphDBService) {}

  createEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GraphDBActions.createEntity),
      mergeMap((action) =>
        this.graphDBService.createEntity(action.entityType, action.entity).pipe(
          map((entity) => GraphDBActions.createEntitySuccess({ entity })),
          catchError((error) => of(GraphDBActions.createEntityFailure({ error: error.message })))
        )
      )
    )
  );

  deleteEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GraphDBActions.deleteEntity),
      mergeMap((action) =>
        this.graphDBService.deleteEntity(action.entityType, action.id).pipe(
          map(() => GraphDBActions.deleteEntitySuccess({ id: action.id })),
          catchError((error) => of(GraphDBActions.deleteEntityFailure({ error: error.message })))
        )
      )
    )
  );
}
