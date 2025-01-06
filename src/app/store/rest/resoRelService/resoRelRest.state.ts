// store/resi.state.ts
export interface Reso {
  id: string;
  motivo: string;
  stato: string;
}

export interface ResiState {
  resi: Reso[];
  loading: boolean;
  error: string | null;
}

export const initialState: ResiState = {
  resi: [],
  loading: false,
  error: null
};
