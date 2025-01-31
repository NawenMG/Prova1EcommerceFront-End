/* import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, PLATFORM_ID, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { gsap } from 'gsap';

/// GRAPHQL SERVIZIO PRODOTTI
import { ProdottiState } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';
import { loadProdotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.actions';
import { selectProdotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.selectors';
import { Prodotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';

/// API REST WISHLIST
import { WishListState } from '../../../store/rest/wishListAraService/wishListAraRest.state';
import { aggiungiProdotti as aggiungiProdottiWishList } from '../../../store/rest/wishListAraService/wishListAraRest.actions';
import { selectWishList } from '../../../store/rest/wishListAraService/wishListAraRest.selectors';
import { WishList, Prodotto } from '../../../store/rest/wishListAraService/wishListAraRest.state';

/// GRAPHQL SERVIZIO RECENSIONI
import { RecensioniState } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.state';
import { loadRecensioni } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.actions';
import { selectAllRecensioni } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.selectors';
import { Recensione } from '../../../store/graphql/recensioneMon/recensioneMonGraphQL.state';

/// API REST SEGNALAZIONI
import { SegnalazioniState } from '../../../store/rest/segnalazioneCasService/segnalazioneCasRest.state';
import { createSegnalazione } from '../../../store/rest/segnalazioneCasService/segnalazioneCasRest.actions';

/// API REST ORDINI
import { OrdiniState } from '../../../store/rest/orderCasService/orderCasRest.state';
import { createOrdine } from '../../../store/rest/orderCasService/orderCasRest.actions';
import { Ordine } from '../../../store/rest/orderCasService/orderCasRest.state';

/// API REST CARRELLO
import { CarrelloState } from '../../../store/rest/carrelloAraService/carrelloAraRest.state';
import { aggiungiProdotti as aggiungiProdottiCarrello } from '../../../store/rest/carrelloAraService/carrelloAraRest.actions';
import { Prodotto as ProdottoCarrello } from '../../../store/rest/carrelloAraService/carrelloAraRest.state';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-introduction-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './introduction-product.component.html',
  styleUrl: './introduction-product.component.css',
  standalone: true
})
export class IntroductionProductComponent implements AfterViewInit, OnInit {
  productId: string = ''; // L'ID verrà estratto dalla route
  product$: Observable<Prodotti | undefined> = new Observable();
  wishList$: Observable<WishList | null>;
  recensioni$: Observable<Recensione[]>;

  defaultImage = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop';
  isFavorite: boolean = false;
  isSaved: boolean = false;
  rating: number = 0;
  quantity: number = 1;
  selectedType: string = '';
  userId = '123'; // Simulazione ID utente

  mediaValutazione$: Observable<number> | undefined;

  // ✅ Variabili per segnalazione
  segnalazioneTitolo: string = '';
  segnalazioneDescrizione: string = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private store: Store<ProdottiState & WishListState & RecensioniState & SegnalazioniState & OrdiniState>,
    private route: ActivatedRoute // ✅ Iniettiamo ActivatedRoute
  ) {
    this.wishList$ = this.store.select(selectWishList);
    this.recensioni$ = this.store.select(selectAllRecensioni);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // ✅ Ottieni l'ID dalla route

      if (id) {
        this.productId = id; // ✅ Salva l'ID del prodotto

        /// ✅ Caricamento prodotto GraphQL
        this.store.dispatch(loadProdotti({ paramQuery: { id: this.productId }, prodotti: {}, limit: 10, offset: 0 }));
        this.product$ = this.store.select(selectProdotti).pipe(
          map(products => products.find(p => p.id === this.productId))
        );

        /// ✅ Caricamento recensioni per il prodotto
        this.store.dispatch(loadRecensioni({ paramQuery: { prodottoId: this.productId }, recensione: {} }));

        /// ✅ Calcola la media delle valutazioni in modo più sicuro
        this.mediaValutazione$ = combineLatest([this.product$, this.recensioni$]).pipe(
          map(([product, recensioni]) => {
            if (!product) return 0; // Nessun prodotto trovato, ritorna 0

            const recensioniProdotto = recensioni.filter(r => r.id === product.id);
            return recensioniProdotto.length > 0
              ? recensioniProdotto.reduce((sum, r) => sum + r.valutazione, 0) / recensioniProdotto.length
              : 0;
          })
        );

        // ✅ Aggiorna i dettagli del prodotto in modo reattivo
        this.product$.subscribe(product => {
          if (product) {
            this.rating = product.rating ?? 0;
            this.selectedType = product.categoria ?? '';
          }
        });
      }
    });
  }


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.product-container', { opacity: 0, y: 50, duration: 1 });
    }
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    gsap.to('.fa-heart', { scale: 1.2, duration: 0.3, repeat: 1 });
  }

  toggleSave(): void {
    this.isSaved = !this.isSaved;
    gsap.to('.fa-bookmark', { scale: 1.2, duration: 0.3, repeat: 1 });
  }

  setRating(stars: number): void {
    this.rating = stars;
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  updateType(newType: string): void {
    this.selectedType = newType;
  }

  buyNow(): void {
    alert(`Prodotto acquistato con successo!`);
  }


  /// ✅ Aggiungi il prodotto alla wishlist
  addToWishlist(): void {
    this.product$.subscribe(product => {
      if (product) {
        const wishListProduct: Prodotto = {
          id: product.id,
          nome: product.nome,
          prezzo: product.prezzo
        };

        this.store.dispatch(aggiungiProdottiWishList({ userId: this.userId, prodotti: [wishListProduct] }));
        alert(`${product.nome} aggiunto alla wishlist!`);
      }
    });
  }

  /// ✅ Invia una segnalazione per il prodotto
  sendSegnalazione(): void {
    if (!this.segnalazioneTitolo || !this.segnalazioneDescrizione) {
      alert('Compila tutti i campi per inviare la segnalazione.');
      return;
    }

    const nuovaSegnalazione = {
      id: Math.random().toString(36).substr(2, 9),
      titolo: this.segnalazioneTitolo,
      descrizione: this.segnalazioneDescrizione,
      dataCreazione: new Date().toISOString(),
    };

    this.store.dispatch(createSegnalazione({ segnalazione: nuovaSegnalazione }));
    alert('Segnalazione inviata con successo!');
  }

  /// ✅ Invia un ordine per il prodotto selezionato
  sendOrdine(): void {
    this.product$.subscribe(product => {
      if (!product) {
        alert('Errore: prodotto non trovato.');
        return;
      }

      const nuovoOrdine: Ordine = {
        id: Math.random().toString(36).substr(2, 9),
        nomeCliente: "Mario Rossi",
        dataOrdine: new Date().toISOString(),
        importo: product.prezzo * this.quantity
      };

      this.store.dispatch(createOrdine({ ordine: nuovoOrdine }));
      alert(`Ordine per ${product.nome} effettuato con successo!`);
    });
  }


   /// ✅ Aggiungi il prodotto al carrello
   addToCart(): void {
    this.product$.subscribe(product => {
      if (product) {
        const carrelloProdotto: ProdottoCarrello = {
          id: product.id,
          nome: product.nome,
          prezzo: product.prezzo,
          quantita: this.quantity
        };

        this.store.dispatch(aggiungiProdottiCarrello({ userId: this.userId, prodotti: [carrelloProdotto] }));
        alert(`${product.nome} aggiunto al carrello!`);
      }
    });
  }
}
 */



import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-introduction-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './introduction-product.component.html',
  styleUrl: './introduction-product.component.css',
  standalone: true
})
export class IntroductionProductComponent implements AfterViewInit {
  // Definizione della proprietà product con valori di default
  @Input() product = {
    title: 'Nome Prodotto',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop',
    rating: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    types: ['Standard', 'Premium', 'Limited Edition']
  };

  defaultImage = this.product.image;
  isFavorite: boolean = false;
  isSaved: boolean = false;
  rating: number = this.product.rating;
  quantity: number = 1;

  // ✅ Aggiunta della proprietà selectedType
  selectedType: string = this.product.types[0];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.product-container', { opacity: 0, y: 50, duration: 1 });
    }
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    gsap.to('.fa-heart', { scale: 1.2, duration: 0.3, repeat: 1 });
  }

  toggleSave(): void {
    this.isSaved = !this.isSaved;
    gsap.to('.fa-bookmark', { scale: 1.2, duration: 0.3, repeat: 1 });
  }

  setRating(stars: number): void {
    this.rating = stars;
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  // ✅ Metodo per aggiornare il tipo selezionato
  updateType(newType: string): void {
    this.selectedType = newType;
  }

  buyNow(): void {
    alert(`${this.product.title} acquistato con successo!`);
  }

  addToCart(): void {
    alert(`${this.product.title} aggiunto al carrello!`);
  }

  addToWishlist(): void {
    alert(`${this.product.title} aggiunto alla wishlist!`);
  }

}
