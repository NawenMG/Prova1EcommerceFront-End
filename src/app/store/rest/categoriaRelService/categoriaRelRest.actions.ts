// store/categorie.actions.ts
import { createAction, props } from '@ngrx/store';
import { Categorie } from './categoriaRelRest.state';

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

// Inserimento nuova categoria
export const inserisciCategoria = createAction(
  '[Categorie] Inserisci Categoria',
  props<{ categorie: Categorie }>()
);
export const inserisciCategoriaSuccess = createAction('[Categorie] Inserisci Categoria Success');
export const inserisciCategoriaFailure = createAction(
  '[Categorie] Inserisci Categoria Failure',
  props<{ error: string }>()
);
