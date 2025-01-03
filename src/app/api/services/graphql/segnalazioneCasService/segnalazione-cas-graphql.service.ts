// services/segnalazioni.service.ts
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, catchError, map, of, retry } from 'rxjs';

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
  constructor(private apollo: Apollo) {}

  // Query per ottenere tutte le segnalazioni
  findAllSegnalazioni(): Observable<Segnalazione[]> {
    const GET_ALL_SEGNALAZIONI = gql`
      query {
        findAllSegnalazioni {
          id
          titolo
          descrizione
          dataCreazione
        }
      }
    `;

    return this.apollo.query<{ findAllSegnalazioni: Segnalazione[] }>({
      query: GET_ALL_SEGNALAZIONI
    }).pipe(
      retry(2),
      map((response) => response.data.findAllSegnalazioni),
      catchError((error) => {
        console.error('Errore durante il caricamento delle segnalazioni:', error);
        return of([]);
      })
    );
  }

  // Query per ottenere una segnalazione per ID
  findSegnalazioneById(id: string): Observable<Segnalazione | null> {
    const GET_SEGNALAZIONE_BY_ID = gql`
      query($id: String!) {
        findSegnalazioneById(id: $id) {
          id
          titolo
          descrizione
          dataCreazione
        }
      }
    `;

    return this.apollo.query<{ findSegnalazioneById: Segnalazione }>({
      query: GET_SEGNALAZIONE_BY_ID,
      variables: { id },
    }).pipe(
      map((response) => response.data.findSegnalazioneById),
      catchError((error) => {
        console.error('Errore durante il caricamento della segnalazione:', error);
        return of(null);
      })
    );
  }

  // Query dinamica per segnalazioni
  dynamicQuery(paramQuery: any, segnalazione: any): Observable<Segnalazione[]> {
    const DYNAMIC_QUERY = gql`
      query($paramQuery: ParamQueryCassandraInput, $segnalazione: ArchiviazioneSegnalazioniInput) {
        queryDinamica(paramQuery: $paramQuery, segnalazione: $segnalazione) {
          id
          titolo
          descrizione
          dataCreazione
        }
      }
    `;

    return this.apollo.query<{ queryDinamica: Segnalazione[] }>({
      query: DYNAMIC_QUERY,
      variables: { paramQuery, segnalazione }
    }).pipe(
      map((response) => response.data.queryDinamica),
      catchError((error) => {
        console.error('Errore durante la query dinamica:', error);
        return of([]);
      })
    );
  }
}
