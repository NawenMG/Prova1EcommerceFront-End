// services/ordini-rest.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface Ordini {
  id: string;
  dataOrdine: string;
  importo: number;
  stato: string;
}

export interface Pagamenti {
  id: string;
  metodo: string;
  importo: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrdiniRestService {
  private baseUrl = 'http://localhost:8080/api/ordini/rest';

  // Query per ottenere ordini con parametri dinamici
  queryOrdini(paramQuery: any, ordini: Partial<Ordini>): Observable<Ordini[]> {
    return from(
      axios.get<Ordini[]>(`${this.baseUrl}/query`, { params: paramQuery, data: ordini })
    ).pipe(
      map(response => response.data),
      catchError(() => of([]))
    );
  }

  // Inserimento di un nuovo ordine
  inserisciOrdine(pagamenti: Pagamenti, ordini: Ordini): Observable<string> {
    return from(
      axios.post<string>(`${this.baseUrl}/inserisci`, { ...pagamenti, ...ordini })
    ).pipe(
      map(response => response.data),
      catchError(() => of('Errore nell\'inserimento dell\'ordine'))
    );
  }

  // Aggiornamento di un ordine
  aggiornaOrdine(orderID: string, ordini: Ordini): Observable<string> {
    return from(
      axios.put<string>(`${this.baseUrl}/aggiorna/${orderID}`, ordini)
    ).pipe(
      map(response => response.data),
      catchError(() => of('Errore nell\'aggiornamento dell\'ordine'))
    );
  }

  // Eliminazione di un ordine
  eliminaOrdine(orderID: string): Observable<string> {
    return from(
      axios.delete<string>(`${this.baseUrl}/elimina/${orderID}`)
    ).pipe(
      map(() => 'Ordine eliminato con successo'),
      catchError(() => of('Errore durante l\'eliminazione dell\'ordine'))
    );
  }

  // Generazione di ordini casuali
  salvaOrdiniCasuali(numero: number): Observable<string> {
    return from(
      axios.post<string>(`${this.baseUrl}/salva-casuali/${numero}`)
    ).pipe(
      map(response => response.data),
      catchError(() => of('Errore nella generazione degli ordini casuali'))
    );
  }
}
