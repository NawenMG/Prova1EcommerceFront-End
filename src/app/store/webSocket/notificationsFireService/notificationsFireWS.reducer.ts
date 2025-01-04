// store/notifications.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as NotificationsActions from './notificationsFireWS.actions';
import { NotificationsState, initialState } from './notificationsFireWS.state';

export const notificationsReducer = createReducer(
  initialState,
  on(NotificationsActions.createNotification, (state) => ({ ...state, loading: true })),
  on(NotificationsActions.createNotificationSuccess, (state) => ({
    ...state,
    loading: false,
    error: null
  })),
  on(NotificationsActions.createNotificationFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
