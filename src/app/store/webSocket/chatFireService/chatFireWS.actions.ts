import { createAction, props } from '@ngrx/store';
import { ChatSystem, MessageData } from './chatFireWS.state';

// ---------------------------
// Creazione di una chat
// ---------------------------
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

// ---------------------------
// Invio di un messaggio
// ---------------------------
export const sendMessage = createAction(
  '[Chat] Send Message',
  props<{ message: MessageData; chatId: string }>()
);
export const sendMessageSuccess = createAction('[Chat] Send Message Success');
export const sendMessageFailure = createAction(
  '[Chat] Send Message Failure',
  props<{ error: string }>()
);

// ---------------------------
// Aggiornamento (modifica) della chat (es. aggiunta nuovi utenti)
// ---------------------------
export const updateChat = createAction(
  '[Chat] Update Chat',
  props<{ chat: ChatSystem }>()
);
export const updateChatSuccess = createAction(
  '[Chat] Update Chat Success',
  props<{ chat: ChatSystem }>()
);
export const updateChatFailure = createAction(
  '[Chat] Update Chat Failure',
  props<{ error: string }>()
);

// ---------------------------
// Eliminazione della chat
// ---------------------------
export const deleteChat = createAction(
  '[Chat] Delete Chat',
  props<{ chatId: string }>()
);
export const deleteChatSuccess = createAction('[Chat] Delete Chat Success');
export const deleteChatFailure = createAction(
  '[Chat] Delete Chat Failure',
  props<{ error: string }>()
);

// ---------------------------
// Eliminazione di un messaggio
// deleteForAll: true se il messaggio viene eliminato per tutti (entro 5 minuti),
//             false se l’eliminazione è solo per il richiedente (dopo 5 minuti)
// ---------------------------
export const deleteMessage = createAction(
  '[Chat] Delete Message',
  props<{ messageId: string; chatId: string; deleteForAll: boolean }>()
);
export const deleteMessageSuccess = createAction('[Chat] Delete Message Success');
export const deleteMessageFailure = createAction(
  '[Chat] Delete Message Failure',
  props<{ error: string }>()
);

// ---------------------------
// Aggiornamento (modifica) di un messaggio
// ---------------------------
export const updateMessage = createAction(
  '[Chat] Update Message',
  props<{ message: MessageData; chatId: string }>()
);
export const updateMessageSuccess = createAction('[Chat] Update Message Success');
export const updateMessageFailure = createAction(
  '[Chat] Update Message Failure',
  props<{ error: string }>()
);
