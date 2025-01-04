// store/notifications.state.ts
export interface Notification {
  id: string;
  titolo: string;
  contenuto: string;
}

export interface NotificationsState {
  notifications: Notification[];
  loading: boolean;
  error: string | null;
}

export const initialState: NotificationsState = {
  notifications: [],
  loading: false,
  error: null
};
