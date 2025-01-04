// services/chat-websocket.service.ts
import { Injectable } from '@angular/core';
import { Client, over } from 'stompjs';
import { Observable, Subject } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class ChatWebSocketService {
  private stompClient: Client | null = null;
  private chatSubject = new Subject<ChatSystem>();
  private messageSubject = new Subject<MessageData>();

  constructor() {
    this.connect();
  }

  private connect(): void {
    const socket = new WebSocket('ws://localhost:8080/ws');
    this.stompClient = over(socket);

    this.stompClient.connect({}, () => {
      console.log('Connesso al WebSocket Server!');
      this.stompClient?.subscribe('/topic/chats', (message) =>
        this.chatSubject.next(JSON.parse(message.body))
      );
      this.stompClient?.subscribe('/topic/messages', (message) =>
        this.messageSubject.next(JSON.parse(message.body))
      );
    });
  }

  createChat(chat: ChatSystem): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/createChat', {}, JSON.stringify(chat));
      observer.next();
      observer.complete();
    });
  }

  sendMessage(message: MessageData, chatId: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/sendMessage', {}, JSON.stringify({ message, chatId }));
      observer.next();
      observer.complete();
    });
  }

  getChatUpdates(): Observable<ChatSystem> {
    return this.chatSubject.asObservable();
  }

  getMessageUpdates(): Observable<MessageData> {
    return this.messageSubject.asObservable();
  }
}
