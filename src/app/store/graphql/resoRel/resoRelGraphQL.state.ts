// store/resi.state.ts
export interface Resi {
  id: string;
  motivo: string;
  dataReso: string;
}

export interface ResiState {
  resi: Resi[];
  loading: boolean;
  error: string | null;
}

export const initialState: ResiState = {
  resi: [],
  loading: false,
  error: null
};
