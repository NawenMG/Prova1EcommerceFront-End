// services/server-response.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface ServerResponse {
  id: string;
  server: string;
  endpoint: string;
  responseTime: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServerResponseService {
  private baseUrl = 'http://localhost:8080/api/server-responses';

  // Inserisci una singola risposta del server
  insert(serverResponse: ServerResponse): Observable<void> {
    return from(axios.post<void>(`${this.baseUrl}/add`, serverResponse)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Inserisci un batch di risposte del server
  insertBatch(serverResponseList: ServerResponse[]): Observable<void> {
    return from(axios.post<void>(`${this.baseUrl}/addBatch`, serverResponseList)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Aggiorna una risposta del server
  update(serverResponse: ServerResponse): Observable<void> {
    return from(axios.put<void>(`${this.baseUrl}/update`, serverResponse)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Elimina risposte in base al server
  deleteByServer(server: string): Observable<void> {
    return from(axios.delete<void>(`${this.baseUrl}/delete/${server}`)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Genera risposte casuali
  generateRandomServerResponse(count: number = 5): Observable<ServerResponse[]> {
    return from(axios.get<ServerResponse[]>(`${this.baseUrl}/generateServerResponse?count=${count}`)).pipe(
      map(response => response.data),
      catchError(() => of([]))
    );
  }
}
