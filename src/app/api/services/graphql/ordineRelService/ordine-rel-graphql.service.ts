// services/ordini-graphql.service.ts
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

export interface Ordini {
  id: string;
  cliente: string;
  totale: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrdiniGraphqlService {
  constructor(private apollo: Apollo) {}

  // Query per ottenere tutti gli ordini con parametri dinamici
  getOrdini(paramQuery: any, ordini: Partial<Ordini>): Observable<Ordini[]> {
    const GET_ORDINI = gql`
      query GetOrdini($paramQuery: ParamQueryInput, $ordini: OrdiniInput) {
        ordini(paramQuery: $paramQuery, ordini: $ordini) {
          id
          cliente
          totale
        }
      }
    `;

    return this.apollo
      .watchQuery<{ ordini: Ordini[] }>({
        query: GET_ORDINI,
        variables: { paramQuery, ordini },
      })
      .valueChanges.pipe(map((result) => result.data.ordini));
  }
}
