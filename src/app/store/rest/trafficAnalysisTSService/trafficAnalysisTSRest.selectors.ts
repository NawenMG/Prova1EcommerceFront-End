// store/traffic-analysis.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TrafficAnalysisState } from './trafficAnalysisTSRest.state';

export const selectTrafficAnalysisState = createFeatureSelector<TrafficAnalysisState>('trafficAnalysis');

export const selectTrafficAnalysisList = createSelector(
  selectTrafficAnalysisState,
  (state) => state.trafficAnalysisList
);

export const selectLoading = createSelector(
  selectTrafficAnalysisState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectTrafficAnalysisState,
  (state) => state.error
);
