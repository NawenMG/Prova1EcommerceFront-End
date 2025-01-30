export interface OAuthState {
  authenticated: boolean;
  role: string;
  loading: boolean;
  error: string | null;
}

export const initialOAuthState: OAuthState = {
  authenticated: false,
  role: 'GUEST',
  loading: false,
  error: null
};
