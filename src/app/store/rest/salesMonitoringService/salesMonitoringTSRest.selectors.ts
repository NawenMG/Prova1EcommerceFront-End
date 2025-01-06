// store/sales-monitoring.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SalesMonitoringState } from './salesMonitoringTSRest.state';

export const selectSalesMonitoringState = createFeatureSelector<SalesMonitoringState>('salesMonitoring');

export const selectSalesMonitoringData = createSelector(
  selectSalesMonitoringState,
  (state) => state.salesMonitoringData
);

export const selectLoading = createSelector(
  selectSalesMonitoringState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectSalesMonitoringState,
  (state) => state.error
);
