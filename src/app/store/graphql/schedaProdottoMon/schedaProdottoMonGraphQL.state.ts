// store/schede-prodotti.state.ts
export interface SchedaProdotto {
  id: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  dataInserimento: string;
}

export interface SchedeProdottiState {
  schedeProdotti: SchedaProdotto[];
  loading: boolean;
  error: string | null;
}

export const initialState: SchedeProdottiState = {
  schedeProdotti: [],
  loading: false,
  error: null
};
