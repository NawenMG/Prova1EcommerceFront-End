// store/traffic-analysis.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as TrafficAnalysisActions from './trafficAnalysisTSRest.actions';
import { TrafficAnalysisState, initialState } from './trafficAnalysisTSRest.state';

export const trafficAnalysisReducer = createReducer(
  initialState,

  // Caricamento delle analisi casuali
  on(TrafficAnalysisActions.loadRandomTrafficAnalysis, (state) => ({
    ...state, loading: true, error: null
  })),

  on(TrafficAnalysisActions.loadRandomTrafficAnalysisSuccess, (state, { trafficAnalysisList }) => ({
    ...state, trafficAnalysisList, loading: false
  })),

  on(TrafficAnalysisActions.loadRandomTrafficAnalysisFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  // Inserimento singolo di un'analisi
  on(TrafficAnalysisActions.insertTrafficAnalysis, (state) => ({
    ...state, loading: true
  })),

  on(TrafficAnalysisActions.insertTrafficAnalysisSuccess, (state) => ({
    ...state, loading: false, error: null
  })),

  on(TrafficAnalysisActions.insertTrafficAnalysisFailure, (state, { error }) => ({
    ...state, loading: false, error
  }))
);
