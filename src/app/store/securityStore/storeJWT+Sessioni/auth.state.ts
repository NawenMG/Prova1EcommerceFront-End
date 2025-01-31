

export interface AuthState {
  authenticated: boolean;
  role: string;
  loading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  authenticated: false,
  role: 'GUEST',
  loading: false,
  error: null
};
