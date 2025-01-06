// store/traffic-analysis.state.ts
export interface TrafficAnalysis {
  id: string;
  url: string;
  visits: number;
  timestamp: string;
}

export interface TrafficAnalysisState {
  trafficAnalysisList: TrafficAnalysis[];
  loading: boolean;
  error: string | null;
}

export const initialState: TrafficAnalysisState = {
  trafficAnalysisList: [],
  loading: false,
  error: null
};
