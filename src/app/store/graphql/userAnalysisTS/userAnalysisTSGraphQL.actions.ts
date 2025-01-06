// store/user-analysis.actions.ts
import { createAction, props } from '@ngrx/store';
import { UserAnalysis } from './userAnalysisTSGraphQL.state';

// Caricare le analisi per intervallo temporale
export const loadUserAnalysisByTimeRange = createAction(
  '[UserAnalysis] Load By Time Range',
  props<{ startTime: string; endTime: string }>()
);
export const loadUserAnalysisByTimeRangeSuccess = createAction(
  '[UserAnalysis] Load By Time Range Success',
  props<{ userAnalysisData: UserAnalysis[] }>()
);
export const loadUserAnalysisByTimeRangeFailure = createAction(
  '[UserAnalysis] Load By Time Range Failure',
  props<{ error: string }>()
);

// Caricare le analisi per utente
export const loadUserAnalysisByUser = createAction(
  '[UserAnalysis] Load By User',
  props<{ utente: string }>()
);
export const loadUserAnalysisByUserSuccess = createAction(
  '[UserAnalysis] Load By User Success',
  props<{ userAnalysisData: UserAnalysis[] }>()
);
export const loadUserAnalysisByUserFailure = createAction(
  '[UserAnalysis] Load By User Failure',
  props<{ error: string }>()
);
