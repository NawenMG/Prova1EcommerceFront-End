// store/user-analysis.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as UserAnalysisActions from './userAnalysisTSRest.actions';
import { UserAnalysisState, initialState } from './userAnalysisTSRest.state';

export const userAnalysisReducer = createReducer(
  initialState,

  on(UserAnalysisActions.loadRandomUserAnalysis, (state) => ({
    ...state, loading: true, error: null
  })),

  on(UserAnalysisActions.loadRandomUserAnalysisSuccess, (state, { userAnalysisList }) => ({
    ...state, userAnalysisList, loading: false
  })),

  on(UserAnalysisActions.loadRandomUserAnalysisFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  on(UserAnalysisActions.insertUserAnalysis, (state) => ({
    ...state, loading: true
  })),

  on(UserAnalysisActions.insertUserAnalysisSuccess, (state) => ({
    ...state, loading: false, error: null
  })),

  on(UserAnalysisActions.insertUserAnalysisFailure, (state, { error }) => ({
    ...state, loading: false, error
  }))
);
