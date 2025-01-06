// store/categorie.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategorieRestService } from '../../../api/services/rest/categoriaRelService/categoria-rel-rest.service';
import * as CategorieActions from './categoriaRelRest.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CategorieEffects {
  constructor(private actions$: Actions, private categorieService: CategorieRestService) {}

  loadCategorie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategorieActions.loadCategorie),
      mergeMap((action) =>
        this.categorieService.queryCategorie(action.paramQuery, action.categorie).pipe(
          map((categorie) => CategorieActions.loadCategorieSuccess({ categorie })),
          catchError((error) => of(CategorieActions.loadCategorieFailure({ error: error.message })))
        )
      )
    )
  );

  inserisciCategoria$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategorieActions.inserisciCategoria),
      mergeMap((action) =>
        this.categorieService.inserisciCategoria(action.categorie).pipe(
          map(() => CategorieActions.inserisciCategoriaSuccess()),
          catchError((error) => of(CategorieActions.inserisciCategoriaFailure({ error: error.message })))
        )
      )
    )
  );
}
