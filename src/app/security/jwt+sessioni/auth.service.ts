

import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

interface AuthStatus {
  authenticated: boolean;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<AuthStatus>({ authenticated: false, role: 'GUEST'});

  constructor() {}

  /**
   * ✅ Controlla lo stato di autenticazione dell'utente
   */
  async checkAuthStatus(): Promise<AuthStatus> {
    try {
      const response = await axios.get<AuthStatus>('/api/auth/status', { withCredentials: true });
      this.authStatus.next(response.data);
      return response.data;
    } catch (error) {
      console.error('Errore nel recupero dello stato di autenticazione JWT', error);
      const defaultStatus = { authenticated: false, role: 'GUEST', userId: '' };
      this.authStatus.next(defaultStatus);
      return defaultStatus;
    }
  }

  getAuthStatus() {
    return this.authStatus.asObservable();
  }

  /**
   * ✅ Effettua il login dell'utente (con supporto per il 2FA)
   */
  async login(credentials: { username: string; password: string }): Promise<{ authenticated: boolean; role: string; token: string } | null> {
    try {
      const response = await axios.post<{ token: string }>('/auth/login', credentials, { withCredentials: true });

      if (response.data.token === "2FA_CODE_SENT") {
        // Se è richiesto il 2FA, restituiamo il messaggio senza salvare il token
        return { authenticated: false, role: 'GUEST',  token: '2FA_CODE_SENT' };
      }

      localStorage.setItem('authToken', response.data.token);
      const status = await this.checkAuthStatus();
      return { authenticated: status.authenticated, role: status.role, token: response.data.token };
    } catch (error) {
      console.error('Errore nel login JWT', error);
      return null;
    }
  }

  /**
   * ✅ Verifica il codice 2FA e completa il login
   */
  async verify2FA(username: string, code: string): Promise<{ authenticated: boolean; role: string; token: string } | null> {
    try {
      const response = await axios.post<{ token: string }>('/auth/verify-2fa', { username, code }, { withCredentials: true });

      localStorage.setItem('authToken', response.data.token);
      const status = await this.checkAuthStatus();
      return { authenticated: status.authenticated, role: status.role, token: response.data.token };
    } catch (error) {
      console.error('Errore nella verifica del codice 2FA', error);
      return null;
    }
  }

  /**
   * ✅ Effettua il logout dell'utente
   */
  async logout(): Promise<boolean> {
    try {
      await axios.post('/auth/logout', {}, { withCredentials: true });
      localStorage.removeItem('authToken');
      this.authStatus.next({ authenticated: false, role: 'GUEST'});
      return true;
    } catch (error) {
      console.error('Errore nel logout JWT', error);
      return false;
    }
  }

  /**
   * ✅ Registra un nuovo utente
   */
  async register(userData: {
    nome: string;
    cognome: string;
    username: string;
    password: string;
    email: string;
    roles: string[];
    twoFactorEnabled: boolean;
    immagine?: Blob;
  }): Promise<boolean> {
    try {
      const response = await axios.post('/auth/register', userData, { withCredentials: true });
      return response.status === 200;
    } catch (error) {
      console.error('Errore nella registrazione dell\'utente', error);
      return false;
    }
  }

  /**
   * ✅ Richiede il reset della password
   */
  async forgotPassword(email: string): Promise<boolean> {
    try {
      await axios.post('/auth/forgot-password', { email }, { withCredentials: true });
      return true;
    } catch (error) {
      console.error('Errore nell\'invio dell\'email di recupero password', error);
      return false;
    }
  }

  /**
   * ✅ Reimposta la password con il token ricevuto via email
   */
  async resetPassword(token: string, newPassword: string): Promise<boolean> {
    try {
      await axios.post('/auth/reset-password', { token, newPassword }, { withCredentials: true });
      return true;
    } catch (error) {
      console.error('Errore nel reset della password', error);
      return false;
    }
  }
}
