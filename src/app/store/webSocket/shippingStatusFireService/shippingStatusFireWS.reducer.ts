// store/shipping-status.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ShippingStatusActions from './shippingStatusFireWS.actions';
import { ShippingStatusState, initialState } from './shippingStatusFireWS.state';

export const shippingStatusReducer = createReducer(
  initialState,
  on(ShippingStatusActions.createShippingStatus, (state) => ({ ...state, loading: true })),
  on(ShippingStatusActions.createShippingStatusSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(ShippingStatusActions.createShippingStatusFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
