import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider-orizzontale',
  imports: [CommonModule],
  templateUrl: './slider-orizzontale.component.html',
  styleUrl: './slider-orizzontale.component.css',
  standalone: true
})
export class SliderOrizzontaleComponent {
  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3';
  cards = Array.from({ length: 20 }, (_, i) => ({
    title: `PRODOTTO ${i + 1}`,
    description: 'Descrizione del prodotto'
  }));

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  isBrowser: boolean;
  cardsPerPage = 5;
  cardWidth = 250;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return; // Evita il problema con SSR
    }
  }

  scrollLeft(): void {
    if (this.isBrowser) {
      this.scrollContainer.nativeElement.scrollBy({
        left: -this.cardsPerPage * this.cardWidth,
        behavior: 'smooth'
      });
    }
  }

  scrollRight(): void {
    if (this.isBrowser) {
      this.scrollContainer.nativeElement.scrollBy({
        left: this.cardsPerPage * this.cardWidth,
        behavior: 'smooth'
      });
    }
  }

}


/*

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

/// GRAPHQL SERVIZIO PRODOTTI
import { ProdottiState } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';
import { loadProdotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.actions';
import { selectProdotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.selectors';
import { Prodotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';
///

@Component({
  selector: 'app-slider-orizzontale',
  imports: [CommonModule],
  templateUrl: './slider-orizzontale.component.html',
  styleUrl: './slider-orizzontale.component.css',
  standalone: true
})
export class SliderOrizzontaleComponent {

  /// Stato Prodotti (GraphQL) ///
  prodotti$: Observable<Prodotti[]>;
  ///

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  isBrowser: boolean;
  cardsPerPage = 5;
  cardWidth = 250;
  prodottiCasuali: Prodotti[] = []; // Array per prodotti selezionati casualmente

  // Immagine predefinita
  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private store: Store<ProdottiState>,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    /// Stato GraphQL dei prodotti ///
    this.prodotti$ = this.store.select(selectProdotti);
    ///

    /// Caricamento iniziale dei prodotti ///
    this.store.dispatch(loadProdotti({ paramQuery: {}, prodotti: {} }));

    /// Sottoscrizione ai prodotti per selezione casuale ///
    this.prodotti$.subscribe(prodotti => {
      if (prodotti.length) {
        this.prodottiCasuali = this.getRandomProducts(prodotti, 10); // Seleziona 10 prodotti casuali
      }
    });
  }


  getRandomProducts(prodotti: Prodotti[], count: number): Prodotti[] {
    return [...prodotti]
      .sort(() => Math.random() - 0.5) // Mescola i prodotti in modo casuale
      .slice(0, count); // Seleziona il numero richiesto di prodotti
  }


  navigateToProduct(product: Prodotti): void {
    this.router.navigate(['/prodotto', product.id]);
  }

  scrollLeft(): void {
    if (this.isBrowser) {
      this.scrollContainer.nativeElement.scrollBy({
        left: -this.cardsPerPage * this.cardWidth,
        behavior: 'smooth'
      });
    }
  }


  scrollRight(): void {
    if (this.isBrowser) {
      this.scrollContainer.nativeElement.scrollBy({
        left: this.cardsPerPage * this.cardWidth,
        behavior: 'smooth'
      });
    }
  }




splitProductsIntoSlides(prodotti: Prodotti[], itemsPerSlide: number): Prodotti[][] {
  const slides = [];
  for (let i = 0; i < prodotti.length; i += itemsPerSlide) {
    slides.push(prodotti.slice(i, i + itemsPerSlide));
  }
  return slides;
}


}


*/
