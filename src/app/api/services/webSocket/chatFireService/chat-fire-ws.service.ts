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
  // Se necessario, puoi estendere questa interfaccia (ad esempio aggiungendo la lista degli utenti)
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
      // Sottoscrizione agli aggiornamenti generali delle chat
      this.stompClient?.subscribe('/topic/chats', (message) =>
        this.chatSubject.next(JSON.parse(message.body))
      );
      // Sottoscrizione agli aggiornamenti dei messaggi
      this.stompClient?.subscribe('/topic/messages', (message) =>
        this.messageSubject.next(JSON.parse(message.body))
      );
    });
  }

  // Creazione di una nuova chat
  createChat(chat: ChatSystem): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/createChat', {}, JSON.stringify(chat));
      observer.next();
      observer.complete();
    });
  }

  // Invio di un messaggio
  sendMessage(message: MessageData, chatId: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/sendMessage', {}, JSON.stringify({ message, chatId }));
      observer.next();
      observer.complete();
    });
  }

  // Aggiornamento della chat (per esempio per aggiungere nuovi utenti)
  updateChat(chat: ChatSystem): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/updateChat', {}, JSON.stringify(chat));
      observer.next();
      observer.complete();
    });
  }

  // Eliminazione di una chat
  deleteChat(chatId: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/deleteChat', {}, JSON.stringify({ chatId }));
      observer.next();
      observer.complete();
    });
  }

  // Eliminazione di un messaggio.
  // Il parametro deleteForAll (true/false) indica se l’eliminazione va fatta per tutti (entro 5 minuti)
  // oppure solo per il mittente (dopo 5 minuti).
  deleteMessage(messageId: string, chatId: string, deleteForAll: boolean): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send(
        '/app/deleteMessage',
        {},
        JSON.stringify({ messageId, chatId, deleteForAll })
      );
      observer.next();
      observer.complete();
    });
  }

  // Aggiornamento (modifica) di un messaggio
  updateMessage(message: MessageData, chatId: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/updateMessage', {}, JSON.stringify({ message, chatId }));
      observer.next();
      observer.complete();
    });
  }

  // Metodi per ottenere gli aggiornamenti in tempo reale
  getChatUpdates(): Observable<ChatSystem> {
    return this.chatSubject.asObservable();
  }

  getMessageUpdates(): Observable<MessageData> {
    return this.messageSubject.asObservable();
  }
}
