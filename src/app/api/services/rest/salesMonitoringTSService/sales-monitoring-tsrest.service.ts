// services/sales-monitoring.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface SalesMonitoring {
  id: string;
  venditore: string;
  prodotto: string;
  quantità: number;
  dataVendita: string;
  ricavo: number;
}

@Injectable({
  providedIn: 'root',
})
export class SalesMonitoringService {
  private baseUrl = 'http://localhost:8080/sales-monitoring';

  // Inserisci un singolo monitoraggio delle vendite
  addSalesMonitoring(salesMonitoring: SalesMonitoring): Observable<void> {
    return from(axios.post<void>(`${this.baseUrl}/add`, salesMonitoring)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Inserisci un batch di monitoraggi delle vendite
  addSalesMonitoringBatch(salesMonitoringList: SalesMonitoring[]): Observable<void> {
    return from(axios.post<void>(`${this.baseUrl}/addBatch`, salesMonitoringList)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Aggiorna un monitoraggio delle vendite
  updateSalesMonitoring(oldSalesMonitoring: SalesMonitoring, newSalesMonitoring: SalesMonitoring): Observable<void> {
    return from(axios.put<void>(`${this.baseUrl}/update`, { oldSalesMonitoring, newSalesMonitoring })).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Elimina i monitoraggi di un venditore
  deleteByVendor(venditore: string): Observable<void> {
    return from(axios.delete<void>(`${this.baseUrl}/delete/${venditore}`)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Genera monitoraggi casuali
  generateRandomSalesMonitoring(count: number = 5): Observable<SalesMonitoring[]> {
    return from(axios.get<SalesMonitoring[]>(`${this.baseUrl}/generateSalesMonitoring?count=${count}`)).pipe(
      map(response => response.data),
      catchError(() => of([]))
    );
  }
}
