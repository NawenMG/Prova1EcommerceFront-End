// store/ordini.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdiniGraphqlService } from '../../../api/services/graphql/ordineRelService/ordine-rel-graphql.service';
import * as OrdiniActions from './ordineRelGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class OrdiniEffects {
  constructor(private actions$: Actions, private ordiniService: OrdiniGraphqlService) {}

  loadOrdini$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdiniActions.loadOrdini),
      mergeMap((action) =>
        this.ordiniService.getOrdini(action.paramQuery, action.ordini).pipe(
          map((ordini) => OrdiniActions.loadOrdiniSuccess({ ordini })),
          catchError((error) => of(OrdiniActions.loadOrdiniFailure({ error: error.message })))
        )
      )
    )
  );
}
