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
  private baseUrl = 'http://localhost:8080/graphql';

  // Query per ottenere le risposte del server in un intervallo di tempo
  findServerResponsesByTimeRange(startTime: string, endTime: string): Observable<ServerResponse[]> {
    const query = `
      query {
        findServerResponsesByTimeRange(startTime: "${startTime}", endTime: "${endTime}") {
          id server endpoint responseTime timestamp
        }
      }`;
    return from(axios.post<{ data: { findServerResponsesByTimeRange: ServerResponse[] } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.findServerResponsesByTimeRange),
      catchError(() => of([]))
    );
  }

  // Query per ottenere le risposte per server
  findServerResponsesByServer(server: string): Observable<ServerResponse[]> {
    const query = `
      query {
        findServerResponsesByServer(server: "${server}") {
          id server endpoint responseTime timestamp
        }
      }`;
    return from(axios.post<{ data: { findServerResponsesByServer: ServerResponse[] } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.findServerResponsesByServer),
      catchError(() => of([]))
    );
  }
}
