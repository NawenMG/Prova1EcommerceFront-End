// services/traffic-analysis.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface TrafficAnalysis {
  id: string;
  urlPagina: string;
  visitCount: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class TrafficAnalysisService {
  private baseUrl = 'http://localhost:8080/graphql';

  // Query per ottenere le analisi in un intervallo temporale
  findByTimeRange(startTime: string, endTime: string): Observable<TrafficAnalysis[]> {
    const query = `
      query {
        findByTimeRange(startTime: "${startTime}", endTime: "${endTime}") {
          id urlPagina visitCount timestamp
        }
      }`;
    return from(axios.post<{ data: { findByTimeRange: TrafficAnalysis[] } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.findByTimeRange),
      catchError(() => of([]))
    );
  }

  // Query per ottenere le analisi per una URL specifica
  findByUrl(urlPagina: string): Observable<TrafficAnalysis[]> {
    const query = `
      query {
        findByUrl(urlPagina: "${urlPagina}") {
          id urlPagina visitCount timestamp
        }
      }`;
    return from(axios.post<{ data: { findByUrl: TrafficAnalysis[] } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.findByUrl),
      catchError(() => of([]))
    );
  }

  // Query per ottenere la media delle visite per URL
  getAverageVisitsByUrl(): Observable<TrafficAnalysis[]> {
    const query = `
      query {
        getAverageVisitsByUrl {
          id urlPagina visitCount timestamp
        }
      }`;
    return from(axios.post<{ data: { getAverageVisitsByUrl: TrafficAnalysis[] } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.getAverageVisitsByUrl),
      catchError(() => of([]))
    );
  }
}
