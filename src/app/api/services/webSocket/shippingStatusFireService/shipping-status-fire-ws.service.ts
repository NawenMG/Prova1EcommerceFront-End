// services/shipping-status-websocket.service.ts
import { Injectable } from '@angular/core';
import { Client, over } from 'stompjs';
import { Observable, Subject } from 'rxjs';

export interface ShippingStatus {
  id: string;
  stato: string;
  currentLocation: string;
}

@Injectable({
  providedIn: 'root',
})
export class ShippingStatusWebSocketService {
  private stompClient: Client | null = null;
  private shippingStatusSubject = new Subject<ShippingStatus>();

  constructor() {
    this.connect();
  }

  // Connessione al WebSocket
  private connect(): void {
    const socket = new WebSocket('ws://localhost:8080/ws');
    this.stompClient = over(socket);

    this.stompClient.connect({}, () => {
      console.log('Connesso al WebSocket Server ShippingStatus!');
      this.stompClient?.subscribe('/topic/shippingStatus', (message) =>
        this.shippingStatusSubject.next(JSON.parse(message.body))
      );
    });
  }

  // Crea una nuova spedizione
  createShippingStatus(shippingStatus: ShippingStatus): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/createShippingStatus', {}, JSON.stringify(shippingStatus));
      observer.next();
      observer.complete();
    });
  }

  // Aggiorna una spedizione esistente
  updateShippingStatus(shippingStatus: ShippingStatus): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/updateShippingStatus', {}, JSON.stringify(shippingStatus));
      observer.next();
      observer.complete();
    });
  }

  // Elimina una spedizione
  deleteShippingStatus(shippingStatusId: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.stompClient?.send('/app/deleteShippingStatus', {}, shippingStatusId);
      observer.next();
      observer.complete();
    });
  }

  // Ricevi aggiornamenti sullo stato della spedizione
  getShippingStatusUpdates(): Observable<ShippingStatus> {
    return this.shippingStatusSubject.asObservable();
  }
}
