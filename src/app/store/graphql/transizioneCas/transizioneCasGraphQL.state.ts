// store/transizioni.state.ts
export interface Transizione {
  id: string;
  descrizione: string;
  importo: number;
  dataTransazione: string;
}

export interface TransizioniState {
  transizioni: Transizione[];
  selectedTransizione: Transizione | null;
  loading: boolean;
  error: string | null;
}

export const initialState: TransizioniState = {
  transizioni: [],
  selectedTransizione: null,
  loading: false,
  error: null
};
