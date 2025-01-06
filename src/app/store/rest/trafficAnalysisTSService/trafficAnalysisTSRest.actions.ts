// store/traffic-analysis.actions.ts
import { createAction, props } from '@ngrx/store';
import { TrafficAnalysis } from './trafficAnalysisTSRest.state';

// Caricamento delle analisi casuali
export const loadRandomTrafficAnalysis = createAction(
  '[TrafficAnalysis] Load Random Traffic Analysis',
  props<{ count: number }>()
);

export const loadRandomTrafficAnalysisSuccess = createAction(
  '[TrafficAnalysis] Load Random Traffic Analysis Success',
  props<{ trafficAnalysisList: TrafficAnalysis[] }>()
);

export const loadRandomTrafficAnalysisFailure = createAction(
  '[TrafficAnalysis] Load Random Traffic Analysis Failure',
  props<{ error: string }>()
);

// Inserimento di un'analisi singola
export const insertTrafficAnalysis = createAction(
  '[TrafficAnalysis] Insert Traffic Analysis',
  props<{ analysis: TrafficAnalysis }>()
);

export const insertTrafficAnalysisSuccess = createAction(
  '[TrafficAnalysis] Insert Traffic Analysis Success'
);

export const insertTrafficAnalysisFailure = createAction(
  '[TrafficAnalysis] Insert Traffic Analysis Failure',
  props<{ error: string }>()
);
