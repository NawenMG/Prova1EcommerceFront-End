// store/shipping-status.state.ts
export interface ShippingStatus {
  id: string;
  stato: string;
  currentLocation: string;
}

export interface ShippingStatusState {
  shippingStatus: ShippingStatus | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ShippingStatusState = {
  shippingStatus: null,
  loading: false,
  error: null
};
