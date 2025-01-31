
export interface OAuthState {
  authenticated: boolean;
  role: string;
  userId: string;
  loading: boolean;
  error: string | null;
}

export const initialOAuthState: OAuthState = {
  authenticated: false,
  role: 'GUEST',
  userId: '',
  loading: false,
  error: null
};

