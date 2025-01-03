// store/recensioni.state.ts
export interface Recensione {
  id: string;
  titolo: string;
  descrizione: string;
  valutazione: number;
  dataCreazione: string;
}

export interface RecensioniState {
  recensioni: Recensione[];
  loading: boolean;
  error: string | null;
}

export const initialState: RecensioniState = {
  recensioni: [],
  loading: false,
  error: null
};
