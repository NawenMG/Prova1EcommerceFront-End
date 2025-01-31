import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, catchError, map, of } from 'rxjs';

export interface Prodotti {
  id: string;
  nome: string;
  prezzo: number;
  immagineUrl?: string;
  descrizione?: string;
  categoria?: string;
  brand?: string;
  rating?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProdottiGraphqlService {
  constructor(private apollo: Apollo) {}

  getProdotti(paramQuery: any, prodotti: Partial<Prodotti>, limit: number, offset: number): Observable<Prodotti[]> {
    const GET_PRODOTTI = gql`
      query GetProdotti($paramQuery: ParamQueryInput, $prodotti: ProdottiInput, $limit: Int, $offset: Int) {
        prodotti(paramQuery: $paramQuery, prodotti: $prodotti, limit: $limit, offset: $offset) {
          id
          nome
          prezzo
          immagineUrl
          descrizione
          categoria
          brand
          rating
        }
      }
    `;

    return this.apollo.watchQuery<{ prodotti: Prodotti[] }>({
      query: GET_PRODOTTI,
      variables: { paramQuery, prodotti, limit, offset },
    }).valueChanges.pipe(
      map((result) =>
        result.data.prodotti.map((prod) => ({
          ...prod,
          immagineUrl: prod.immagineUrl ?? 'https://via.placeholder.com/150', // ✅ Aggiunto valore di default
          descrizione: prod.descrizione ?? 'Nessuna descrizione disponibile',
          categoria: prod.categoria ?? 'Generico',
          brand: prod.brand ?? 'Sconosciuto',
          rating: prod.rating ?? 0,
        }))
      ),
      catchError((error) => {
        console.error('Errore nel recupero dei prodotti:', error);
        return of([]);
      })
    );
  }
}
