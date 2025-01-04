// store/chat.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ChatWebSocketService } from '../../../api/services/webSocket/chatFireService/chat-fire-ws.service';
import * as ChatActions from './chatFireWS.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ChatEffects {
  constructor(private actions$: Actions, private chatService: ChatWebSocketService) {}

  // Effetto per creare una chat con gestione dell'Observable
  createChat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.createChat),
      mergeMap((action) =>
        this.chatService.createChat(action.chat).pipe(
          map(() => ChatActions.createChatSuccess({ chat: action.chat })),
          catchError((error) => of(ChatActions.createChatFailure({ error: error.message })))
        )
      )
    )
  );

  // Effetto per inviare un messaggio con gestione dell'Observable
  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.sendMessage),
      mergeMap((action) =>
        this.chatService.sendMessage(action.message, action.chatId).pipe(
          map(() => ChatActions.sendMessageSuccess()),
          catchError((error) => of(ChatActions.sendMessageFailure({ error: error.message })))
        )
      )
    )
  );
}
