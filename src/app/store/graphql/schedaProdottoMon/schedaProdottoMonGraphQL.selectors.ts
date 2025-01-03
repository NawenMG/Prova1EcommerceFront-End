// store/schede-prodotti.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SchedeProdottiState } from './schedaProdottoMonGraphQL.state';

export const selectSchedeProdottiState = createFeatureSelector<SchedeProdottiState>('schedeProdotti');

export const selectAllSchedeProdotti = createSelector(
  selectSchedeProdottiState,
  (state) => state.schedeProdotti
);

export const selectLoading = createSelector(
  selectSchedeProdottiState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectSchedeProdottiState,
  (state) => state.error
);
