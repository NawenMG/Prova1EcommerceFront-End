// services/user-analysis.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface UserAnalysis {
  id: string;
  userTag: string;
  deviceType: string;
  action: string;
  duration: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserAnalysisService {
  private baseUrl = 'http://localhost:8080/api/user-analyses';

  // Inserisci una singola analisi
  insertUserAnalysis(analysis: UserAnalysis): Observable<void> {
    return from(axios.post<void>(`${this.baseUrl}`, analysis)).pipe(
      map(() => undefined),
      catchError(() => of(undefined))
    );
  }

  // Inserisci un batch di analisi
  insertBatchUserAnalysis(analysisList: UserAnalysis[]): Observable<void> {
    return from(axios.post<void>(`${this.baseUrl}/batch`, analysisList)).pipe(
      map(() => undefined),
      catchError(() => of(undefined))
    );
  }

  // Elimina analisi per tag utente
  deleteUserAnalysisByTag(tag: string): Observable<void> {
    return from(axios.delete<void>(`${this.baseUrl}/by-tag/${tag}`)).pipe(
      map(() => undefined),
      catchError(() => of(undefined))
    );
  }

  // Genera analisi casuali
  generateRandomUserAnalysis(count: number = 5): Observable<UserAnalysis[]> {
    return from(axios.get<UserAnalysis[]>(`${this.baseUrl}/generateUserAnalysis?count=${count}`)).pipe(
      map(response => response.data),
      catchError(() => of([]))
    );
  }
}
