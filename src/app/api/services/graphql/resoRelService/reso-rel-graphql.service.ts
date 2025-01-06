// services/resi-graphql.service.ts
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

export interface Resi {
  id: string;
  motivo: string;
  dataReso: string;
}

@Injectable({
  providedIn: 'root',
})
export class ResiGraphqlService {
  constructor(private apollo: Apollo) {}

  // Query per ottenere tutti i resi con parametri dinamici
  getResi(paramQuery: any, resi: Partial<Resi>): Observable<Resi[]> {
    const GET_RESI = gql`
      query GetResi($paramQuery: ParamQueryInput, $resi: ResiInput) {
        resi(paramQuery: $paramQuery, resi: $resi) {
          id
          motivo
          dataReso
        }
      }
    `;

    return this.apollo
      .watchQuery<{ resi: Resi[] }>({
        query: GET_RESI,
        variables: { paramQuery, resi },
      })
      .valueChanges.pipe(map((result) => result.data.resi));
  }
}
