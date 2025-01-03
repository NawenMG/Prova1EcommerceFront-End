// services/segnalazioni.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface Segnalazione {
  id: string;
  titolo: string;
  descrizione: string;
  dataCreazione: string;
}

@Injectable({
  providedIn: 'root',
})
export class SegnalazioniService {
  private baseUrl = 'http://localhost:8080/api/segnalazioni';

  // Ottieni tutte le segnalazioni
  getAllSegnalazioni(): Observable<Segnalazione[]> {
    return from(axios.get<Segnalazione[]>(this.baseUrl)).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error('Errore durante il caricamento delle segnalazioni:', error);
        return of([]);
      })
    );
  }

  // Ottieni una segnalazione per ID
  getSegnalazioneById(id: string): Observable<Segnalazione | null> {
    return from(axios.get<Segnalazione>(`${this.baseUrl}/${id}`)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Crea una nuova segnalazione
  createSegnalazione(segnalazione: Segnalazione): Observable<void> {
    return from(axios.post(this.baseUrl, segnalazione)).pipe(
      map(() => void 0),
      catchError((error) => {
        console.error('Errore durante la creazione della segnalazione:', error);
        return of(void 0);
      })
    );
  }

  // Aggiorna una segnalazione esistente
  updateSegnalazione(id: string, segnalazione: Segnalazione): Observable<void> {
    return from(axios.put(`${this.baseUrl}/${id}`, segnalazione)).pipe(
      map(() => void 0),
      catchError((error) => {
        console.error('Errore durante l\'aggiornamento della segnalazione:', error);
        return of(void 0);
      })
    );
  }

  // Elimina una segnalazione per ID
  deleteSegnalazione(id: string): Observable<void> {
    return from(axios.delete(`${this.baseUrl}/${id}`)).pipe(
      map(() => void 0),
      catchError((error) => {
        console.error('Errore durante l\'eliminazione della segnalazione:', error);
        return of(void 0);
      })
    );
  }
}
