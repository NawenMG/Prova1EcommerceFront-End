import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, catchError, map, of, retry } from 'rxjs';

// Definizione dei tipi per le risposte GraphQL
export interface Order {
  id: string;
  nomeCliente: string;
  data: string;
  stato: string;
}

export interface GetAllOrdersResponse {
  findAllOrdini: Order[];
}

export interface GetOrderByIdResponse {
  findOrdineById: Order;
}

export interface DynamicQueryResponse {
  queryDinamica: Order[];
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private endpoint = 'http://localhost:8080/graphql';

  constructor(private apollo: Apollo) {}

  // Query per ottenere tutti gli ordini con gestione di errori e trasformazione dati
  findAllOrders(): Observable<Order[]> {
    const GET_ALL_ORDERS = gql`
      query {
        findAllOrdini {
          id
          nomeCliente
          data
          stato
        }
      }
    `;

    return this.apollo.query<GetAllOrdersResponse>({ query: GET_ALL_ORDERS }).pipe(
      retry(2), // Riprova fino a 2 volte in caso di errore
      map((response) => response.data.findAllOrdini),
      catchError((error) => {
        console.error('Errore durante il caricamento degli ordini:', error);
        return of([]); // Restituisce un array vuoto in caso di errore
      })
    );
  }

  // Query per ottenere un ordine per ID con gestione avanzata degli errori
  findOrderById(id: string): Observable<Order | null> {
    const GET_ORDER_BY_ID = gql`
      query($id: String!) {
        findOrdineById(id: $id) {
          id
          nomeCliente
          data
          stato
        }
      }
    `;

    return this.apollo.query<GetOrderByIdResponse>({
      query: GET_ORDER_BY_ID,
      variables: { id },
    }).pipe(
      map((response) => response.data.findOrdineById),
      catchError((error) => {
        console.error('Errore nel caricamento del singolo ordine:', error);
        return of(null); // Restituisce null in caso di errore
      })
    );
  }

  // Query dinamica con gestione avanzata
  dynamicQuery(paramQuery: any, ordine: any): Observable<Order[]> {
    const DYNAMIC_QUERY = gql`
      query($paramQuery: ParamQueryCassandraInput, $ordine: ArchiviazioneOrdiniInput) {
        queryDinamica(paramQuery: $paramQuery, ordine: $ordine) {
          id
          nomeCliente
          data
          stato
        }
      }
    `;

    return this.apollo.query<DynamicQueryResponse>({
      query: DYNAMIC_QUERY,
      variables: { paramQuery, ordine },
    }).pipe(
      map((response) => response.data.queryDinamica),
      catchError((error) => {
        console.error('Errore durante la query dinamica:', error);
        return of([]); // Restituisce un array vuoto in caso di errore
      })
    );
  }
}
