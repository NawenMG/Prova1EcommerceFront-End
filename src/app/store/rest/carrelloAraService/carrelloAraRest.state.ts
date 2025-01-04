// store/carrello.state.ts
export interface Prodotto {
  id: string;
  nome: string;
  prezzo: number;
  quantita: number;
}

export interface Carrello {
  userId: string;
  prodotti: Prodotto[];
}

export interface CarrelloState {
  carrello: Carrello | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CarrelloState = {
  carrello: null,
  loading: false,
  error: null
};
