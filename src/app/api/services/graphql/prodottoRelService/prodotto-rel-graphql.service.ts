import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

export interface Prodotti {
  id: string;
  nome: string;
  prezzo: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProdottiGraphqlService {
  constructor(private apollo: Apollo) {}

  // Query per ottenere tutti i prodotti con parametri dinamici e paginazione
  getProdotti(paramQuery: any, prodotti: Partial<Prodotti>, limit: number, offset: number): Observable<Prodotti[]> {
    const GET_PRODOTTI = gql`
      query GetProdotti($paramQuery: ParamQueryInput, $prodotti: ProdottiInput, $limit: Int, $offset: Int) {
        prodotti(paramQuery: $paramQuery, prodotti: $prodotti, limit: $limit, offset: $offset) {
          id
          nome
          prezzo
        }
      }
    `;

    return this.apollo
      .watchQuery<{ prodotti: Prodotti[] }>({
        query: GET_PRODOTTI,
        variables: { paramQuery, prodotti, limit, offset },
      })
      .valueChanges.pipe(map((result) => result.data.prodotti));
  }
}
