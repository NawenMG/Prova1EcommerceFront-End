// store/chat.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ChatState } from './chatFireWS.state';

export const selectChatState = createFeatureSelector<ChatState>('chat');

export const selectChat = createSelector(
  selectChatState,
  (state) => state.chat
);

export const selectLoading = createSelector(
  selectChatState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectChatState,
  (state) => state.error
);
