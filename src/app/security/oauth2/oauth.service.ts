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
export class OAuth {
  private authStatus = new BehaviorSubject<AuthStatus>({ authenticated: false, role: 'GUEST' });

  constructor() {}

  async checkAuthStatus(): Promise<{ authenticated: boolean; role: string }> {
    try {
      const response = await axios.get<AuthStatus>('/api/auth/status', { withCredentials: true });
      this.authStatus.next(response.data);
      return response.data;
    } catch (error) {
      console.error('Errore nel recupero dello stato di autenticazione OAuth2', error);
      const defaultStatus = { authenticated: false, role: 'GUEST' };
      this.authStatus.next(defaultStatus);
      return defaultStatus;
    }
  }

  getAuthStatus() {
    return this.authStatus.asObservable();
  }

  redirectToLogin(): void {
    window.location.href = '/oauth2/authorization/google'; // Cambia con il tuo provider OAuth2
  }

  async logout(): Promise<boolean> {
    try {
      await axios.post('/oauth2/logout', {}, { withCredentials: true });
      this.authStatus.next({ authenticated: false, role: 'GUEST' });
      return true;
    } catch (error) {
      console.error('Errore nel logout OAuth2', error);
      return false;
    }
  }
}
