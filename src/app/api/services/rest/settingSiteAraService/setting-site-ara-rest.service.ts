import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface SettingSite {
  tema: string;
  lingua: string;
  notifiche: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SettingSiteService {
  private baseUrl = 'http://localhost:8080/settings';

  // Recupera le impostazioni del sito per un determinato utente
  getImpostazioni(userId: string): Observable<SettingSite | null> {
    return from(axios.get<SettingSite>(`${this.baseUrl}/${userId}`)).pipe(
      map(response => response.data),
      catchError(() => of(null))
    );
  }

  // Salva o aggiorna le impostazioni per un utente
  salvaImpostazioni(userId: string, settings: SettingSite): Observable<string> {
    return from(axios.post(`${this.baseUrl}/save/${userId}`, settings)).pipe(
      map(response => response.data),
      catchError(() => of('Errore durante il salvataggio delle impostazioni'))
    );
  }

  // Resetta le impostazioni di un utente
  resetImpostazioni(userId: string): Observable<string> {
    return from(axios.delete(`${this.baseUrl}/reset/${userId}`)).pipe(
      map(response => response.data),
      catchError(() => of('Errore durante il reset delle impostazioni'))
    );
  }
}
