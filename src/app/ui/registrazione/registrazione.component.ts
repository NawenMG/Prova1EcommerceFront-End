/* import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// ✅ Import delle Actions e Selectors per JWT + Sessioni
import { register } from '../../store/securityStore/storeJWT+Sessioni/auth.actions';
import { selectAuthLoading, selectAuthError } from '../../store/securityStore/storeJWT+Sessioni/auth.selectors';

// ✅ Import delle Actions per OAuth2
import { registerOAuth } from '../../store/securityStore/storeOAuth2/oauth.actions';

@Component({
  selector: 'app-registrazione',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css',
  standalone: true
})
export class RegistrazioneComponent {

  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // Dati per il form
  nome: string = '';
  cognome: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confermaPassword: string = '';
  twoFactorEnabled: boolean = false;
  immagine: Blob | undefined = undefined;

  // Stato di caricamento ed errori (NgRx)
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store, private router: Router) {
    this.loading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
  }

  // ✅ Metodo per la registrazione dell'utente (JWT)
  submitForm() {
    if (this.validateForm()) {
      const userData = {
        nome: this.nome,
        cognome: this.cognome,
        username: this.username,
        password: this.password,
        email: this.email,
        roles: ['USER'], // Ruolo predefinito
        twoFactorEnabled: this.twoFactorEnabled,
        immagine: this.immagine || undefined
      };

      this.store.dispatch(register(userData));

      alert('Registrazione completata con successo! Ora puoi effettuare il login.');
      this.router.navigate(['/login']); // ✅ Reindirizza alla pagina di login
    }
  }

  // ✅ Metodo per avviare la registrazione con OAuth2
  registerWithOAuth() {
    this.store.dispatch(registerOAuth({ username: this.email, password: '', roles: ['USER'] }));
    window.location.href = '/oauth2/authorization/google'; // ✅ Redirect al provider OAuth2
  }

  // ✅ Metodo per validare il form prima di inviare i dati
  validateForm(): boolean {
    if (!this.nome || !this.cognome || !this.username || !this.email || !this.password || !this.confermaPassword) {
      alert('Tutti i campi sono obbligatori!');
      return false;
    }

    if (this.password !== this.confermaPassword) {
      alert('Le password non corrispondono!');
      return false;
    }

    return true;
  }

  // ✅ Metodo per caricare un'immagine profilo
  uploadProfilePicture(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.immagine = file;
      alert('Foto profilo caricata con successo!');
    }
  }
}
 */




import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registrazione',
  imports: [CommonModule],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css',
  standalone: true
})
export class RegistrazioneComponent {

  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // Dati mock per il form
  credentials: string[] = Array(6).fill('');
  informations: string[] = Array(6).fill('');
  preferences: string[] = ['Value', 'Value', 'Value', 'Value', 'Value', 'Value'];

  // Metodo per la registrazione
  submitForm() {
    alert('Form di registrazione inviato con successo!');
  }

  uploadProfilePicture() {
    alert('Aggiungi una foto profilo');
  }

}
