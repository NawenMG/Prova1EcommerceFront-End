// store/sales-monitoring.actions.ts
import { createAction, props } from '@ngrx/store';
import { SalesMonitoring } from './salesMonitoringTSRest.state';

// Caricamento di monitoraggi casuali
export const loadRandomSalesMonitoring = createAction(
  '[SalesMonitoring] Load Random SalesMonitoring',
  props<{ count: number }>()
);

export const loadRandomSalesMonitoringSuccess = createAction(
  '[SalesMonitoring] Load Random SalesMonitoring Success',
  props<{ salesMonitoringData: SalesMonitoring[] }>()
);

export const loadRandomSalesMonitoringFailure = createAction(
  '[SalesMonitoring] Load Random SalesMonitoring Failure',
  props<{ error: string }>()
);

// Aggiunta di un monitoraggio
export const addSalesMonitoring = createAction(
  '[SalesMonitoring] Add SalesMonitoring',
  props<{ salesMonitoring: SalesMonitoring }>()
);

export const addSalesMonitoringSuccess = createAction(
  '[SalesMonitoring] Add SalesMonitoring Success'
);

export const addSalesMonitoringFailure = createAction(
  '[SalesMonitoring] Add SalesMonitoring Failure',
  props<{ error: string }>()
);
