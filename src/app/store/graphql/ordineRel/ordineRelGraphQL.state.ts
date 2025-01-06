// store/ordini.state.ts
export interface Ordini {
  id: string;
  cliente: string;
  totale: number;
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
