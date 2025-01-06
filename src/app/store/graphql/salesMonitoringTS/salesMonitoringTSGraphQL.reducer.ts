// store/sales-monitoring.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as SalesMonitoringActions from './salesMonitoringTSGraphQL.actions';
import { SalesMonitoringState, initialState } from './salesMonitoringTSGraphQL.state';

export const salesMonitoringReducer = createReducer(
  initialState,

  on(SalesMonitoringActions.loadSalesByTimeRange, (state) => ({
    ...state, loading: true, error: null
  })),
  on(SalesMonitoringActions.loadSalesByTimeRangeSuccess, (state, { sales }) => ({
    ...state, sales, loading: false
  })),
  on(SalesMonitoringActions.loadSalesByTimeRangeFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  on(SalesMonitoringActions.loadSalesByProduct, (state) => ({
    ...state, loading: true
  })),
  on(SalesMonitoringActions.loadSalesByProductSuccess, (state, { sales }) => ({
    ...state, sales, loading: false
  })),
  on(SalesMonitoringActions.loadSalesByProductFailure, (state, { error }) => ({
    ...state, loading: false, error
  }))
);
