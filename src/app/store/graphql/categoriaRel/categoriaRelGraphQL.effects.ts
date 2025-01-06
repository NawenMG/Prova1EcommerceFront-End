// store/categorie.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategorieGraphqlService } from '../../../api/services/graphql/categoriaRelService/categoria-rel-graphql.service';
import * as CategorieActions from './categoriaRelGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CategorieEffects {
  constructor(private actions$: Actions, private categorieService: CategorieGraphqlService) {}

  loadCategorie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategorieActions.loadCategorie),
      mergeMap((action) =>
        this.categorieService.getCategorie(action.paramQuery, action.categorie).pipe(
          map((categorie) => CategorieActions.loadCategorieSuccess({ categorie })),
          catchError((error) => of(CategorieActions.loadCategorieFailure({ error: error.message })))
        )
      )
    )
  );
}
