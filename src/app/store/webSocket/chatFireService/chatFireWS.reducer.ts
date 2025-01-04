// store/chat.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ChatActions from './chatFireWS.actions';
import { ChatState, initialState } from './chatFireWS.state';

export const chatReducer = createReducer(
  initialState,
  on(ChatActions.createChat, (state) => ({ ...state, loading: true })),
  on(ChatActions.createChatSuccess, (state, { chat }) => ({
    ...state,
    chat,
    loading: false,
    error: null
  })),
  on(ChatActions.createChatFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ChatActions.sendMessageSuccess, (state) => ({
    ...state,
    loading: false
  })),
  on(ChatActions.deleteChatSuccess, (state) => ({
    ...state,
    chat: null,
    loading: false
  }))
);
