// store/setting-site.state.ts
export interface SettingSite {
  //tema: string;
  lingua: string;
  //notifiche: boolean;
}

export interface SettingSiteState {
  settings: SettingSite | null;
  loading: boolean;
  error: string | null;
}

export const initialState: SettingSiteState = {
  settings: null,
  loading: false,
  error: null
};
