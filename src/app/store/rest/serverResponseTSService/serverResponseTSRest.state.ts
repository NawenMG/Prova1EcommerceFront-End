// store/server-response.state.ts
export interface ServerResponse {
  id: string;
  server: string;
  endpoint: string;
  responseTime: number;
  timestamp: string;
}

export interface ServerResponseState {
  serverResponses: ServerResponse[];
  loading: boolean;
  error: string | null;
}

export const initialState: ServerResponseState = {
  serverResponses: [],
  loading: false,
  error: null
};
