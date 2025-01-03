// order.actions.ts
import { createAction, props } from '@ngrx/store';
import { Order } from './orderCasGraphQL.state';

// Caricamento di tutti gli ordini
export const loadOrders = createAction('[Order] Load Orders');
export const loadOrdersSuccess = createAction('[Order] Load Orders Success', props<{ orders: Order[] }>());
export const loadOrdersFailure = createAction('[Order] Load Orders Failure', props<{ error: string }>());

// Caricamento di un singolo ordine
export const loadOrderById = createAction('[Order] Load Order By ID', props<{ id: string }>());
export const loadOrderByIdSuccess = createAction('[Order] Load Order By ID Success', props<{ order: Order }>());
export const loadOrderByIdFailure = createAction('[Order] Load Order By ID Failure', props<{ error: string }>());
