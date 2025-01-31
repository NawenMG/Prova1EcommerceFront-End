/* import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// ✅ Import delle Actions e Selectors per JWT + Sessioni
import { login, forgotPassword } from '../../store/securityStore/storeJWT+Sessioni/auth.actions';
import { selectAuthLoading, selectAuthError, selectIsAuthenticated } from '../../store/securityStore/storeJWT+Sessioni/auth.selectors';

// ✅ Import delle Actions e Selectors per OAuth2
import { loginOAuth } from '../../store/securityStore/storeOAuth2/oauth.actions';
import { selectOAuthLoading, selectOAuthError, selectIsAuthenticatedOAuth } from '../../store/securityStore/storeOAuth2/oauth.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // ✅ Stato di autenticazione, caricamento ed errori (NgRx)
  isAuthenticatedJWT$: Observable<boolean>;
  isAuthenticatedOAuth$: Observable<boolean>;
  loadingJWT$: Observable<boolean>;
  errorJWT$: Observable<string | null>;
  loadingOAuth$: Observable<boolean>;
  errorOAuth$: Observable<string | null>;

  constructor(private store: Store, private router: Router) {
    this.isAuthenticatedJWT$ = this.store.select(selectIsAuthenticated);
    this.isAuthenticatedOAuth$ = this.store.select(selectIsAuthenticatedOAuth);

    this.loadingJWT$ = this.store.select(selectAuthLoading);
    this.errorJWT$ = this.store.select(selectAuthError);

    this.loadingOAuth$ = this.store.select(selectOAuthLoading);
    this.errorOAuth$ = this.store.select(selectOAuthError);
  }

  // ✅ Metodo per effettuare il login (JWT + Sessioni)
  submitLogin() {
    if (this.email && this.password) {
      this.store.dispatch(login({ username: this.email, password: this.password }));

      // ✅ Osserva il risultato del login
      this.isAuthenticatedJWT$.subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['/home']); // 🔄 Reindirizza alla home in caso di successo
        } else {
          alert('Errore nel login. Controlla le credenziali e riprova.'); // ❌ Mostra alert in caso di errore
        }
      });
    } else {
      alert('Per favore, inserisci tutte le credenziali!');
    }
  }

  // ✅ Metodo per effettuare il login con OAuth2
  loginWithOAuth() {
    this.store.dispatch(loginOAuth()); // Dispatch per avviare il login con OAuth2
    window.location.href = '/oauth2/authorization/google'; // ✅ Redirect al provider OAuth2
  }

  // ✅ Metodo per il recupero della password
  forgotPassword() {
    if (!this.email) {
      alert('Inserisci la tua email per ricevere il link di recupero!');
      return;
    }
    this.store.dispatch(forgotPassword({ email: this.email }));
    alert('Se l\'email è registrata, riceverai un link per il recupero della password.');
  }

  // ✅ Metodo per la registrazione
  createAccount() {
    this.router.navigate(['/register']); // ✅ Naviga alla pagina di registrazione
  }
}
 */



import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  submitLogin() {
    if (this.email && this.password) {
      alert(`Login effettuato con successo!\nEmail: ${this.email}`);
    } else {
      alert('Per favore, inserisci tutte le credenziali!');
    }
  }

  forgotPassword() {
    alert('Link per il recupero della password inviato!');
  }

  createAccount() {
    alert('Reindirizzamento alla pagina di registrazione.');
  }
}
