// store/notifications.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { NotificationsState } from './notificationsFireWS.state';

export const selectNotificationsState = createFeatureSelector<NotificationsState>('notifications');

export const selectNotifications = createSelector(
  selectNotificationsState,
  (state) => state.notifications
);

export const selectLoading = createSelector(
  selectNotificationsState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectNotificationsState,
  (state) => state.error
);
