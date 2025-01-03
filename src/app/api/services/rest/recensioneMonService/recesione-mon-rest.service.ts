// services/recensioni.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface Recensione {
  id: string;
  userId: string;
  productId: string;
  titolo: string;
  descrizione: string;
  valutazione: number;
  dataCreazione: string;
}

@Injectable({
  providedIn: 'root',
})
export class RecensioniService {
  private baseUrl = 'http://localhost:8080/api/recensioni';

  // Ottieni tutte le recensioni per un determinato prodotto
  getRecensioniByProductId(productId: string): Observable<Recensione[]> {
    return from(axios.get<Recensione[]>(`${this.baseUrl}/product/${productId}`)).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error('Errore nel caricamento delle recensioni:', error);
        return of([]);
      })
    );
  }

  // Ottieni tutte le recensioni per un determinato utente
  getRecensioniByUserId(userId: string): Observable<Recensione[]> {
    return from(axios.get<Recensione[]>(`${this.baseUrl}/user/${userId}`)).pipe(
      map((response) => response.data),
      catchError(() => of([]))
    );
  }

  // Crea una nuova recensione
  createRecensione(recensione: Recensione): Observable<Recensione | null> {
    return from(axios.post<Recensione>(this.baseUrl, recensione)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Aggiorna una recensione esistente
  updateRecensione(id: string, recensione: Recensione): Observable<Recensione | null> {
    return from(axios.put<Recensione>(`${this.baseUrl}/${id}`, recensione)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Elimina una recensione per ID
  deleteRecensione(id: string): Observable<void> {
    return from(axios.delete(`${this.baseUrl}/${id}`)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }
}
