// services/ordini.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface Ordine {
  id: string;
  nomeCliente: string;
  dataOrdine: string;
  importo: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrdiniService {
  private baseUrl = 'http://localhost:8080/archiviazioneOrdini';

  // Ottieni tutti gli ordini
  getAllOrdini(): Observable<Ordine[]> {
    return from(axios.get<Ordine[]>(this.baseUrl)).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error('Errore nel caricamento degli ordini:', error);
        return of([]);
      })
    );
  }

  // Ottieni un ordine per ID
  getOrdineById(id: string): Observable<Ordine | null> {
    return from(axios.get<Ordine>(`${this.baseUrl}/${id}`)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Crea un nuovo ordine
  createOrdine(ordine: Ordine): Observable<void> {
    return from(axios.post(this.baseUrl, ordine)).pipe(
      map(() => void 0),
      catchError((error) => {
        console.error('Errore nella creazione dell\'ordine:', error);
        return of(void 0);
      })
    );
  }

  // Aggiorna un ordine
  updateOrdine(id: string, ordine: Ordine): Observable<void> {
    return from(axios.put(`${this.baseUrl}/${id}`, ordine)).pipe(
      map(() => void 0),
      catchError((error) => {
        console.error('Errore nell\'aggiornamento dell\'ordine:', error);
        return of(void 0);
      })
    );
  }

  // Elimina un ordine
  deleteOrdine(id: string): Observable<void> {
    return from(axios.delete(`${this.baseUrl}/${id}`)).pipe(
      map(() => void 0),
      catchError((error) => {
        console.error('Errore nella cancellazione dell\'ordine:', error);
        return of(void 0);
      })
    );
  }
}
