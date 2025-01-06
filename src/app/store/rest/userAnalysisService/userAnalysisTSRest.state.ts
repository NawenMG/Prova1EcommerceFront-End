// store/user-analysis.state.ts
export interface UserAnalysis {
  id: string;
  userTag: string;
  deviceType: string;
  action: string;
  duration: number;
  timestamp: string;
}

export interface UserAnalysisState {
  userAnalysisList: UserAnalysis[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserAnalysisState = {
  userAnalysisList: [],
  loading: false,
  error: null
};
