// store/resi.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ResiState } from './resoRelGraphQL.state';

export const selectResiState = createFeatureSelector<ResiState>('resi');

export const selectResi = createSelector(
  selectResiState,
  (state) => state.resi
);

export const selectLoading = createSelector(
  selectResiState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectResiState,
  (state) => state.error
);
