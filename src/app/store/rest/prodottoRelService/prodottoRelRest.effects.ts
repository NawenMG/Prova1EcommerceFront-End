// store/prodotti.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProdottiRestService } from '../../../api/services/rest/prodottoRelService/prodotto-rel-rest.service';
import * as ProdottiActions from './prodottoRelRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProdottiEffects {
  constructor(private actions$: Actions, private prodottiService: ProdottiRestService) {}

  // Caricamento
  loadProdotti$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdottiActions.loadProdotti),
      mergeMap((action) =>
        this.prodottiService.queryProdotti(action.paramQuery, action.prodotti).pipe(
          map((prodotti) => ProdottiActions.loadProdottiSuccess({ prodotti })),
          catchError((error) => of(ProdottiActions.loadProdottiFailure({ error: error.message })))
        )
      )
    )
  );

  // Inserimento
  inserisciProdotto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdottiActions.inserisciProdotto),
      mergeMap((action) =>
        this.prodottiService.inserisciProdotto(action.prodotto).pipe(
          map(() => ProdottiActions.inserisciProdottoSuccess()),
          catchError((error) => of(ProdottiActions.inserisciProdottoFailure({ error: error.message })))
        )
      )
    )
  );

  // Aggiornamento
  aggiornaProdotto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdottiActions.aggiornaProdotto),
      mergeMap((action) =>
        this.prodottiService.aggiornaProdotto(action.productId, action.prodotto).pipe(
          map(() => ProdottiActions.aggiornaProdottoSuccess()),
          catchError((error) => of(ProdottiActions.aggiornaProdottoFailure({ error: error.message })))
        )
      )
    )
  );

  // Eliminazione
  eliminaProdotto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdottiActions.eliminaProdotto),
      mergeMap((action) =>
        this.prodottiService.eliminaProdotto(action.productId).pipe(
          map(() => ProdottiActions.eliminaProdottoSuccess()),
          catchError((error) => of(ProdottiActions.eliminaProdottoFailure({ error: error.message })))
        )
      )
    )
  );
}
