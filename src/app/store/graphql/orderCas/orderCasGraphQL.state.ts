// order.state.ts
export interface Order {
  id: string;
  nomeCliente: string;
  data: string;
  stato: string;
}

export interface OrderState {
  orders: Order[];
  selectedOrder: Order | null;
  loading: boolean;
  error: string | null;
}

export const initialState: OrderState = {
  orders: [],
  selectedOrder: null,
  loading: false,
  error: null
};
