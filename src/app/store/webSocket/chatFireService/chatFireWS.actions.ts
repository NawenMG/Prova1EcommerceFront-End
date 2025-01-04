// store/chat.actions.ts
import { createAction, props } from '@ngrx/store';
import { ChatSystem, MessageData } from './chatFireWS.state';

// Creazione di una chat
export const createChat = createAction(
  '[Chat] Create Chat',
  props<{ chat: ChatSystem }>()
);
export const createChatSuccess = createAction(
  '[Chat] Create Chat Success',
  props<{ chat: ChatSystem }>()
);
export const createChatFailure = createAction(
  '[Chat] Create Chat Failure',
  props<{ error: string }>()
);

// Invia un messaggio
export const sendMessage = createAction(
  '[Chat] Send Message',
  props<{ message: MessageData; chatId: string }>()
);
export const sendMessageSuccess = createAction('[Chat] Send Message Success');
export const sendMessageFailure = createAction(
  '[Chat] Send Message Failure',
  props<{ error: string }>()
);

// Elimina una chat
export const deleteChat = createAction(
  '[Chat] Delete Chat',
  props<{ chatId: string }>()
);
export const deleteChatSuccess = createAction('[Chat] Delete Chat Success');
export const deleteChatFailure = createAction(
  '[Chat] Delete Chat Failure',
  props<{ error: string }>()
);
