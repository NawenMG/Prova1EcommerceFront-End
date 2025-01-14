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
