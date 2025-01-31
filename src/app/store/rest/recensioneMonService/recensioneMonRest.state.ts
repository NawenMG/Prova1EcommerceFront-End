// store/recensioni.state.ts
export interface Recensione {
  id: string;
  //userId: string;
  productId: string;
  titolo: string;
  descrizione: string;
  valutazione: number;
  dataCreazione: string;
}

export interface RecensioniState {
  recensioni: Recensione[];
  selectedRecensione: Recensione | null;
  loading: boolean;
  error: string | null;
}

export const initialState: RecensioniState = {
  recensioni: [],
  selectedRecensione: null,
  loading: false,
  error: null
};
