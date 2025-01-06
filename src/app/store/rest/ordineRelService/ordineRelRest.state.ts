// store/ordini.state.ts
export interface Ordini {
  id: string;
  dataOrdine: string;
  importo: number;
  stato: string;
}

export interface Pagamenti {
  id: string;
  metodo: string;
  importo: number;
}

export interface OrdiniState {
  ordini: Ordini[];
  loading: boolean;
  error: string | null;
}

export const initialState: OrdiniState = {
  ordini: [],
  loading: false,
  error: null
};
