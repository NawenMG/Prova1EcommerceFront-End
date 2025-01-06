// services/prodotti-rest.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Prodotti {
  id: string;
  nome: string;
  prezzo: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProdottiRestService {
  private readonly API_URL = '/prodotti';

  // Query avanzata per ottenere prodotti
  queryProdotti(paramQuery: any, prodotti: Partial<Prodotti>): Observable<Prodotti[]> {
    return from(
      axios.post<Prodotti[]>(`${this.API_URL}/query`, { paramQuery, prodotti })
    ).pipe(map(response => response.data));
  }

  // Inserisci un nuovo prodotto
  inserisciProdotto(prodotti: Prodotti): Observable<string> {
    return from(
      axios.post<string>(`${this.API_URL}`, prodotti)
    ).pipe(map(response => response.data));
  }

  // Aggiorna un prodotto esistente
  aggiornaProdotto(productId: string, prodotti: Prodotti): Observable<string> {
    return from(
      axios.put<string>(`${this.API_URL}/${productId}`, prodotti)
    ).pipe(map(response => response.data));
  }

  // Elimina un prodotto
  eliminaProdotto(productId: string): Observable<string> {
    return from(
      axios.delete<string>(`${this.API_URL}/${productId}`)
    ).pipe(map(response => response.data));
  }

  // Salva prodotti casuali
  salvaProdottiCasuali(numero: number): Observable<string> {
    return from(
      axios.post<string>(`${this.API_URL}/random/${numero}`)
    ).pipe(map(response => response.data));
  }
}
