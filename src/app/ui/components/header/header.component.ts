import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [FormsModule, CommonModule]
})
export class HeaderComponent implements AfterViewInit {
  isAuthenticated = false;
  selectedLanguage = 'it';
  searchQuery = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.set('.logo i', { rotation: 0 });
    }
  }

  animateLogo(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.logo i', {
        rotation: "+=360", // Rotazione continua ogni passaggio del mouse
        duration: 1,
        ease: 'power1.inOut'
      });
    }
  }

  animateDropdown(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.language-selector', { scale: 1.1, duration: 0.3 });
    }
  }

  resetDropdownAnimation(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.language-selector', { scale: 1, duration: 0.3 });
    }
  }

  changeLanguage(): void {
    console.log('Lingua selezionata:', this.selectedLanguage);
  }

  toggleLogin(): void {
    this.isAuthenticated = !this.isAuthenticated;
    console.log(this.isAuthenticated ? 'Utente autenticato' : 'Utente disconnesso');
  }

  searchProducts(): void {
    console.log('Ricerca:', this.searchQuery);
  }
}




















/* import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { gsap } from 'gsap';
import { Router } from '@angular/router'; // Per la navigazione dinamica

/// API REST Setting Site
import { SettingSiteState } from '../../../store/rest/settingSiteAraService/settingSiteAraRest.state';
import { loadImpostazioni, salvaImpostazioni, resetImpostazioni } from '../../../store/rest/settingSiteAraService/settingSiteAraRest.actions';
import { selectSettings, selectLoading, selectError } from '../../../store/rest/settingSiteAraService/settingSiteAraRest.selectors';
import { SettingSite } from '../../../store/rest/settingSiteAraService/settingSiteAraRest.state';
///

/// AUTENTICAZIONE E RUOLO UTENTE
import { selectIsAuthenticated, selectUserRole } from '../../../store/securityStore/storeJWT+Sessioni/auth.selectors';
import { selectIsAuthenticatedOAuth, selectUserRoleOAuth } from '../../../store/securityStore/storeOAuth2/oauth.selectors';
///

/// GRAPHQL SERVIZIO PRODOTTI
import { ProdottiState } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';
import { loadProdotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.actions';
import { selectProdotti, selectLoading as selectProdottiLoading, selectError as selectProdottiError } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.selectors';
import { Prodotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';
///

/// API REST CRONOLOGIA
import { CronologiaState, Prodotto } from '../../../store/rest/cronologiaAraService/cronologiaAraRest.state';
import { loadCronologia, aggiungiProdotti, eliminaSingolaRicerca, eliminaTutteLeRicerche } from '../../../store/rest/cronologiaAraService/cronologiaAraRest.actions';
import {selectCronologia, selectLoading as selectCronologiaLoading, selectError as selectCronologiaError} from '../../../store/rest/cronologiaAraService/cronologiaAraRest.selectors';
import { Cronologia, Prodotto as CronologiaProdotto } from '../../../store/rest/cronologiaAraService/cronologiaAraRest.state';
///

/// API REST CARRELLO
import { CarrelloState } from '../../../store/rest/carrelloAraService/carrelloAraRest.state';
import { loadCarrello, aggiungiProdotti as aggiungiProdottiCarrello, rimuoviProdotto, svuotaCarrello } from '../../../store/rest/carrelloAraService/carrelloAraRest.actions';
import { selectCarrello, selectLoading as selectCarrelloLoading, selectError as selectCarrelloError } from '../../../store/rest/carrelloAraService/carrelloAraRest.selectors';
import { Carrello, Prodotto as CarrelloProdotto } from '../../../store/rest/carrelloAraService/carrelloAraRest.state';
///

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [FormsModule, CommonModule]
})
export class HeaderComponent implements AfterViewInit {

  /// API REST Setting Site ///
  settings$: Observable<SettingSite | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  userId = '123'; // Simuliamo un ID utente
  ///

  /// Stato Autenticazione e Ruolo ///
  isAuthenticated$: Observable<boolean>;
  userRole$: Observable<string>;
  ///

  /// Stato prodotti (GraphQL) ///
  prodotti$: Observable<Prodotti[]>;
  prodottiLoading$: Observable<boolean>;
  prodottiError$: Observable<string | null>;
  ///

  /// Stato Cronologia (REST) ///
  cronologia$: Observable<Cronologia | null>;
  cronologiaLoading$: Observable<boolean>;
  cronologiaError$: Observable<string | null>;
  ///

  /// Stato Carrello (REST) ///
  carrello$: Observable<Carrello | null>;
  carrelloLoading$: Observable<boolean>;
  carrelloError$: Observable<string | null>;
  ///

  isAuthenticated = false;
  selectedLanguage = 'it';
  searchQuery = '';
  showCronologiaDropdown: boolean = false;


  constructor(
    private store: Store<SettingSiteState & ProdottiState & CronologiaState & CarrelloState>,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router // Per la navigazione dinamica
  ) {
    /// API REST Setting Site ///
    this.settings$ = this.store.select(selectSettings);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    ///

    /// Autenticazione (JWT + OAuth) ///
    this.isAuthenticated$ = combineLatest([
      this.store.select(selectIsAuthenticated),
      this.store.select(selectIsAuthenticatedOAuth)
    ]).pipe(
      map(([jwtAuth, oauthAuth]) => jwtAuth || oauthAuth) // True se almeno un metodo è autenticato
    );

    this.userRole$ = combineLatest([
      this.store.select(selectUserRole),
      this.store.select(selectUserRoleOAuth)
    ]).pipe(
      map(([jwtRole, oauthRole]) => jwtRole || oauthRole) // Usa il ruolo disponibile
    );
    ///

    /// GraphQL - Stato prodotti ///
    this.prodotti$ = this.store.select(selectProdotti);
    this.prodottiLoading$ = this.store.select(selectProdottiLoading);
    this.prodottiError$ = this.store.select(selectProdottiError);
    ///

    /// REST - Stato cronologia ///
    this.cronologia$ = this.store.select(selectCronologia);
    this.cronologiaLoading$ = this.store.select(selectCronologiaLoading);
    this.cronologiaError$ = this.store.select(selectCronologiaError);
    ///

    /// REST - Stato carrello ///
    this.carrello$ = this.store.select(selectCarrello);
    this.carrelloLoading$ = this.store.select(selectCarrelloLoading);
    this.carrelloError$ = this.store.select(selectCarrelloError);
    ///
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.set('.logo i', { rotation: 0 });
    }

    /// API REST Setting Site - Carica le impostazioni all'avvio ///
    this.store.dispatch(loadImpostazioni({ userId: this.userId }));
    ///

    /// API REST Cronologia - Carica cronologia all'avvio ///
    this.store.dispatch(loadCronologia({ userId: this.userId }));
    ///


    /// API REST Carrello - Carica il carrello all'avvio ///
    this.store.dispatch(loadCarrello({ userId: this.userId }));
    ///
  }

  /// API REST Carrello - Aggiungi prodotti ///
  aggiungiAlCarrello(prodotto: CarrelloProdotto): void {
    this.store.dispatch(aggiungiProdottiCarrello({ userId: this.userId, prodotti: [{ ...prodotto, quantita: 1 }] }));
  }
  ///

  /// API REST Carrello - Rimuovi un prodotto ///
  rimuoviDalCarrello(prodottoId: string): void {
    this.store.dispatch(rimuoviProdotto({ userId: this.userId, prodottoId }));
  }
  ///

  /// API REST Carrello - Svuota il carrello ///
  svuotaCarrello(): void {
    this.store.dispatch(svuotaCarrello({ userId: this.userId }));
  }
  ///

  animateLogo(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.logo i', {
        rotation: "+=360",
        duration: 1,
        ease: 'power1.inOut'
      });
    }
  }

  animateDropdown(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.language-selector', { scale: 1.1, duration: 0.3 });
    }
  }

  resetDropdownAnimation(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.language-selector', { scale: 1, duration: 0.3 });
    }
  }

  /// API REST Setting Site - Cambia la lingua e salva le impostazioni ///
  changeLanguage(): void {
    console.log('Lingua selezionata:', this.selectedLanguage);

    const newSettings: SettingSite = {
      lingua: this.selectedLanguage,
    };

    this.store.dispatch(salvaImpostazioni({ userId: this.userId, settings: newSettings }));
  }
  ///

  /// API REST Setting Site - Reset impostazioni dell'utente ///
  resetSettings(): void {
    console.log('Reset impostazioni per l’utente:', this.userId);
    this.store.dispatch(resetImpostazioni({ userId: this.userId }));
  }
  ///

  toggleLogin(): void {
    this.isAuthenticated = !this.isAuthenticated;
    console.log(this.isAuthenticated ? 'Utente autenticato' : 'Utente disconnesso');
  }

  /// GRAPHQL - Ricerca prodotti e reindirizzamento ///
  searchProducts(): void {
    if (this.searchQuery.trim() !== '') {
      console.log('Ricerca prodotti per:', this.searchQuery);

      this.store.dispatch(loadProdotti({
        paramQuery: { search: this.searchQuery },
        prodotti: {} // Nessun filtro specifico sui prodotti
      }));

      // Aggiungi il prodotto alla cronologia
      const prodottoCronologia: Prodotto = {
        id: Math.random().toString(36).substr(2, 9), // Simulazione ID univoco
        nome: this.searchQuery,
        prezzo: 0 // Prezzo sconosciuto in fase di ricerca
      };

      this.store.dispatch(aggiungiProdotti({ userId: this.userId, prodotti: [prodottoCronologia] }));

      // Reindirizzamento alla lista prodotti con il parametro di ricerca
      this.router.navigate(['/prodotti', this.searchQuery]);
    }
  }
  ///

  /// API REST Cronologia - Elimina un singolo prodotto ///
  eliminaProdottoCronologia(productId: string): void {
    this.store.dispatch(eliminaSingolaRicerca({ userId: this.userId, productId }));
  }
  ///

  /// API REST Cronologia - Elimina tutta la cronologia ///
  eliminaTuttaCronologia(): void {
    this.store.dispatch(eliminaTutteLeRicerche({ userId: this.userId }));
  }
  ///

  getTotal(prodotti: CarrelloProdotto[]): number {
    return prodotti.reduce((total, prod) => total + (prod.prezzo * prod.quantita), 0);
  }

  // Mostra il dropdown della cronologia quando si clicca nella barra di ricerca
showCronologia(): void {
  this.showCronologiaDropdown = true;
}

// Nasconde il dropdown dopo un ritardo per permettere l'interazione con gli elementi
hideCronologiaDropdownWithDelay(): void {
  setTimeout(() => {
    this.showCronologiaDropdown = false;
  }, 200); // Ritardo per permettere l'interazione
}

selectFromCronologia(nomeProdotto: string): void {
  this.searchQuery = nomeProdotto;
  this.searchProducts(); // Avvia la ricerca automaticamente
}



}
 */
