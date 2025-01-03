import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrderService } from '../../../api/services/graphql/orderCasService/order-cas-graphql.service';
import * as OrderActions from './orderCasGraphQL.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

interface Order {
  id: string;
  nomeCliente: string;
  data: string;
  stato: string;
}

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  // Effetto per caricare tutti gli ordini con gestione del tipo e optional chaining
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      mergeMap(() =>
        this.orderService.findAllOrders().pipe(
          map((orders: Order[]) => orders.length > 0 ? OrderActions.loadOrdersSuccess({ orders }) : OrderActions.loadOrdersFailure({ error: 'No orders found' })),
          catchError((error) => of(OrderActions.loadOrdersFailure({ error: error.message })))
        )
      )
    )
  );

  // Effetto per caricare un singolo ordine con validazione e tipizzazione
  loadOrderById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrderById),
      mergeMap((action) =>
        this.orderService.findOrderById(action.id).pipe(
          map((response) => {
            if (response && typeof response === 'object' && 'findOrdineById' in response) {
              return OrderActions.loadOrderByIdSuccess({ order: response.findOrdineById as Order });
            } else {
              return OrderActions.loadOrderByIdFailure({ error: 'Invalid response structure' });
            }
          }),
          catchError((error) => of(OrderActions.loadOrderByIdFailure({ error: error.message })))
        )
      )
    )
  );
}
