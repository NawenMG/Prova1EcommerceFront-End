// store/shipping-status.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ShippingStatusState } from './shippingStatusFireWS.state';

export const selectShippingStatusState = createFeatureSelector<ShippingStatusState>('shippingStatus');

export const selectShippingStatus = createSelector(
  selectShippingStatusState,
  (state) => state.shippingStatus
);

export const selectLoading = createSelector(
  selectShippingStatusState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectShippingStatusState,
  (state) => state.error
);
