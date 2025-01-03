// services/transizioni.service.ts
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, catchError, map, of, retry } from 'rxjs';

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
  constructor(private apollo: Apollo) {}

  // Query per ottenere tutte le transizioni
  findAllTransizioni(): Observable<Transizione[]> {
    const GET_ALL_TRANSIZIONI = gql`
      query {
        findAllTransizioni {
          id
          descrizione
          importo
          dataTransazione
        }
      }
    `;

    return this.apollo.query<{ findAllTransizioni: Transizione[] }>({
      query: GET_ALL_TRANSIZIONI
    }).pipe(
      retry(2),
      map(response => response.data.findAllTransizioni),
      catchError(() => of([]))
    );
  }

  // Query per ottenere una transizione per ID
  findTransizioneById(id: string): Observable<Transizione | null> {
    const GET_TRANSIZIONE_BY_ID = gql`
      query($id: String!) {
        findTransizioneById(id: $id) {
          id
          descrizione
          importo
          dataTransazione
        }
      }
    `;

    return this.apollo.query<{ findTransizioneById: Transizione }>({
      query: GET_TRANSIZIONE_BY_ID,
      variables: { id }
    }).pipe(
      map(response => response.data.findTransizioneById),
      catchError(() => of(null))
    );
  }

  // Query dinamica
  dynamicQuery(paramQuery: any, transizione: any): Observable<Transizione[]> {
    const DYNAMIC_QUERY = gql`
      query($paramQuery: ParamQueryCassandraInput, $transizione: ArchiviazioneTransizioniInput) {
        queryDinamica(paramQuery: $paramQuery, transizione: $transizione) {
          id
          descrizione
          importo
          dataTransazione
        }
      }
    `;

    return this.apollo.query<{ queryDinamica: Transizione[] }>({
      query: DYNAMIC_QUERY,
      variables: { paramQuery, transizione }
    }).pipe(
      map(response => response.data.queryDinamica),
      catchError(() => of([]))
    );
  }
}
