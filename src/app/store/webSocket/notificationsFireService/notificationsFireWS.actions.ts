// store/notifications.actions.ts
import { createAction, props } from '@ngrx/store';
import { Notification } from './notificationsFireWS.state';

// Crea una nuova notifica
export const createNotification = createAction(
  '[Notifications] Create Notification',
  props<{ notification: Notification }>()
);
export const createNotificationSuccess = createAction('[Notifications] Create Notification Success');
export const createNotificationFailure = createAction(
  '[Notifications] Create Notification Failure',
  props<{ error: string }>()
);

// Aggiorna una notifica
export const updateNotification = createAction(
  '[Notifications] Update Notification',
  props<{ notification: Notification }>()
);
export const updateNotificationSuccess = createAction('[Notifications] Update Notification Success');
export const updateNotificationFailure = createAction(
  '[Notifications] Update Notification Failure',
  props<{ error: string }>()
);

// Elimina una notifica
export const deleteNotification = createAction(
  '[Notifications] Delete Notification',
  props<{ notificationId: string }>()
);
export const deleteNotificationSuccess = createAction('[Notifications] Delete Notification Success');
export const deleteNotificationFailure = createAction(
  '[Notifications] Delete Notification Failure',
  props<{ error: string }>()
);
