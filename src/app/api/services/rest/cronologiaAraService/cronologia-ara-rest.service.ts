// services/cronologia.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface Prodotto {
  id: string;
  nome: string;
  prezzo: number;
}

export interface Cronologia {
  userId: string;
  prodotti: Prodotto[];
}

@Injectable({
  providedIn: 'root',
})
export class CronologiaService {
  private baseUrl = 'http://localhost:8080/api/cronologia';

  // Aggiungi prodotti alla cronologia di un utente
  aggiungiProdotti(userId: string, prodotti: Prodotto[]): Observable<void> {
    return from(axios.post(`${this.baseUrl}/aggiungi/${userId}`, prodotti)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Recupera la cronologia di un utente
  visualizzaCronologia(userId: string): Observable<Cronologia | null> {
    return from(axios.get<Cronologia>(`${this.baseUrl}/visualizza/${userId}`)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Elimina un singolo prodotto dalla cronologia
  eliminaSingolaRicerca(userId: string, productId: string): Observable<void> {
    return from(axios.delete(`${this.baseUrl}/elimina/${userId}/${productId}`)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }

  // Elimina tutta la cronologia di un utente
  eliminaTutteLeRicerche(userId: string): Observable<void> {
    return from(axios.delete(`${this.baseUrl}/eliminaTutte/${userId}`)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }
}
