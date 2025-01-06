// services/prodotti-graphql.service.ts
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

  // Query per ottenere tutti i prodotti con parametri dinamici
  getProdotti(paramQuery: any, prodotti: Partial<Prodotti>): Observable<Prodotti[]> {
    const GET_PRODOTTI = gql`
      query GetProdotti($paramQuery: ParamQueryInput, $prodotti: ProdottiInput) {
        prodotti(paramQuery: $paramQuery, prodotti: $prodotti) {
          id
          nome
          prezzo
        }
      }
    `;

    return this.apollo
      .watchQuery<{ prodotti: Prodotti[] }>({
        query: GET_PRODOTTI,
        variables: { paramQuery, prodotti },
      })
      .valueChanges.pipe(map((result) => result.data.prodotti));
  }
}
