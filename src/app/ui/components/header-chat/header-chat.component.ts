/* import { Component } from '@angular/core';
import { ChatWebSocketService, ChatSystem } from '../../../api/services/webSocket/chatFireService/chat-fire-ws.service';

@Component({
  selector: 'app-header-chat',
  imports: [],
  templateUrl: './header-chat.component.html',
  styleUrls: ['./header-chat.component.css'],
  standalone: true
})
export class HeaderChatComponent {
  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  constructor(private chatWebSocketService: ChatWebSocketService) {}


  eliminaChat(chatId: string): void {
    this.chatWebSocketService.deleteChat(chatId).subscribe(
      () => {
        console.log(`Chat con id ${chatId} eliminata con successo.`);
        // Puoi aggiungere qui eventuale logica per aggiornare l'interfaccia (ad es. navigare via, notificare l'utente, ecc.)
      },
      (error) => {
        console.error('Errore durante l\'eliminazione della chat:', error);
      }
    );
  }


  aggiornaChat(chat: ChatSystem): void {
    this.chatWebSocketService.updateChat(chat).subscribe(
      () => {
        console.log('Chat aggiornata con successo:', chat);
        // Puoi aggiungere qui eventuale logica per aggiornare l'interfaccia (ad es. mostrare un messaggio di conferma all'utente)
      },
      (error) => {
        console.error('Errore durante l\'aggiornamento della chat:', error);
      }
    );
  }
}
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-header-chat',
  imports: [],
  templateUrl: './header-chat.component.html',
  styleUrl: './header-chat.component.css',
  standalone: true
})
export class HeaderChatComponent {
  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


}
