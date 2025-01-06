// store/prodotti.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProdottiGraphqlService } from '../../../api/services/graphql/prodottoRelService/prodotto-rel-graphql.service';
import * as ProdottiActions from './prodottoRelGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProdottiEffects {
  constructor(private actions$: Actions, private prodottiService: ProdottiGraphqlService) {}

  loadProdotti$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdottiActions.loadProdotti),
      mergeMap((action) =>
        this.prodottiService.getProdotti(action.paramQuery, action.prodotti).pipe(
          map((prodotti) => ProdottiActions.loadProdottiSuccess({ prodotti })),
          catchError((error) => of(ProdottiActions.loadProdottiFailure({ error: error.message })))
        )
      )
    )
  );
}
