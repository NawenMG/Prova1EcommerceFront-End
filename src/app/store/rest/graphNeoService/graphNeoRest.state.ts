// store/graphdb.state.ts
export interface NodoUtente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
}

export interface NodoProdotto {
  id: number;
  nome: string;
  descrizione: string;
  prezzo: number;
}

export interface NodoCategoriaProdotto {
  id: number;
  nome: string;
}

export interface NodoLocazioneUtente {
  id: number;
  citta: string;
  stato: string;
}

export interface GraphDBState {
  utenti: NodoUtente[];
  prodotti: NodoProdotto[];
  categorieProdotti: NodoCategoriaProdotto[];
  locazioniUtenti: NodoLocazioneUtente[];
  loading: boolean;
  error: string | null;
}

export const initialState: GraphDBState = {
  utenti: [],
  prodotti: [],
  categorieProdotti: [],
  locazioniUtenti: [],
  loading: false,
  error: null
};
