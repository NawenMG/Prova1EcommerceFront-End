// services/pagamenti-graphql.service.ts
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

export interface Pagamenti {
  id: string;
  metodoPagamento: string;
  importo: number;
}

@Injectable({
  providedIn: 'root',
})
export class PagamentiGraphqlService {
  constructor(private apollo: Apollo) {}

  // Query per ottenere tutti i pagamenti con parametri dinamici
  getPagamenti(paramQuery: any, pagamenti: Partial<Pagamenti>): Observable<Pagamenti[]> {
    const GET_PAGAMENTI = gql`
      query GetPagamenti($paramQuery: ParamQueryInput, $pagamenti: PagamentiInput) {
        pagamenti(paramQuery: $paramQuery, pagamenti: $pagamenti) {
          id
          metodoPagamento
          importo
        }
      }
    `;

    return this.apollo
      .watchQuery<{ pagamenti: Pagamenti[] }>({
        query: GET_PAGAMENTI,
        variables: { paramQuery, pagamenti },
      })
      .valueChanges.pipe(map((result) => result.data.pagamenti));
  }
}
