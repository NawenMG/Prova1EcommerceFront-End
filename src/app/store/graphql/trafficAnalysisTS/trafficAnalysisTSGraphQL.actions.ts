// store/traffic-analysis.actions.ts
import { createAction, props } from '@ngrx/store';
import { TrafficAnalysis } from './trafficAnalysisTSGraphQL.state';

// Caricare le analisi per intervallo temporale
export const loadTrafficByTimeRange = createAction(
  '[TrafficAnalysis] Load Traffic By Time Range',
  props<{ startTime: string; endTime: string }>()
);
export const loadTrafficByTimeRangeSuccess = createAction(
  '[TrafficAnalysis] Load Traffic By Time Range Success',
  props<{ trafficData: TrafficAnalysis[] }>()
);
export const loadTrafficByTimeRangeFailure = createAction(
  '[TrafficAnalysis] Load Traffic By Time Range Failure',
  props<{ error: string }>()
);

// Caricare le analisi per URL specifico
export const loadTrafficByUrl = createAction(
  '[TrafficAnalysis] Load Traffic By URL',
  props<{ urlPagina: string }>()
);
export const loadTrafficByUrlSuccess = createAction(
  '[TrafficAnalysis] Load Traffic By URL Success',
  props<{ trafficData: TrafficAnalysis[] }>()
);
export const loadTrafficByUrlFailure = createAction(
  '[TrafficAnalysis] Load Traffic By URL Failure',
  props<{ error: string }>()
);
