// services/schede-prodotti.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface SchedaProdotto {
  id: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  dataInserimento: string;
}

@Injectable({
  providedIn: 'root',
})
export class SchedeProdottiService {
  private baseUrl = 'http://localhost:8080/api/schede-prodotti';

  // Ottieni prodotti per nome
  getProdottiByNome(nome: string): Observable<SchedaProdotto[]> {
    return from(axios.get<SchedaProdotto[]>(`${this.baseUrl}/nome/${nome}`)).pipe(
      map((response) => response.data),
      catchError(() => of([]))
    );
  }

  // Ottieni prodotti con prezzo inferiore a un valore specifico
  getProdottiByPrezzoLessThan(prezzo: number): Observable<SchedaProdotto[]> {
    return from(axios.get<SchedaProdotto[]>(`${this.baseUrl}/prezzo-meno-di/${prezzo}`)).pipe(
      map((response) => response.data),
      catchError(() => of([]))
    );
  }

  // Aggiungi un nuovo prodotto
  createSchedaProdotto(prodotto: SchedaProdotto): Observable<SchedaProdotto | null> {
    return from(axios.post<SchedaProdotto>(this.baseUrl, prodotto)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Aggiorna un prodotto esistente
  updateSchedaProdotto(id: string, prodotto: SchedaProdotto): Observable<SchedaProdotto | null> {
    return from(axios.put<SchedaProdotto>(`${this.baseUrl}/${id}`, prodotto)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Elimina un prodotto per ID
  deleteSchedaProdotto(id: string): Observable<void> {
    return from(axios.delete(`${this.baseUrl}/${id}`)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Ottieni prodotti random
  getRandomProdotti(count: number): Observable<SchedaProdotto[]> {
    return from(axios.get<SchedaProdotto[]>(`${this.baseUrl}/random/${count}`)).pipe(
      map((response) => response.data),
      catchError(() => of([]))
    );
  }
}
