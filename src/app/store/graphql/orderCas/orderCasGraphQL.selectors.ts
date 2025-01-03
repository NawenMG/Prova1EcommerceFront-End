// order.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { OrderState } from './orderCasGraphQL.state';

export const selectOrderState = createFeatureSelector<OrderState>('orders');

export const selectAllOrders = createSelector(
  selectOrderState,
  (state) => state.orders
);

export const selectSelectedOrder = createSelector(
  selectOrderState,
  (state) => state.selectedOrder
);

export const selectLoading = createSelector(
  selectOrderState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectOrderState,
  (state) => state.error
);
