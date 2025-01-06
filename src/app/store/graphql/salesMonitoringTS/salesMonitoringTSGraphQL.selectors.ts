// store/sales-monitoring.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SalesMonitoringState } from './salesMonitoringTSGraphQL.state';

export const selectSalesMonitoringState = createFeatureSelector<SalesMonitoringState>('salesMonitoring');

export const selectSales = createSelector(
  selectSalesMonitoringState,
  (state) => state.sales
);

export const selectLoading = createSelector(
  selectSalesMonitoringState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectSalesMonitoringState,
  (state) => state.error
);
