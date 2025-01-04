// store/graphdb.actions.ts
import { createAction, props } from '@ngrx/store';
import { NodoUtente, NodoProdotto, NodoCategoriaProdotto, NodoLocazioneUtente } from './graphNeoRest.state';

// Creazione di un'entità generica
export const createEntity = createAction(
  '[GraphDB] Create Entity',
  props<{ entityType: string; entity: any }>()
);
export const createEntitySuccess = createAction(
  '[GraphDB] Create Entity Success',
  props<{ entity: any }>()
);
export const createEntityFailure = createAction(
  '[GraphDB] Create Entity Failure',
  props<{ error: string }>()
);

// Eliminazione di un'entità
export const deleteEntity = createAction(
  '[GraphDB] Delete Entity',
  props<{ entityType: string; id: number }>()
);
export const deleteEntitySuccess = createAction(
  '[GraphDB] Delete Entity Success',
  props<{ id: number }>()
);
export const deleteEntityFailure = createAction(
  '[GraphDB] Delete Entity Failure',
  props<{ error: string }>()
);
