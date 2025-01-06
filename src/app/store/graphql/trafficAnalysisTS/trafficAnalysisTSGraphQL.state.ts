// store/traffic-analysis.state.ts
export interface TrafficAnalysis {
  id: string;
  urlPagina: string;
  visitCount: number;
  timestamp: string;
}

export interface TrafficAnalysisState {
  trafficData: TrafficAnalysis[];
  loading: boolean;
  error: string | null;
}

export const initialState: TrafficAnalysisState = {
  trafficData: [],
  loading: false,
  error: null
};
