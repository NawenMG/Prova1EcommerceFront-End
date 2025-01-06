// store/user.state.ts
export interface User {
  id: string;
  nome: string;
  cognome: string;
  nomeUtente: string;
  email: string;
  ruolo: string;
  password: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null
};
