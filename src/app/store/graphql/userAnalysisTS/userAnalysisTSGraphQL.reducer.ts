// store/user-analysis.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as UserAnalysisActions from './userAnalysisTSGraphQL.actions';
import { UserAnalysisState, initialState } from './userAnalysisTSGraphQL.state';

export const userAnalysisReducer = createReducer(
  initialState,

  // Caricamento per intervallo temporale
  on(UserAnalysisActions.loadUserAnalysisByTimeRange, (state) => ({
    ...state, loading: true, error: null
  })),
  on(UserAnalysisActions.loadUserAnalysisByTimeRangeSuccess, (state, { userAnalysisData }) => ({
    ...state, userAnalysisData, loading: false
  })),
  on(UserAnalysisActions.loadUserAnalysisByTimeRangeFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  // Caricamento per utente
  on(UserAnalysisActions.loadUserAnalysisByUser, (state) => ({
    ...state, loading: true
  })),
  on(UserAnalysisActions.loadUserAnalysisByUserSuccess, (state, { userAnalysisData }) => ({
    ...state, userAnalysisData, loading: false
  })),
  on(UserAnalysisActions.loadUserAnalysisByUserFailure, (state, { error }) => ({
    ...state, loading: false, error
  }))
);
