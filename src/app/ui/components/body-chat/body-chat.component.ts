/* import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatWebSocketService, MessageData } from '../../../api/services/webSocket/chatFireService/chat-fire-ws.service';

@Component({
  selector: 'app-body-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './body-chat.component.html',
  styleUrls: ['./body-chat.component.css'],
  standalone: true
})
export class BodyChatComponent implements OnInit, OnDestroy {
  // Lista dei messaggi visualizzati
  messages: MessageData[] = [
    // Esempi di messaggi di prova; per l'operatività reale questi saranno gestiti via WebSocket.
    // Nota: se desideri gestire anche il timestamp, puoi aggiungere il campo 'timestamp' in questi oggetti.
    { id: '1', contenuto: 'Ciao, come stai?', mittente: 'altri' },
    { id: '2', contenuto: 'Sto bene, grazie! E tu?', mittente: 'me' },
    { id: '3', contenuto: 'Tutto bene, grazie per aver chiesto!', mittente: 'altri' },
    { id: '4', contenuto: 'Perfetto, ci vediamo più tardi!', mittente: 'me' }
  ];

  // Nuovo messaggio da inviare
  newMessage: string = '';

  // Identificativo della chat corrente (per demo lo fissiamo, in una logica reale potrebbe essere dinamico)
  chatId: string = 'chat1';

  // Stato per la modifica di un messaggio
  editingMessageId: string | null = null;
  editingMessageContent: string = '';

  // Subscription per gli aggiornamenti dei messaggi via WebSocket
  private messageSubscription: Subscription | undefined;

  constructor(private chatWebSocketService: ChatWebSocketService) {}

  ngOnInit(): void {
    // Sottoscrizione agli aggiornamenti dei messaggi in tempo reale
    this.messageSubscription = this.chatWebSocketService.getMessageUpdates().subscribe(
      (message: MessageData) => {
        // Se il messaggio esiste già (cioè è un aggiornamento) lo sostituisce, altrimenti lo aggiunge.
        const index = this.messages.findIndex(m => m.id === message.id);
        if (index !== -1) {
          this.messages[index] = message;
        } else {
          this.messages.push(message);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.messageSubscription?.unsubscribe();
  }


  sendMessage(): void {
    if (!this.newMessage.trim()) {
      return;
    }

    // Costruisci l'oggetto messaggio.
    // Nota: se disponi di un campo timestamp, puoi aggiungerlo qui (es. timestamp: Date.now()).
    const message: MessageData = {
      id: this.generateId(),
      contenuto: this.newMessage,
      mittente: 'me'  // Sostituisci con il valore dinamico relativo all'utente loggato.
    };

    // Invia il messaggio tramite il servizio WebSocket
    this.chatWebSocketService.sendMessage(message, this.chatId).subscribe(() => {
      console.log('Messaggio inviato:', message);
      // Aggiunge il messaggio all'array locale; in alcuni casi potresti preferire aggiornare solo tramite WebSocket.
      this.messages.push(message);
      this.newMessage = '';
    }, (error) => {
      console.error('Errore nell\'invio del messaggio:', error);
    });
  }


  deleteMessage(message: MessageData): void {
    // Se disponi di un campo 'timestamp' nel messaggio, puoi usarlo per verificare i 5 minuti.
    // In questo esempio, se il messaggio contiene 'timestamp', la logica è la seguente:
    let deleteForAll = true;
    if ((message as any).timestamp) {
      const currentTime = Date.now();
      const messageTime = (message as any).timestamp;
      const diff = currentTime - messageTime;
      deleteForAll = diff < 5 * 60 * 1000; // 5 minuti in millisecondi
    }

    this.chatWebSocketService.deleteMessage(message.id, this.chatId, deleteForAll).subscribe(() => {
      console.log(`Messaggio ${message.id} eliminato ${deleteForAll ? 'per tutti' : 'solo per te'}.`);
      // Aggiorna l'array locale rimuovendo il messaggio eliminato
      this.messages = this.messages.filter(m => m.id !== message.id);
    }, (error) => {
      console.error('Errore nell\'eliminazione del messaggio:', error);
    });
  }


  enableEdit(message: MessageData): void {
    this.editingMessageId = message.id;
    this.editingMessageContent = message.contenuto;
  }


  updateMessage(): void {
    if (!this.editingMessageId || !this.editingMessageContent.trim()) {
      return;
    }

    // Cerca il messaggio da aggiornare nell'array locale
    const index = this.messages.findIndex(m => m.id === this.editingMessageId);
    if (index === -1) {
      return;
    }

    // Crea una copia del messaggio aggiornato
    const updatedMessage: MessageData = {
      ...this.messages[index],
      contenuto: this.editingMessageContent,
    };

    // Invia l'aggiornamento tramite il servizio WebSocket
    this.chatWebSocketService.updateMessage(updatedMessage, this.chatId).subscribe(() => {
      console.log('Messaggio aggiornato:', updatedMessage);
      // Aggiorna l'array locale con il messaggio modificato
      this.messages[index] = updatedMessage;
      // Resetta lo stato di modifica
      this.editingMessageId = null;
      this.editingMessageContent = '';
    }, (error) => {
      console.error('Errore nell\'aggiornamento del messaggio:', error);
    });
  }


  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
 */



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
