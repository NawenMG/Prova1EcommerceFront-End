// order.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as OrderActions from './orderCasGraphQL.actions';
import { OrderState, initialState } from './orderCasGraphQL.state';

export const orderReducer = createReducer(
  initialState,

  // Caricamento di tutti gli ordini
  on(OrderActions.loadOrders, (state) => ({ ...state, loading: true })),
  on(OrderActions.loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    loading: false,
    error: null
  })),
  on(OrderActions.loadOrdersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Caricamento di un singolo ordine
  on(OrderActions.loadOrderById, (state) => ({ ...state, loading: true })),
  on(OrderActions.loadOrderByIdSuccess, (state, { order }) => ({
    ...state,
    selectedOrder: order,
    loading: false,
    error: null
  })),
  on(OrderActions.loadOrderByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
