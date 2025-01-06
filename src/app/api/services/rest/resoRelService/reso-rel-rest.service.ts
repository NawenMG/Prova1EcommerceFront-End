// services/resi-rest.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface Reso {
  id: string;
  motivo: string;
  stato: string;
}

@Injectable({
  providedIn: 'root',
})
export class ResiRestService {
  private baseUrl = 'http://localhost:8080/api/resi/rest';

  // Ottieni resi tramite query
  queryResi(paramQuery: any, reso: Partial<Reso>): Observable<Reso[]> {
    return from(axios.get<Reso[]>(`${this.baseUrl}/query`, { params: paramQuery, data: reso })).pipe(
      map((response) => response.data),
      catchError(() => of([]))
    );
  }

  // Inserisci un nuovo reso
  inserisciReso(reso: Reso): Observable<string> {
    return from(axios.post<string>(`${this.baseUrl}/inserisci`, reso)).pipe(
      map((response) => response.data),
      catchError(() => of('Errore nell’inserimento'))
    );
  }

  // Aggiorna un reso esistente
  aggiornaReso(id: string, reso: Reso): Observable<string> {
    return from(axios.put<string>(`${this.baseUrl}/aggiorna/${id}`, reso)).pipe(
      map((response) => response.data),
      catchError(() => of('Errore nell’aggiornamento'))
    );
  }

  // Elimina un reso
  eliminaReso(id: string): Observable<string> {
    return from(axios.delete<string>(`${this.baseUrl}/elimina/${id}`)).pipe(
      map(() => 'Reso eliminato con successo'),
      catchError(() => of('Errore durante l’eliminazione'))
    );
  }
}
