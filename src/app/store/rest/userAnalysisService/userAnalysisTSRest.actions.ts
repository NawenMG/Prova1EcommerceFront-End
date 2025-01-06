// store/user-analysis.actions.ts
import { createAction, props } from '@ngrx/store';
import { UserAnalysis } from './userAnalysisTSRest.state';

// Caricamento di analisi casuali
export const loadRandomUserAnalysis = createAction(
  '[UserAnalysis] Load Random User Analysis',
  props<{ count: number }>()
);

export const loadRandomUserAnalysisSuccess = createAction(
  '[UserAnalysis] Load Random User Analysis Success',
  props<{ userAnalysisList: UserAnalysis[] }>()
);

export const loadRandomUserAnalysisFailure = createAction(
  '[UserAnalysis] Load Random User Analysis Failure',
  props<{ error: string }>()
);

// Inserimento di un'analisi singola
export const insertUserAnalysis = createAction(
  '[UserAnalysis] Insert User Analysis',
  props<{ analysis: UserAnalysis }>()
);

export const insertUserAnalysisSuccess = createAction(
  '[UserAnalysis] Insert User Analysis Success'
);

export const insertUserAnalysisFailure = createAction(
  '[UserAnalysis] Insert User Analysis Failure',
  props<{ error: string }>()
);
