// store/user-analysis.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserAnalysisState } from './userAnalysisTSRest.state';

export const selectUserAnalysisState = createFeatureSelector<UserAnalysisState>('userAnalysis');

export const selectUserAnalysisList = createSelector(
  selectUserAnalysisState,
  (state) => state.userAnalysisList
);

export const selectLoading = createSelector(
  selectUserAnalysisState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUserAnalysisState,
  (state) => state.error
);
