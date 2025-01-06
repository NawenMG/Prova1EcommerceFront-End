// services/traffic-analysis.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface TrafficAnalysis {
  id: string;
  url: string;
  visits: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class TrafficAnalysisService {
  private baseUrl = 'http://localhost:8080/api/traffic-analysis';

  // Inserisci un'analisi singola
  insertTrafficAnalysis(analysis: TrafficAnalysis): Observable<string> {
    return from(axios.post<string>(`${this.baseUrl}/insert`, analysis)).pipe(
      map(response => response.data),
      catchError(() => of('Error inserting traffic analysis'))
    );
  }

  // Inserisci un batch di analisi
  insertBatchTrafficAnalysis(analysisList: TrafficAnalysis[]): Observable<string> {
    return from(axios.post<string>(`${this.baseUrl}/insert-batch`, analysisList)).pipe(
      map(response => response.data),
      catchError(() => of('Error inserting batch traffic analysis'))
    );
  }

  // Elimina analisi per URL
  deleteByUrl(url: string): Observable<string> {
    return from(axios.delete<string>(`${this.baseUrl}/delete/${url}`)).pipe(
      map(response => response.data),
      catchError(() => of('Error deleting traffic analysis for URL'))
    );
  }

  // Genera analisi casuali
  generateRandomTrafficAnalysis(count: number = 5): Observable<TrafficAnalysis[]> {
    return from(axios.get<TrafficAnalysis[]>(`${this.baseUrl}/generateTrafficAnalysis?count=${count}`)).pipe(
      map(response => response.data),
      catchError(() => of([]))
    );
  }
}
