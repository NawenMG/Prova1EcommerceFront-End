// store/notifications.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NotificationsWebSocketService } from '../../../api/services/webSocket/notificationsFireService/notifications-fire-ws.service';
import * as NotificationsActions from './notificationsFireWS.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class NotificationsEffects {
  constructor(private actions$: Actions, private notificationsService: NotificationsWebSocketService) {}

  createNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotificationsActions.createNotification),
      mergeMap((action) =>
        this.notificationsService.createNotification(action.notification).pipe(
          map(() => NotificationsActions.createNotificationSuccess()),
          catchError((error) => of(NotificationsActions.createNotificationFailure({ error: error.message })))
        )
      )
    )
  );
}
