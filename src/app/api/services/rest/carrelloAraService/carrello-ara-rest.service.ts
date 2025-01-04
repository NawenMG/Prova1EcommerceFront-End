// services/carrello.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface Prodotto {
  id: string;
  nome: string;
  prezzo: number;
  quantita: number;
}

export interface Carrello {
  userId: string;
  prodotti: Prodotto[];
}

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  private baseUrl = 'http://localhost:8080/api/carrello';

  // Aggiungi prodotti al carrello
  aggiungiProdotti(userId: string, prodotti: Prodotto[]): Observable<string> {
    return from(axios.post(`${this.baseUrl}/${userId}/prodotti`, prodotti)).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error('Errore durante l\'aggiunta di prodotti:', error);
        return of('Errore durante l\'aggiunta di prodotti');
      })
    );
  }

  // Ottieni il carrello di un utente
  getCarrello(userId: string): Observable<Carrello | null> {
    return from(axios.get<Carrello>(`${this.baseUrl}/${userId}`)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Rimuovi un prodotto dal carrello
  rimuoviProdotto(userId: string, prodottoId: string): Observable<string> {
    return from(axios.delete(`${this.baseUrl}/${userId}/prodotti/${prodottoId}`)).pipe(
      map((response) => response.data),
      catchError(() => of('Errore durante la rimozione del prodotto'))
    );
  }

  // Svuota il carrello
  svuotaCarrello(userId: string): Observable<string> {
    return from(axios.delete(`${this.baseUrl}/${userId}`)).pipe(
      map((response) => response.data),
      catchError(() => of('Errore durante lo svuotamento del carrello'))
    );
  }
}
