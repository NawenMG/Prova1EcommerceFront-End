// store/prodotti.state.ts
export interface Prodotti {
  id: string;
  nome: string;
  prezzo: number;
}

export interface ProdottiState {
  prodotti: Prodotti[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProdottiState = {
  prodotti: [],
  loading: false,
  error: null
};
