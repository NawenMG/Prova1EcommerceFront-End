// services/notifications-websocket.service.ts
import { Injectable } from '@angular/core';
import { Client, over } from 'stompjs';
import { Observable, Subject } from 'rxjs';

export interface Notification {
  id: string;
  titolo: string;
  contenuto: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsWebSocketService {
  private stompClient: Client | null = null;
  private notificationSubject = new Subject<Notification>();
  private messagesSubject = new Subject<any>();

  constructor() {
    this.connect();
  }

  // Connessione al WebSocket
  private connect(): void {
    const socket = new WebSocket('ws://localhost:8080/ws');
    this.stompClient = over(socket);

    this.stompClient.connect({}, () => {
      console.log('Connesso al WebSocket Server Notifications!');
      this.stompClient?.subscribe('/topic/notifications', (message) =>
        this.notificationSubject.next(JSON.parse(message.body))
      );
    });
  }

  // Crea una nuova notifica
  createNotification(notification: Notification): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/createNotification', {}, JSON.stringify(notification));
      observer.next();
      observer.complete();
    });
  }

  // Aggiorna una notifica esistente
  updateNotification(notification: Notification): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/updateNotification', {}, JSON.stringify(notification));
      observer.next();
      observer.complete();
    });
  }

  // Elimina una notifica
  deleteNotification(notificationId: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/deleteNotification', {}, notificationId);
      observer.next();
      observer.complete();
    });
  }

  // Aggiungi un messaggio a una notifica
  addMessageToNotification(notificationId: string, message: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/addMessageToNotification', {}, JSON.stringify({ notificationId, message }));
      observer.next();
      observer.complete();
    });
  }

  // Ricevi aggiornamenti sulle notifiche
  getNotificationUpdates(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }

  // Ricevi aggiornamenti sui messaggi di una notifica
  getMessageUpdates(notificationId: string): Observable<any> {
    return this.messagesSubject.asObservable();
  }
}
