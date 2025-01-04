// store/chat.state.ts
export interface MessageData {
  id: string;
  contenuto: string;
  mittente: string;
}

export interface ChatSystem {
  id: string;
  nome: string;
  messaggi: MessageData[];
}

export interface ChatState {
  chat: ChatSystem | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ChatState = {
  chat: null,
  loading: false,
  error: null
};
