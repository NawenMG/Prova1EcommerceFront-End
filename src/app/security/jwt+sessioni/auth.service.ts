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
export class Auth {
  private authStatus = new BehaviorSubject<AuthStatus>({ authenticated: false, role: 'GUEST' });

  constructor() {}

  async checkAuthStatus(): Promise<{ authenticated: boolean; role: string }> {
    try {
      const response = await axios.get<AuthStatus>('/api/auth/status', { withCredentials: true });
      this.authStatus.next(response.data);
      return response.data;
    } catch (error) {
      console.error('Errore nel recupero dello stato di autenticazione JWT', error);
      const defaultStatus = { authenticated: false, role: 'GUEST' };
      this.authStatus.next(defaultStatus);
      return defaultStatus;
    }
  }

  getAuthStatus() {
    return this.authStatus.asObservable();
  }

  async login(credentials: { username: string; password: string }): Promise<{ authenticated: boolean; role: string; token: string } | null> {
    try {
      const response = await axios.post<{ token: string }>('/auth/login', credentials, { withCredentials: true });
      localStorage.setItem('authToken', response.data.token);
      const status = await this.checkAuthStatus();
      return { authenticated: status.authenticated, role: status.role, token: response.data.token };
    } catch (error) {
      console.error('Errore nel login JWT', error);
      return null;
    }
  }

  async logout(): Promise<boolean> {
    try {
      await axios.post('/auth/logout', {}, { withCredentials: true });
      localStorage.removeItem('authToken');
      this.authStatus.next({ authenticated: false, role: 'GUEST' });
      return true;
    } catch (error) {
      console.error('Errore nel logout JWT', error);
      return false;
    }
  }
}
