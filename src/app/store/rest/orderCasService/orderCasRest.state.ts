// store/ordini.state.ts
export interface Ordine {
  id: string;
  nomeCliente: string;
  dataOrdine: string;
  importo: number;
}

export interface OrdiniState {
  ordini: Ordine[];
  selectedOrdine: Ordine | null;
  loading: boolean;
  error: string | null;
}

export const initialState: OrdiniState = {
  ordini: [],
  selectedOrdine: null,
  loading: false,
  error: null
};
