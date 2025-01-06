// services/user-soap.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { map, catchError, of } from 'rxjs';

export interface User {
  id: string;
  nome: string;
  cognome: string;
  nomeUtente: string;
  email: string;
  ruolo: string;
  password: string;
  immagine?: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserSoapService {
  private readonly API_URL = 'http://localhost:8080/ws/users';

  // Trova un utente per nome utente
  findUserByNomeUtente(nomeUtente: string): Observable<User | null> {
    const requestPayload = `<FindUserByNomeUtenteRequest xmlns="http://example.com/user">
                              <nomeUtente>${nomeUtente}</nomeUtente>
                            </FindUserByNomeUtenteRequest>`;

    return from(
      axios.post(this.API_URL, requestPayload, {
        headers: { 'Content-Type': 'text/xml' },
      })
    ).pipe(
      map((response) => this.parseSOAPResponse(response.data)),
      catchError(() => of(null))
    );
  }

  // Crea un nuovo utente
  createUser(user: User): Observable<User | null> {
    const requestPayload = `
      <CreateUserRequest xmlns="http://example.com/user">
        <user>
          <nome>${user.nome}</nome>
          <cognome>${user.cognome}</cognome>
          <nomeUtente>${user.nomeUtente}</nomeUtente>
          <email>${user.email}</email>
          <ruolo>${user.ruolo}</ruolo>
          <password>${user.password}</password>
        </user>
      </CreateUserRequest>`;

    return from(
      axios.post(this.API_URL, requestPayload, {
        headers: { 'Content-Type': 'text/xml' },
      })
    ).pipe(
      map((response) => this.parseSOAPResponse(response.data)),
      catchError(() => of(null))
    );
  }

  // Parsing SOAP Response
  private parseSOAPResponse(response: string): User | null {
    const parser = new DOMParser();
    const xml = parser.parseFromString(response, 'text/xml');
    const userNode = xml.getElementsByTagName('user')[0];

    if (userNode) {
      return {
        id: userNode.getElementsByTagName('id')[0]?.textContent ?? '',
        nome: userNode.getElementsByTagName('nome')[0]?.textContent ?? '',
        cognome: userNode.getElementsByTagName('cognome')[0]?.textContent ?? '',
        nomeUtente: userNode.getElementsByTagName('nomeUtente')[0]?.textContent ?? '',
        email: userNode.getElementsByTagName('email')[0]?.textContent ?? '',
        ruolo: userNode.getElementsByTagName('ruolo')[0]?.textContent ?? '',
        password: userNode.getElementsByTagName('password')[0]?.textContent ?? '',
      };
    }
    return null;
  }
}
