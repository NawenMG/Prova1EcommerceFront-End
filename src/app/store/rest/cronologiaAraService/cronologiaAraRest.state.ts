// store/cronologia.state.ts
export interface Prodotto {
  id: string;
  nome: string;
  prezzo: number;
}

export interface Cronologia {
  userId: string;
  prodotti: Prodotto[];
}

export interface CronologiaState {
  cronologia: Cronologia | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CronologiaState = {
  cronologia: null,
  loading: false,
  error: null
};
