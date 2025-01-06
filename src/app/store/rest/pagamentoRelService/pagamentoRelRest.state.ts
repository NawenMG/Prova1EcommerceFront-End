// store/pagamenti.state.ts
export interface Pagamenti {
  id: string;
  metodo: string;
  importo: number;
}

export interface PagamentiState {
  pagamenti: Pagamenti[];
  loading: boolean;
  error: string | null;
}

export const initialState: PagamentiState = {
  pagamenti: [],
  loading: false,
  error: null
};
