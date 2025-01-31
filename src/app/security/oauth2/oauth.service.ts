



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
export class OAuthService {
  private authStatus = new BehaviorSubject<AuthStatus>({ authenticated: false, role: 'GUEST'});

  constructor() {}

  /**
   * ✅ Controlla lo stato di autenticazione dell'utente via OAuth2
   */
  async checkAuthStatus(): Promise<AuthStatus> {
    try {
      const response = await axios.get<AuthStatus>('/api/auth/status', { withCredentials: true });
      this.authStatus.next(response.data);
      return response.data;
    } catch (error) {
      console.error('Errore nel recupero dello stato di autenticazione OAuth2', error);
      const defaultStatus = { authenticated: false, role: 'GUEST', userId: '' };
      this.authStatus.next(defaultStatus);
      return defaultStatus;
    }
  }

  getAuthStatus() {
    return this.authStatus.asObservable();
  }

  /**
   * ✅ Effettua il redirect verso il provider OAuth2 per il login
   */
  redirectToLogin(): void {
    window.location.href = '/oauth2/authorization/google'; // ✅ Cambia con il tuo provider OAuth2
  }

  /**
   * ✅ Verifica il successo del login OAuth2 e salva il JWT restituito dal backend
   */
  async handleOAuth2Success(): Promise<{ authenticated: boolean; role: string; token: string } | null> {
    try {
      const response = await axios.get<{ token: string }>('/oauth2/success', { withCredentials: true });

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        const status = await this.checkAuthStatus();
        return { authenticated: status.authenticated, role: status.role,  token: response.data.token };
      }
      return null;
    } catch (error) {
      console.error('Errore nel gestire il login OAuth2', error);
      return null;
    }
  }

  /**
   * ✅ Gestisce il fallimento del login OAuth2
   */
  async handleOAuth2Failure(): Promise<boolean> {
    try {
      const response = await axios.get('/oauth2/failure', { withCredentials: true });
      return response.status === 401;
    } catch (error) {
      console.error('Errore nella gestione del fallimento OAuth2', error);
      return false;
    }
  }

  /**
   * ✅ Effettua il logout via OAuth2
   */
  async logout(): Promise<boolean> {
    try {
      await axios.post('/oauth2/logout', {}, { withCredentials: true });
      localStorage.removeItem('authToken');
      this.authStatus.next({ authenticated: false, role: 'GUEST' });
      return true;
    } catch (error) {
      console.error('Errore nel logout OAuth2', error);
      return false;
    }
  }

  /**
   * ✅ Registra un nuovo utente manualmente con OAuth2
   */
  async register(userData: { username: string; password: string; roles: string[] }): Promise<boolean> {
    try {
      const response = await axios.post('/oauth2/register', userData, { withCredentials: true });
      return response.status === 200;
    } catch (error) {
      console.error('Errore nella registrazione dell\'utente OAuth2', error);
      return false;
    }
  }
}
