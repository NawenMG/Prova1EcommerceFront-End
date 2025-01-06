// store/traffic-analysis.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TrafficAnalysisState } from './trafficAnalysisTSGraphQL.state';

export const selectTrafficAnalysisState = createFeatureSelector<TrafficAnalysisState>('trafficAnalysis');

export const selectTrafficData = createSelector(
  selectTrafficAnalysisState,
  (state) => state.trafficData
);

export const selectLoading = createSelector(
  selectTrafficAnalysisState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectTrafficAnalysisState,
  (state) => state.error
);
