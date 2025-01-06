// services/sales-monitoring.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface SalesMonitoring {
  id: string;
  prodotto: string;
  venditore: string;
  categoriaProdotto: string;
  dataVendita: string;
  ricavo: number;
}

@Injectable({
  providedIn: 'root',
})
export class SalesMonitoringService {
  private baseUrl = 'http://localhost:8080/graphql';

  // Query per ottenere i monitoraggi delle vendite in un intervallo di tempo
  findSalesByTimeRange(startTime: string, endTime: string): Observable<SalesMonitoring[]> {
    const query = `
      query {
        findSalesByTimeRange(startTime: "${startTime}", endTime: "${endTime}") {
          id prodotto venditore categoriaProdotto dataVendita ricavo
        }
      }`;
    return from(axios.post<{ data: { findSalesByTimeRange: SalesMonitoring[] } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.findSalesByTimeRange),
      catchError(() => of([]))
    );
  }

  // Query per prodotto specifico
  findSalesByProduct(prodotto: string): Observable<SalesMonitoring[]> {
    const query = `
      query {
        findSalesByProduct(prodotto: "${prodotto}") {
          id prodotto venditore categoriaProdotto dataVendita ricavo
        }
      }`;
    return from(axios.post<{ data: { findSalesByProduct: SalesMonitoring[] } }>(this.baseUrl, { query })).pipe(
      map((response) => response.data.data.findSalesByProduct),
      catchError(() => of([]))
    );
  }
}
