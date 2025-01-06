// store/categorie.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CategorieState } from './categoriaRelGraphQL.state';

export const selectCategorieState = createFeatureSelector<CategorieState>('categorie');

export const selectCategorie = createSelector(
  selectCategorieState,
  (state) => state.categorie
);

export const selectLoading = createSelector(
  selectCategorieState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectCategorieState,
  (state) => state.error
);
