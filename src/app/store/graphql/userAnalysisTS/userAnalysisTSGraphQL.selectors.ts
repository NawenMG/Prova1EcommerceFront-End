// store/user-analysis.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserAnalysisState } from './userAnalysisTSGraphQL.state';

export const selectUserAnalysisState = createFeatureSelector<UserAnalysisState>('userAnalysis');

export const selectUserAnalysisData = createSelector(
  selectUserAnalysisState,
  (state) => state.userAnalysisData
);

export const selectLoading = createSelector(
  selectUserAnalysisState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUserAnalysisState,
  (state) => state.error
);
