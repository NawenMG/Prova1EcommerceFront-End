/* import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

/// GRAPHQL SERVIZIO RECENSIONI
import { RecensioniState } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.state';
import { loadRecensioni } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.actions';
import { selectAllRecensioni } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.selectors';
import { Recensione } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.state';
import { ActivatedRoute } from '@angular/router';

/// API REST SERVIZIO RECENSIONI
import { createRecensione } from '../../../store/rest/recensioneMonService/recensioneMonRest.actions';

/// AUTENTICAZIONE (JWT + OAuth2)
import { selectIsAuthenticated, selectUserRole } from '../../../store/securityStore/storeJWT+Sessioni/auth.selectors';
import { selectIsAuthenticatedOAuth, selectUserRoleOAuth } from '../../../store/securityStore/storeOAuth2/oauth.selectors';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ReviewsComponent implements OnInit {
  productId: string = ''; // ✅ ID del prodotto dalla route
  recensioni$: Observable<Recensione[]> = new Observable(); // ✅ Solo le ultime 5 recensioni
  mediaValutazione$: Observable<number> = new Observable(); // ✅ Media valutazione

  // ✅ Variabili per l'autenticazione
  isAuthenticated$: Observable<boolean>;
  userRole$: Observable<string>;

  // ✅ Nuova recensione (senza userId)
  newReview: Recensione = {
    id: '',
    productId: '',
    titolo: '',
    descrizione: '',
    valutazione: 5,
    dataCreazione: new Date().toISOString()
  };

  constructor(
    private store: Store<RecensioniState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // ✅ Controlla se l'utente è autenticato (JWT o OAuth2)
    this.isAuthenticated$ = combineLatest([
      this.store.select(selectIsAuthenticated),
      this.store.select(selectIsAuthenticatedOAuth)
    ]).pipe(map(([isAuthJWT, isAuthOAuth]) => isAuthJWT || isAuthOAuth));

    // ✅ Recupera il ruolo dell'utente (JWT o OAuth2)
    this.userRole$ = combineLatest([
      this.store.select(selectUserRole),
      this.store.select(selectUserRoleOAuth)
    ]).pipe(map(([roleJWT, roleOAuth]) => roleJWT || roleOAuth));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.productId = id;
        this.newReview.productId = id; // ✅ Associa l'ID alla nuova recensione

        /// ✅ Dispatch per caricare **solo le ultime 5 recensioni**
        this.store.dispatch(loadRecensioni({ paramQuery: { prodottoId: this.productId }, recensione: {}, limit: 5, offset: 0 }));

        /// ✅ Recupera le recensioni dal selettore NgRx e prende solo le ultime 5
        this.recensioni$ = this.store.select(selectAllRecensioni).pipe(
          map(recensioni =>
            recensioni
              .filter(r => r.productId === this.productId)
              .sort((a, b) => new Date(b.dataCreazione).getTime() - new Date(a.dataCreazione).getTime()) // ✅ Ordina per data (dalla più recente)
              .slice(0, 5) // ✅ Prende solo le prime 5 recensioni più recenti
          )
        );

        /// ✅ Calcola la media delle valutazioni
        this.mediaValutazione$ = this.recensioni$.pipe(
          map(recensioni => recensioni.length
            ? recensioni.reduce((sum, r) => sum + r.valutazione, 0) / recensioni.length
            : 0
          )
        );
      }
    });
  }

  // ✅ Generatore di stelle per la visualizzazione basato sul valore di valutazione della recensione
  generateStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  // ✅ Metodo per aggiungere una nuova recensione (solo utenti autenticati)
  addReview() {
    this.isAuthenticated$.pipe(take(1)).subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        alert('Devi essere autenticato per lasciare una recensione!');
        this.router.navigate(['/login']);
        return;
      }

      if (!this.newReview.titolo || !this.newReview.descrizione || this.newReview.valutazione < 1) {
        alert('Compila tutti i campi per aggiungere una recensione.');
        return;
      }

      // ✅ Genera un ID casuale per la recensione
      this.newReview.id = Math.random().toString(36).substr(2, 9);
      this.newReview.dataCreazione = new Date().toISOString();

      // ✅ Dispatch per salvare la recensione via API REST
      this.store.dispatch(createRecensione({ recensione: this.newReview }));

      alert('Recensione aggiunta con successo!');
    });
  }

  // ✅ Metodo per visualizzare tutte le recensioni (Reindirizza a /allReviews)
  seeAllReviews() {
    this.router.navigate(['/allReviews']); // ✅ Reindirizza alla route
  }
}
 */


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class ReviewsComponent {
  // Dati statici per rating e recensioni
  ratings = [
    { stars: 5, percentage: 60 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 5 }
  ];

  reviews = [
    {
      stars: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      stars: 4,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ];

  // Generatore di stelle per la visualizzazione
  generateStars(starCount: number): number[] {
    return Array(starCount).fill(0);
  }

  // Metodo per aggiungere recensione
  addReview() {
    alert('Funzione per aggiungere una recensione!');
  }

  // Metodo per visualizzare tutte le recensioni
  seeAllReviews() {
    alert('Visualizzazione di tutte le recensioni!');
  }
}
