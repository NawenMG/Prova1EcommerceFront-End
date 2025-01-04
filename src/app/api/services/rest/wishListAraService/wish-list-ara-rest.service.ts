// services/wishlist.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface Prodotto {
  id: string;
  nome: string;
  prezzo: number;
}

export interface WishList {
  userId: string;
  prodotti: Prodotto[];
}

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private baseUrl = 'http://localhost:8080/api/wishlist';

  // Aggiungi prodotti alla wishlist
  aggiungiProdotti(userId: string, prodotti: Prodotto[]): Observable<string> {
    return from(axios.post(`${this.baseUrl}/${userId}/prodotti`, prodotti)).pipe(
      map((response) => response.data),
      catchError(() => of('Errore durante l\'aggiunta dei prodotti alla wishlist'))
    );
  }

  // Recupera la wishlist di un utente
  trovaWishList(userId: string): Observable<WishList | null> {
    return from(axios.get<WishList>(`${this.baseUrl}/${userId}`)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Rimuovi un prodotto dalla wishlist
  rimuoviProdotto(userId: string, prodottoId: string): Observable<string> {
    return from(axios.delete(`${this.baseUrl}/${userId}/prodotti/${prodottoId}`)).pipe(
      map((response) => response.data),
      catchError(() => of('Errore durante la rimozione del prodotto dalla wishlist'))
    );
  }

  // Resetta la wishlist di un utente
  resetWishList(userId: string): Observable<string> {
    return from(axios.delete(`${this.baseUrl}/${userId}`)).pipe(
      map((response) => response.data),
      catchError(() => of('Errore durante il reset della wishlist'))
    );
  }
}
