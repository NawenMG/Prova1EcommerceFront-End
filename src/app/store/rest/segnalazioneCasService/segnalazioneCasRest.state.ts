// store/segnalazioni.state.ts
export interface Segnalazione {
  id: string;
  titolo: string;
  descrizione: string;
  dataCreazione: string;
}

export interface SegnalazioniState {
  segnalazioni: Segnalazione[];
  selectedSegnalazione: Segnalazione | null;
  loading: boolean;
  error: string | null;
}

export const initialState: SegnalazioniState = {
  segnalazioni: [],
  selectedSegnalazione: null,
  loading: false,
  error: null
};
