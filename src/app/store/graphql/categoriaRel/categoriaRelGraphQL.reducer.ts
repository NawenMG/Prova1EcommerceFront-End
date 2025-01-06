// store/categorie.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CategorieActions from './categoriaRelGraphQL.actions';
import { CategorieState, initialState } from './categoriaRelGraphQL.state';

export const categorieReducer = createReducer(
  initialState,
  on(CategorieActions.loadCategorie, (state) => ({ ...state, loading: true })),
  on(CategorieActions.loadCategorieSuccess, (state, { categorie }) => ({
    ...state,
    categorie,
    loading: false,
    error: null
  })),
  on(CategorieActions.loadCategorieFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
