export interface Prodotti {
  id: string;
  nome: string;
  prezzo: number;
  immagineUrl?: string; // ✅ Ora è opzionale
  descrizione?: string;
  categoria?: string;
  brand?: string;
  rating?: number;
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
