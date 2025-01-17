import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './body-chat.component.html',
  styleUrl: './body-chat.component.css',
  standalone: true
})
export class BodyChatComponent {
   // Messaggi di prova suddivisi per tipologia
  messages = [
    { text: 'Ciao, come stai?', isSent: false }, // Messaggio ricevuto
    { text: 'Sto bene, grazie! E tu?', isSent: true }, // Messaggio inviato
    { text: 'Tutto bene, grazie per aver chiesto! derfvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', isSent: false }, // Messaggio ricevuto
    { text: 'Perfetto, ci vediamo più tardi!', isSent: true } // Messaggio inviato
  ];

  // Nuovo messaggio
  newMessage: string = '';

  // Metodo per inviare un messaggio
  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, isSent: true }); // Aggiungi un messaggio inviato
      this.newMessage = '';
    }
  }

}
