// store/sales-monitoring.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as SalesMonitoringActions from './salesMonitoringTSRest.actions';
import { SalesMonitoringState, initialState } from './salesMonitoringTSRest.state';

export const salesMonitoringReducer = createReducer(
  initialState,

  on(SalesMonitoringActions.loadRandomSalesMonitoring, (state) => ({
    ...state, loading: true, error: null
  })),

  on(SalesMonitoringActions.loadRandomSalesMonitoringSuccess, (state, { salesMonitoringData }) => ({
    ...state, salesMonitoringData, loading: false
  })),

  on(SalesMonitoringActions.loadRandomSalesMonitoringFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  on(SalesMonitoringActions.addSalesMonitoring, (state) => ({
    ...state, loading: true
  })),

  on(SalesMonitoringActions.addSalesMonitoringSuccess, (state) => ({
    ...state, loading: false, error: null
  })),

  on(SalesMonitoringActions.addSalesMonitoringFailure, (state, { error }) => ({
    ...state, loading: false, error
  }))
);
