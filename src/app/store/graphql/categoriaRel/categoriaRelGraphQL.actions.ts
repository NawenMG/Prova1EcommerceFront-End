// store/categorie.actions.ts
import { createAction, props } from '@ngrx/store';
import { Categorie } from './categoriaRelGraphQL.state';

// Caricamento delle categorie
export const loadCategorie = createAction(
  '[Categorie] Load Categorie',
  props<{ paramQuery: any; categorie: Partial<Categorie> }>()
);
export const loadCategorieSuccess = createAction(
  '[Categorie] Load Categorie Success',
  props<{ categorie: Categorie[] }>()
);
export const loadCategorieFailure = createAction(
  '[Categorie] Load Categorie Failure',
  props<{ error: string }>()
);
