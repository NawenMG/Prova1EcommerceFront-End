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
