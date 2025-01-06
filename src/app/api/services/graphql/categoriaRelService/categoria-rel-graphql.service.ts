// services/categorie-graphql.service.ts
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

export interface Categorie {
  id: string;
  nome: string;
  descrizione: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategorieGraphqlService {
  constructor(private apollo: Apollo) {}

  // Query per ottenere tutte le categorie con parametri dinamici
  getCategorie(paramQuery: any, categorie: Partial<Categorie>): Observable<Categorie[]> {
    const GET_CATEGORIES = gql`
      query GetCategories($paramQuery: ParamQueryInput, $categorie: CategorieInput) {
        categorie(paramQuery: $paramQuery, categorie: $categorie) {
          id
          nome
          descrizione
        }
      }
    `;

    return this.apollo
      .watchQuery<{ categorie: Categorie[] }>({
        query: GET_CATEGORIES,
        variables: { paramQuery, categorie },
      })
      .valueChanges.pipe(map((result) => result.data.categorie));
  }
}
