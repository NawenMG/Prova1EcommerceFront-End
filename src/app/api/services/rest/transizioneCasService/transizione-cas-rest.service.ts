// services/transizioni.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface Transizione {
  id: string;
  descrizione: string;
  importo: number;
  dataTransazione: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransizioniService {
  private baseUrl = 'http://localhost:8080/api/archiviazioneTransizioni';

  // Ottieni tutte le transizioni
  getAllTransizioni(): Observable<Transizione[]> {
    return from(axios.get<Transizione[]>(`${this.baseUrl}/all`)).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error('Errore durante il caricamento delle transizioni:', error);
        return of([]);
      })
    );
  }

  // Ottieni una transizione per ID
  getTransizioneById(id: string): Observable<Transizione | null> {
    return from(axios.get<Transizione>(`${this.baseUrl}/${id}`)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Crea una nuova transizione
  createTransizione(transizione: Transizione): Observable<void> {
    return from(axios.post(this.baseUrl, transizione)).pipe(
      map(() => void 0),
      catchError((error) => {
        console.error('Errore durante la creazione della transizione:', error);
        return of(void 0);
      })
    );
  }

  // Aggiorna una transizione esistente
  updateTransizione(id: string, transizione: Transizione): Observable<void> {
    return from(axios.put(`${this.baseUrl}/${id}`, transizione)).pipe(
      map(() => void 0),
      catchError((error) => {
        console.error('Errore durante l\'aggiornamento della transizione:', error);
        return of(void 0);
      })
    );
  }

  // Elimina una transizione per ID
  deleteTransizione(id: string): Observable<void> {
    return from(axios.delete(`${this.baseUrl}/${id}`)).pipe(
      map(() => void 0),
      catchError((error) => {
        console.error('Errore durante l\'eliminazione della transizione:', error);
        return of(void 0);
      })
    );
  }
}
