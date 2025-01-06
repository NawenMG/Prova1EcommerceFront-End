// store/user-analysis.state.ts
export interface UserAnalysis {
  id: string;
  utente: string;
  tipoDiDispositivo: string;
  azione: string;
  durata: number;
  timestamp: string;
}

export interface UserAnalysisState {
  userAnalysisData: UserAnalysis[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserAnalysisState = {
  userAnalysisData: [],
  loading: false,
  error: null
};
