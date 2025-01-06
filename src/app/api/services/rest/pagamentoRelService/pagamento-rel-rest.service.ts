// services/pagamenti-rest.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Pagamenti {
  id: string;
  metodo: string;
  importo: number;
}

@Injectable({
  providedIn: 'root',
})
export class PagamentiRestService {
  private readonly API_URL = '/api/pagamenti/rest';

  // Query dinamica per ottenere i pagamenti
  queryPagamenti(paramQuery: any, pagamenti: Partial<Pagamenti>): Observable<Pagamenti[]> {
    return from(
      axios.get<Pagamenti[]>(`${this.API_URL}/query`, {
        params: paramQuery,
        data: pagamenti
      })
    ).pipe(map(response => response.data));
  }

  // Inserisci un nuovo pagamento
  inserisciPagamento(pagamenti: Pagamenti): Observable<string> {
    return from(
      axios.post<string>(`${this.API_URL}/inserisci`, pagamenti)
    ).pipe(map(response => response.data));
  }

  // Aggiorna un pagamento esistente
  aggiornaPagamento(paymentID: string, pagamenti: Pagamenti): Observable<string> {
    return from(
      axios.put<string>(`${this.API_URL}/aggiorna/${paymentID}`, pagamenti)
    ).pipe(map(response => response.data));
  }

  // Elimina un pagamento
  eliminaPagamento(paymentID: string): Observable<string> {
    return from(
      axios.delete<string>(`${this.API_URL}/elimina/${paymentID}`)
    ).pipe(map(response => response.data));
  }

  // Salva pagamenti casuali
  salvaPagamentiCasuali(numero: number): Observable<string> {
    return from(
      axios.post<string>(`${this.API_URL}/salva-casuali/${numero}`)
    ).pipe(map(response => response.data));
  }
}
