// store/sales-monitoring.state.ts
export interface SalesMonitoring {
  id: string;
  venditore: string;
  prodotto: string;
  quantità: number;
  dataVendita: string;
  ricavo: number;
}

export interface SalesMonitoringState {
  salesMonitoringData: SalesMonitoring[];
  loading: boolean;
  error: string | null;
}

export const initialState: SalesMonitoringState = {
  salesMonitoringData: [],
  loading: false,
  error: null
};
