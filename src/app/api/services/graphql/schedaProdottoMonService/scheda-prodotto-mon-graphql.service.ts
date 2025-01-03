// services/schede-prodotti.service.ts
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map, catchError, of } from 'rxjs';

export interface SchedaProdotto {
  id: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  dataInserimento: string;
}

@Injectable({
  providedIn: 'root',
})
export class SchedeProdottiService {
  constructor(private apollo: Apollo) {}

  // Query per ottenere tutte le schede prodotto con parametri dinamici
  getSchedeProdotti(paramQuery: any, schedeProdotti: any): Observable<SchedaProdotto[]> {
    const GET_SCHEDE_PRODOTTI = gql`
      query ($paramQuery: ParamQueryDbDocInput, $schedeProdotti: SchedeProdottiInput) {
        schedeprodotti(paramQuery: $paramQuery, schedeProdotti: $schedeProdotti) {
          id
          nome
          descrizione
          prezzo
          dataInserimento
        }
      }
    `;

    return this.apollo.query<{ schedeprodotti: SchedaProdotto[] }>({
      query: GET_SCHEDE_PRODOTTI,
      variables: { paramQuery, schedeProdotti },
    }).pipe(
      map((response) => response.data.schedeprodotti),
      catchError((error) => {
        console.error('Errore durante il caricamento delle schede prodotto:', error);
        return of([]);
      })
    );
  }
}
