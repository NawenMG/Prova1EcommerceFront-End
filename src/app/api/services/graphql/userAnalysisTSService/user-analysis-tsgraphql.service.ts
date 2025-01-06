// services/user-analysis.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface UserAnalysis {
  id: string;
  utente: string;
  tipoDiDispositivo: string;
  azione: string;
  durata: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserAnalysisService {
  private baseUrl = 'http://localhost:8080/graphql';

  // Query per ottenere le analisi in un intervallo temporale
  findByTimeRange(startTime: string, endTime: string): Observable<UserAnalysis[]> {
    const query = `
      query {
        findByTimeRange(startTime: "${startTime}", endTime: "${endTime}") {
          id utente tipoDiDispositivo azione durata timestamp
        }
      }`;
    return from(axios.post<{ data: { findByTimeRange: UserAnalysis[] } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.findByTimeRange),
      catchError(() => of([]))
    );
  }

  // Query per ottenere le analisi per utente
  findByUser(utente: string): Observable<UserAnalysis[]> {
    const query = `
      query {
        findByUser(utente: "${utente}") {
          id utente tipoDiDispositivo azione durata timestamp
        }
      }`;
    return from(axios.post<{ data: { findByUser: UserAnalysis[] } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.findByUser),
      catchError(() => of([]))
    );
  }

  // Query per ottenere la durata media delle sessioni per utente
  getAverageDurationByUser(): Observable<Map<string, number>> {
    const query = `
      query {
        getAverageDurationByUser {
          key value
        }
      }`;
    return from(axios.post<{ data: { getAverageDurationByUser: Map<string, number> } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.getAverageDurationByUser),
      catchError(() => of(new Map()))
    );
  }
}
