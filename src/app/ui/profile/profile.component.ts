/* import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// ✅ Import delle Actions e Selectors per l'utente (SOAP)
import { findUserByNomeUtente, createUser } from '../../store/soap/userRelRest/userRelRest.actions';
import { selectUser, selectLoading, selectError } from '../../store/soap/userRelRest/userRelRest.selectors';
import { User } from '../../store/soap/userRelRest/userRelRest.state';

// ✅ Import delle Actions e Selectors per gli ordini (GraphQL)
import { loadOrders, loadOrderById } from '../../store/graphql/orderCas/orderCasGraphQL.actions';
import { selectAllOrders, selectSelectedOrder, selectLoading as selectOrderLoading, selectError as selectOrderError } from '../../store/graphql/orderCas/orderCasGraphQL.selectors';
import { Order } from '../../store/graphql/orderCas/orderCasGraphQL.state';

// ✅ Import delle Actions e Selectors per la Wishlist (REST)
import { loadWishList, aggiungiProdotti, rimuoviProdotto, resetWishList } from '../../store/rest/wishListAraService/wishListAraRest.actions';
import { selectWishList } from '../../store/rest/wishListAraService/wishListAraRest.selectors';
import { WishList, Prodotto } from '../../store/rest/wishListAraService/wishListAraRest.state';

// ✅ Import delle Actions e Selectors per la Chat (WebSocket)
import { createChat, sendMessage } from '../../store/webSocket/chatFireService/chatFireWS.actions';
import { selectChat } from '../../store/webSocket/chatFireService/chatFireWS.selectors';
import { ChatSystem, MessageData } from '../../store/webSocket/chatFireService/chatFireWS.state';

// ✅ Import delle Actions e Selectors per i Prodotti in vendita (GraphQL)
import { loadProdotti } from '../../store/graphql/prodottoRel/prodottoRelGraphQL.actions';
import { selectProdotti } from '../../store/graphql/prodottoRel/prodottoRelGraphQL.selectors';
import { Prodotti } from '../../store/graphql/prodottoRel/prodottoRelGraphQL.state';

// ✅ Import delle Actions e Selectors per JWT + Sessioni
import { logout } from '../../store/securityStore/storeJWT+Sessioni/auth.actions';
import { selectIsAuthenticated } from '../../store/securityStore/storeJWT+Sessioni/auth.selectors';

// ✅ Import delle Actions e Selectors per OAuth2
import { logoutOAuth } from '../../store/securityStore/storeOAuth2/oauth.actions';
import { selectIsAuthenticatedOAuth } from '../../store/securityStore/storeOAuth2/oauth.selectors';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: true
})
export class ProfileComponent {

  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // Stato NgRx per l'utente
  user$: Observable<User | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  // Stato NgRx per gli ordini
  orders$: Observable<Order[]>;
  selectedOrder$: Observable<Order | null>;
  ordersLoading$: Observable<boolean>;
  ordersError$: Observable<string | null>;

  // Stato NgRx per la Wishlist
  wishlist$: Observable<WishList | null>;

   // Stato NgRx per la Chat
   chat$: Observable<ChatSystem | null>;

   // Stato NgRx per i Prodotti in vendita
  prodotti$: Observable<Prodotti[]> | undefined;

  // Stato di autenticazione
  isAuthenticated$: Observable<boolean> | undefined;
  isAuthenticatedOAuth$: Observable<boolean> | undefined;


  // Dati modificabili dell'utente
  userId: string = '';
  nome: string = '';
  cognome: string = '';
  nomeUtente: string = '';
  email: string = '';
  ruolo: string = '';
  password: string = '';
  immagine: string = '';

  // Variabile per l'ID dell'ordine selezionato
  selectedOrderId: string = '';

  // Variabili per la Chat
  chatId: string = '';
  nuovoMessaggio: string = '';

  // Variabili per la gestione prodotti
  limit: number = 10;
  offset: number = 0;

  constructor(private store: Store, private router: Router) {
    this.user$ = this.store.select(selectUser);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.orders$ = this.store.select(selectAllOrders);
    this.selectedOrder$ = this.store.select(selectSelectedOrder);
    this.ordersLoading$ = this.store.select(selectOrderLoading);
    this.ordersError$ = this.store.select(selectOrderError);

    this.wishlist$ = this.store.select(selectWishList);
    this.chat$ = this.store.select(selectChat);


    // Recupera i dati dell'utente autenticato
    const storedUserName = localStorage.getItem('authUserName') || 'guest';
    this.store.dispatch(findUserByNomeUtente({ nomeUtente: storedUserName }));

    // Recupera gli ordini dell'utente
    this.store.dispatch(loadOrders());

    // Recupera la Wishlist dell'utente
    this.store.dispatch(loadWishList({ userId: storedUserName }));

    // Recupera i prodotti dell'utente
    this.loadUserProducts();



    // Sottoscrizione ai dati dell'utente per precompilare il form
    this.user$.subscribe(user => {
      if (user) {
        this.userId = user.id;
        this.nome = user.nome;
        this.cognome = user.cognome;
        this.nomeUtente = user.nomeUtente;
        this.email = user.email;
        this.ruolo = user.ruolo;
        this.password = user.password;
      }
    });
  }

  // ✅ Metodo per caricare i prodotti in vendita dell'utente
  loadUserProducts() {
    if (!this.userId) {
      return;
    }

    const queryParams = {
      paramQuery: { sellerId: this.userId },
      prodotti: {},
      limit: this.limit,
      offset: this.offset
    };

    this.store.dispatch(loadProdotti(queryParams));
  }

  // ✅ Metodo per effettuare il logout con JWT o OAuth2
  logoutUser() {
    if (this.isAuthenticated$) {
      this.isAuthenticated$.subscribe(isAuth => {
        if (isAuth) {
          this.store.dispatch(logout());
          alert('Logout effettuato con successo (JWT)!');
          this.router.navigate(['/home']);
        }
      });
    }

    if (this.isAuthenticatedOAuth$) {
      this.isAuthenticatedOAuth$.subscribe(isOAuthAuth => {
        if (isOAuthAuth) {
          this.store.dispatch(logoutOAuth());
          alert('Logout effettuato con successo (OAuth2)!');
          this.router.navigate(['/home']);
        }
      });
    }
  }



  // ✅ Metodo per aggiornare i dati dell'utente
  updateUserProfile() {
    if (this.validateForm()) {
      const updatedUser: User = {
        id: this.userId,
        nome: this.nome,
        cognome: this.cognome,
        nomeUtente: this.nomeUtente,
        email: this.email,
        ruolo: this.ruolo,
        password: this.password,
      };

      this.store.dispatch(createUser({ user: updatedUser }));
      alert('Profilo aggiornato con successo!');
    }
  }

  // ✅ Metodo per caricare un'immagine profilo
  uploadProfilePicture(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.immagine = e.target.result;
      };
      reader.readAsDataURL(file);
      alert('Immagine caricata con successo!');
    }
  }

  // ✅ Metodo per validare il form prima di salvare le modifiche
  validateForm(): boolean {
    if (!this.nome || !this.cognome || !this.nomeUtente || !this.email || !this.password) {
      alert('Tutti i campi obbligatori devono essere compilati!');
      return false;
    }
    return true;
  }

  // ✅ Metodo per selezionare un ordine
  selectOrder(orderId: string) {
    this.selectedOrderId = orderId;
    this.store.dispatch(loadOrderById({ id: orderId }));
  }

  // ✅ Metodo per aggiungere un prodotto alla Wishlist
  addToWishList(prodotto: Prodotto) {
    if (!this.userId) {
      alert('Errore: utente non autenticato.');
      return;
    }

    this.store.dispatch(aggiungiProdotti({ userId: this.userId, prodotti: [prodotto] }));
    alert('Prodotto aggiunto alla Wishlist!');
  }

  // ✅ Metodo per rimuovere un prodotto dalla Wishlist
  removeFromWishList(prodottoId: string) {
    if (!this.userId) {
      alert('Errore: utente non autenticato.');
      return;
    }

    this.store.dispatch(rimuoviProdotto({ userId: this.userId, prodottoId }));
    alert('Prodotto rimosso dalla Wishlist!');
  }

  // ✅ Metodo per resettare la Wishlist
  resetWishList() {
    if (!this.userId) {
      alert('Errore: utente non autenticato.');
      return;
    }

    this.store.dispatch(resetWishList({ userId: this.userId }));
    alert('Wishlist resettata con successo!');
  }

  // ✅ Metodo per iniziare una nuova chat
  createNewChat() {
    if (!this.userId) {
      alert('Errore: utente non autenticato.');
      return;
    }

    const newChat: ChatSystem = {
      id: Math.random().toString(36).substr(2, 9), // Genera ID casuale
      nome: `Chat con ${this.userId}`,
      messaggi: []
    };

    this.store.dispatch(createChat({ chat: newChat }));
    alert('Chat creata con successo!');
  }

  // ✅ Metodo per inviare un messaggio nella chat
  sendMessageToChat() {
    if (!this.chatId || !this.nuovoMessaggio.trim()) {
      alert('Errore: Chat non selezionata o messaggio vuoto.');
      return;
    }

    const newMessage: MessageData = {
      id: Math.random().toString(36).substr(2, 9),
      contenuto: this.nuovoMessaggio,
      mittente: this.userId
    };

    this.store.dispatch(sendMessage({ message: newMessage, chatId: this.chatId }));
    this.nuovoMessaggio = ''; // Reset del campo messaggio
  }
}
 */



import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: true
})
export class ProfileComponent {

  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


}
