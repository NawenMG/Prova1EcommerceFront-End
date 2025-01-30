
  import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements AfterViewInit{
  stars = Array(5).fill(0);

  // Array di prodotti con 50 prodotti
  products = Array.from({ length: 20 }, (_, index) => ({
      title: `Prodotto ${index + 1}`,
      description: 'Descrizione breve del prodotto.',
      price: Math.floor(Math.random() * 100) + 20,
      image: 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: Math.floor(Math.random() * 5),
      isFavorite: false,
      isSaved: false
  }));

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
          gsap.from('.product-card', {
              opacity: 0,
              y: 50,
              stagger: 0.1,
              duration: 1,
              ease: 'power3.out'
          });
      }
  }

  // Toggle Cuoricino
  toggleFavorite(index: number) {
      this.products[index].isFavorite = !this.products[index].isFavorite;
      gsap.to('.fa-heart', { scale: 1.2, duration: 0.2, yoyo: true });
  }

  // Toggle Salvataggio
  saveProduct(index: number) {
      this.products[index].isSaved = !this.products[index].isSaved;
      gsap.to('.fa-bookmark', { scale: 1.2, duration: 0.2, yoyo: true });
  }

  // Aggiungi al Carrello
  addToCart(index: number) {
      gsap.to('.product-card', { scale: 1.1, duration: 0.3, yoyo: true, repeat: 1 });
      alert(`${this.products[index].title} aggiunto al carrello!`);
  }

  // Visualizza Dettagli
  viewDetails(index: number) {
      gsap.to('.product-card', { rotationY: 360, duration: 1 });
      alert(`Dettagli di ${this.products[index].title}`);
  }

  // Toggle Stelle di Recensione
  toggleStarRating(index: number, rating: number) {
      this.products[index].rating = rating;
      gsap.to('.rating i', { scale: 1.2, duration: 0.2, yoyo: true });
  }
}







/* import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, PLATFORM_ID, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { gsap } from 'gsap';

/// GRAPHQL SERVIZIO PRODOTTI
import { ProdottiState } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';
import { loadProdotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.actions';
import { selectProdotti, selectLoading, selectError } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.selectors';
import { Prodotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';

/// API REST CARRELLO
import { CarrelloState } from '../../../store/rest/carrelloAraService/carrelloAraRest.state';
import { aggiungiProdotti } from '../../../store/rest/carrelloAraService/carrelloAraRest.actions';
import { Prodotto } from '../../../store/rest/carrelloAraService/carrelloAraRest.state';

/// GRAPHQL SERVIZIO RECENSIONI
import { RecensioniState } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.state';
import { loadRecensioni } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.actions';
import { selectAllRecensioni, selectLoading as selectRecensioniLoading, selectError as selectRecensioniError } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.selectors';
import { Recensione } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.state';

/// API REST WISHLIST
import { WishListState } from '../../../store/rest/wishListAraService/wishListAraRest.state';
import { aggiungiProdotti as aggiungiProdottiWishList, rimuoviProdotto as rimuoviProdottoWishList } from '../../../store/rest/wishListAraService/wishListAraRest.actions';
import { selectWishList } from '../../../store/rest/wishListAraService/wishListAraRest.selectors';
import { WishList } from '../../../store/rest/wishListAraService/wishListAraRest.state';

/// API REST ORDINI
import { OrdiniState } from '../../../store/rest/orderCasService/orderCasRest.state';
import { createOrdine } from '../../../store/rest/orderCasService/orderCasRest.actions';
import { selectAllOrdini } from '../../../store/rest/orderCasService/orderCasRest.selectors';
import { Ordine } from '../../../store/rest/orderCasService/orderCasRest.state';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements AfterViewInit, OnChanges {
  @Input() filtri: any = {}; // Riceve i filtri dal FilterComponent

  stars = Array(5).fill(0);
  userId = '123'; // Simulazione di un ID utente statico

  /// Stato Prodotti (GraphQL) ///
  prodotti$: Observable<Prodotti[]>;
  prodottiLoading$: Observable<boolean>;
  prodottiError$: Observable<string | null>;

  /// Stato Recensioni (GraphQL) ///
  recensioni$: Observable<Recensione[]>;
  recensioniLoading$: Observable<boolean>;
  recensioniError$: Observable<string | null>;

  /// Stato Valutazione Media per ogni prodotto ///
  valutazioniMedie$: Observable<{ [productId: string]: number }> | undefined;

  /// Stato Wishlist (REST) ///
  wishList$: Observable<WishList | null>;

  /// Stato Ordini (REST) ///
  ordini$: Observable<Ordine[]>;

  /// Paginazione ///
  limit = 35; // Numero di prodotti per pagina
  currentPage = new BehaviorSubject<number>(0); // Pagina attuale
  totalProducts: number = 0; // Numero totale di prodotti

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private store: Store<ProdottiState & CarrelloState & RecensioniState & WishListState & OrdiniState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    /// Stato GraphQL dei prodotti ///
    this.prodotti$ = this.store.select(selectProdotti);
    this.prodottiLoading$ = this.store.select(selectLoading);
    this.prodottiError$ = this.store.select(selectError);

    /// Stato GraphQL delle recensioni ///
    this.recensioni$ = this.store.select(selectAllRecensioni);
    this.recensioniLoading$ = this.store.select(selectRecensioniLoading);
    this.recensioniError$ = this.store.select(selectRecensioniError);

    /// Stato Wishlist ///
    this.wishList$ = this.store.select(selectWishList);

    /// Stato Ordini ///
    this.ordini$ = this.store.select(selectAllOrdini);

    /// Caricamento iniziale dei prodotti ///
    this.loadProducts();
  }

  /// Animazione delle card all'avvio della visualizzazione ///
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.product-card', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }

  /// Ricarica i prodotti quando i filtri o la pagina cambiano ///
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtri']) {
      this.loadProducts();
    }
  }

  /// Carica i prodotti dalla query GraphQL ///
  loadProducts(): void {
    const offset = this.currentPage.value * this.limit; // Calcola l'offset
    const paramQuery = {
      ...this.filtri,
      limit: this.limit,
      offset: offset
    };

    this.store.dispatch(loadProdotti({ paramQuery, prodotti: {} }));
  }

  /// Navigazione dinamica al prodotto singolo ///
  viewDetails(product: Prodotti): void {
    this.router.navigate(['/prodotto', product.id]);
  }

  /// Aggiungi prodotto al carrello ///
  addToCart(product: Prodotti): void {
    const carrelloProdotto: Prodotto = {
      id: product.id,
      nome: product.nome,
      prezzo: product.prezzo,
      quantita: 1
    };
    this.store.dispatch(aggiungiProdotti({ userId: this.userId, prodotti: [carrelloProdotto] }));
    alert(`${product.nome} aggiunto al carrello!`);
  }

  /// Aggiungi o rimuovi dalla wishlist ///
  toggleWishList(product: Prodotti, isInWishlist: boolean): void {
    if (isInWishlist) {
      this.store.dispatch(rimuoviProdottoWishList({ userId: this.userId, prodottoId: product.id }));
      alert(`${product.nome} rimosso dalla wishlist!`);
    } else {
      this.store.dispatch(aggiungiProdottiWishList({ userId: this.userId, prodotti: [product] }));
      alert(`${product.nome} aggiunto alla wishlist!`);
    }
  }

  /// Verifica se un prodotto è nella wishlist ///
  isInWishlist(productId: string): Observable<boolean> {
    return this.wishList$.pipe(
      map(wishlist => wishlist?.prodotti?.some(p => p.id === productId) || false)
    );
  }

  /// Creazione Ordine ///
  createOrder(): void {
    const newOrder: Ordine = {
      id: Math.random().toString(36).substr(2, 9),
      nomeCliente: "Mario Rossi",
      dataOrdine: new Date().toISOString(),
      importo: Math.floor(Math.random() * 500) + 50
    };
    this.store.dispatch(createOrdine({ ordine: newOrder }));
    alert(`Ordine creato con successo per ${newOrder.nomeCliente}!`);
  }

  /// Cambia pagina ///
  changePage(next: boolean): void {
    if (next) {
      this.currentPage.next(this.currentPage.value + 1);
    } else if (this.currentPage.value > 0) {
      this.currentPage.next(this.currentPage.value - 1);
    }
    this.loadProducts();
  }

  // ✅ Funzione per gestire il toggle della wishlist senza pipe nel template
toggleWishlistHandler(product: Prodotti): void {
  this.isInWishlist(product.id).subscribe(isInWishlist => {
    this.toggleWishList(product, isInWishlist);
  });
}

} */
























