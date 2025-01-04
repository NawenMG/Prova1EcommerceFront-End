// services/graphdb.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, catchError, map, of } from 'rxjs';

export interface NodoUtente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
}

export interface NodoProdotto {
  id: number;
  nome: string;
  descrizione: string;
  prezzo: number;
}

export interface NodoCategoriaProdotto {
  id: number;
  nome: string;
}

export interface NodoLocazioneUtente {
  id: number;
  citta: string;
  stato: string;
}

@Injectable({
  providedIn: 'root',
})
export class GraphDBService {
  private baseUrl = 'http://localhost:8080/api';

  // Creazione generica di entità
  createEntity(entityType: string, entity: any): Observable<any> {
    return from(axios.post(`${this.baseUrl}/${entityType}`, entity)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Aggiorna un'entità esistente
  updateEntity(entityType: string, id: number, entity: any): Observable<any> {
    return from(axios.put(`${this.baseUrl}/${entityType}/${id}`, entity)).pipe(
      map((response) => response.data),
      catchError(() => of(null))
    );
  }

  // Elimina un'entità
  deleteEntity(entityType: string, id: number): Observable<void> {
    return from(axios.delete(`${this.baseUrl}/${entityType}/${id}`)).pipe(
      map(() => void 0),
      catchError(() => of(void 0))
    );
  }
}
