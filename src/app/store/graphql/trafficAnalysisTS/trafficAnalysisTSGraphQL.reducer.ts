// store/traffic-analysis.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as TrafficAnalysisActions from './trafficAnalysisTSGraphQL.actions';
import { TrafficAnalysisState, initialState } from './trafficAnalysisTSGraphQL.state';

export const trafficAnalysisReducer = createReducer(
  initialState,

  // Caricamento per intervallo temporale
  on(TrafficAnalysisActions.loadTrafficByTimeRange, (state) => ({
    ...state, loading: true, error: null
  })),
  on(TrafficAnalysisActions.loadTrafficByTimeRangeSuccess, (state, { trafficData }) => ({
    ...state, trafficData, loading: false
  })),
  on(TrafficAnalysisActions.loadTrafficByTimeRangeFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  // Caricamento per URL specifico
  on(TrafficAnalysisActions.loadTrafficByUrl, (state) => ({
    ...state, loading: true
  })),
  on(TrafficAnalysisActions.loadTrafficByUrlSuccess, (state, { trafficData }) => ({
    ...state, trafficData, loading: false
  })),
  on(TrafficAnalysisActions.loadTrafficByUrlFailure, (state, { error }) => ({
    ...state, loading: false, error
  }))
);
