// services/categorie-rest.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Categorie {
  id: string;
  nome: string;
  descrizione: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategorieRestService {
  private readonly API_URL = '/api/categorie/rest';

  // Query dinamica per ottenere le categorie
  queryCategorie(paramQuery: any, categorie: Partial<Categorie>): Observable<Categorie[]> {
    return from(
      axios.get<Categorie[]>(`${this.API_URL}/query`, {
        params: paramQuery,
        data: categorie
      })
    ).pipe(map(response => response.data));
  }

  // Inserisci una nuova categoria
  inserisciCategoria(categorie: Categorie): Observable<string> {
    return from(
      axios.post<string>(`${this.API_URL}/inserisci`, categorie)
    ).pipe(map(response => response.data));
  }

  // Aggiorna una categoria esistente
  aggiornaCategoria(categoryID: string, categorie: Categorie): Observable<string> {
    return from(
      axios.put<string>(`${this.API_URL}/aggiorna/${categoryID}`, categorie)
    ).pipe(map(response => response.data));
  }

  // Elimina una categoria
  eliminaCategoria(categoryID: string): Observable<string> {
    return from(
      axios.delete<string>(`${this.API_URL}/elimina/${categoryID}`)
    ).pipe(map(response => response.data));
  }

  // Salva categorie casuali
  salvaCategorieCasuali(numero: number): Observable<string> {
    return from(
      axios.post<string>(`${this.API_URL}/salva-casuali/${numero}`)
    ).pipe(map(response => response.data));
  }
}
