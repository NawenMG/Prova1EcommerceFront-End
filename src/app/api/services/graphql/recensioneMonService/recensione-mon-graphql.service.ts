// services/recensioni.service.ts
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map, catchError, of } from 'rxjs';

export interface Recensione {
  id: string;
  titolo: string;
  descrizione: string;
  valutazione: number;
  dataCreazione: string;
}

@Injectable({
  providedIn: 'root',
})
export class RecensioniService {
  constructor(private apollo: Apollo) {}

  // Query per ottenere tutte le recensioni con parametri dinamici
  getRecensioni(paramQuery: any, recensione: any): Observable<Recensione[]> {
    const GET_RECENSIONI = gql`
      query ($paramQuery: ParamQueryDbDocInput, $recensione: RecensioniInput) {
        recensioni(paramQuery: $paramQuery, recensioni: $recensione) {
          id
          titolo
          descrizione
          valutazione
          dataCreazione
        }
      }
    `;

    return this.apollo.query<{ recensioni: Recensione[] }>({
      query: GET_RECENSIONI,
      variables: { paramQuery, recensione },
    }).pipe(
      map((response) => response.data.recensioni),
      catchError((error) => {
        console.error('Errore durante il caricamento delle recensioni:', error);
        return of([]);
      })
    );
  }
}
