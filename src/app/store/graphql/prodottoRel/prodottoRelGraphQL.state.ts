// store/prodotti.state.ts
export interface Prodotti {
  id: string;
  nome: string;
  prezzo: number;
  immagineUrl: string;
  descrizione: string;
  categoria: string;
  brand: string;
  rating: number;
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
