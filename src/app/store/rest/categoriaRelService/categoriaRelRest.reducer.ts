// store/categorie.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CategorieActions from './categoriaRelRest.actions';
import { CategorieState, initialState } from './categoriaRelRest.state';

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
  })),
  on(CategorieActions.inserisciCategoria, (state) => ({ ...state, loading: true })),
  on(CategorieActions.inserisciCategoriaSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(CategorieActions.inserisciCategoriaFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
