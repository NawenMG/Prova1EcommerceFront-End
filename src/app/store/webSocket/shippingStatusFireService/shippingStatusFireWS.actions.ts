// store/shipping-status.actions.ts
import { createAction, props } from '@ngrx/store';
import { ShippingStatus } from './shippingStatusFireWS.state';

// Crea una nuova spedizione
export const createShippingStatus = createAction(
  '[ShippingStatus] Create ShippingStatus',
  props<{ shippingStatus: ShippingStatus }>()
);
export const createShippingStatusSuccess = createAction('[ShippingStatus] Create ShippingStatus Success');
export const createShippingStatusFailure = createAction(
  '[ShippingStatus] Create ShippingStatus Failure',
  props<{ error: string }>()
);

// Aggiorna una spedizione
export const updateShippingStatus = createAction(
  '[ShippingStatus] Update ShippingStatus',
  props<{ shippingStatus: ShippingStatus }>()
);
export const updateShippingStatusSuccess = createAction('[ShippingStatus] Update ShippingStatus Success');
export const updateShippingStatusFailure = createAction(
  '[ShippingStatus] Update ShippingStatus Failure',
  props<{ error: string }>()
);

// Elimina una spedizione
export const deleteShippingStatus = createAction(
  '[ShippingStatus] Delete ShippingStatus',
  props<{ shippingStatusId: string }>()
);
export const deleteShippingStatusSuccess = createAction('[ShippingStatus] Delete ShippingStatus Success');
export const deleteShippingStatusFailure = createAction(
  '[ShippingStatus] Delete ShippingStatus Failure',
  props<{ error: string }>()
);
