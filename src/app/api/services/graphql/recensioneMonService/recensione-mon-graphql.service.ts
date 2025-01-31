import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map, catchError, of } from 'rxjs';

export interface Recensione {
  id: string;
  productId: string
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

  // ✅ Query per ottenere recensioni con paginazione
  getRecensioni(paramQuery: any, recensione: any, limit: number = 5, offset: number = 0): Observable<Recensione[]> {
    const GET_RECENSIONI = gql`
      query ($paramQuery: ParamQueryDbDocInput, $recensione: RecensioniInput, $limit: Int, $offset: Int) {
        recensioni(paramQuery: $paramQuery, recensioni: $recensione, limit: $limit, offset: $offset) {
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
      variables: { paramQuery, recensione, limit, offset }, // ✅ Aggiunto supporto per paginazione
    }).pipe(
      map((response) => response.data.recensioni),
      catchError((error) => {
        console.error('Errore durante il caricamento delle recensioni:', error);
        return of([]);
      })
    );
  }
}
