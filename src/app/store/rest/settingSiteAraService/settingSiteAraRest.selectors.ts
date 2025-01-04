// store/setting-site.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SettingSiteState } from './settingSiteAraRest.state';

export const selectSettingSiteState = createFeatureSelector<SettingSiteState>('settingSite');

export const selectSettings = createSelector(
  selectSettingSiteState,
  (state) => state.settings
);

export const selectLoading = createSelector(
  selectSettingSiteState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectSettingSiteState,
  (state) => state.error
);
