// store/sales-monitoring.actions.ts
import { createAction, props } from '@ngrx/store';
import { SalesMonitoring } from './salesMonitoringTSGraphQL.state';

// Caricare le vendite per intervallo di tempo
export const loadSalesByTimeRange = createAction(
  '[SalesMonitoring] Load Sales By Time Range',
  props<{ startTime: string; endTime: string }>()
);
export const loadSalesByTimeRangeSuccess = createAction(
  '[SalesMonitoring] Load Sales By Time Range Success',
  props<{ sales: SalesMonitoring[] }>()
);
export const loadSalesByTimeRangeFailure = createAction(
  '[SalesMonitoring] Load Sales By Time Range Failure',
  props<{ error: string }>()
);

// Caricare le vendite per prodotto
export const loadSalesByProduct = createAction(
  '[SalesMonitoring] Load Sales By Product',
  props<{ prodotto: string }>()
);
export const loadSalesByProductSuccess = createAction(
  '[SalesMonitoring] Load Sales By Product Success',
  props<{ sales: SalesMonitoring[] }>()
);
export const loadSalesByProductFailure = createAction(
  '[SalesMonitoring] Load Sales By Product Failure',
  props<{ error: string }>()
);
