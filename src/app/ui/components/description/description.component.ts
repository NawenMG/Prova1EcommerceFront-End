/* import { Component, Inject, PLATFORM_ID, AfterViewInit, OnInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common'; // ✅ Importa CommonModule
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gsap from 'gsap';

/// GRAPHQL SERVIZIO PRODOTTI
import { ProdottiState } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';
import { loadProdotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.actions';
import { selectProdotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.selectors';
import { Prodotti } from '../../../store/graphql/prodottoRel/prodottoRelGraphQL.state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule], // ✅ Aggiunto CommonModule per supportare l'async pipe
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements AfterViewInit, OnInit {
  productId: string = ''; // ✅ L'ID verrà estratto dalla route
  product$: Observable<Prodotti | undefined> = new Observable();
  description$: Observable<string | undefined> = new Observable(); // ✅ Descrizione prodotto

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private store: Store<ProdottiState>,
    private route: ActivatedRoute // ✅ Per ottenere l'ID dalla route
  ) {}

  /// ✅ Recupera la descrizione del prodotto basandosi sull'ID dalla route
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.productId = id; // ✅ Salva l'ID del prodotto

        /// ✅ Dispatch per caricare i dati del prodotto
        this.store.dispatch(loadProdotti({ paramQuery: { id: this.productId }, prodotti: {}, limit: 1, offset: 0 }));

        /// ✅ Seleziona il prodotto dallo stato globale
        this.product$ = this.store.select(selectProdotti).pipe(
          map(products => products.find(p => p.id === this.productId))
        );

        /// ✅ Estrai solo la descrizione
        this.description$ = this.product$.pipe(
          map(product => product?.descrizione ?? 'Nessuna descrizione disponibile')
        );
      }
    });
  }

  /// ✅ Anima il caricamento della descrizione con GSAP
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from(".accordion", {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power2.out"
      });

      gsap.from(".accordion-button", {
        duration: 1,
        opacity: 0,
        x: -50,
        ease: "power2.out",
        delay: 0.3
      });

      gsap.from(".accordion-body", {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power2.out",
        delay: 0.6
      });
    }
  }
}
 */


import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
  standalone: true
})
export class DescriptionComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Controllo che il codice venga eseguito lato client per evitare errori SSR
    if (isPlatformBrowser(this.platformId)) {
      gsap.from(".accordion", {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power2.out"
      });

      gsap.from(".accordion-button", {
        duration: 1,
        opacity: 0,
        x: -50,
        ease: "power2.out",
        delay: 0.3
      });

      gsap.from(".accordion-body", {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power2.out",
        delay: 0.6
      });
    }
  }
}
