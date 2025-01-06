// store/sales-monitoring.state.ts
export interface SalesMonitoring {
  id: string;
  prodotto: string;
  venditore: string;
  categoriaProdotto: string;
  dataVendita: string;
  ricavo: number;
}

export interface SalesMonitoringState {
  sales: SalesMonitoring[];
  loading: boolean;
  error: string | null;
}

export const initialState: SalesMonitoringState = {
  sales: [],
  loading: false,
  error: null
};
