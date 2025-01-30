import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-dropdown-series',
  standalone: true,
  templateUrl: './dropdown-series.component.html',
  styleUrls: ['./dropdown-series.component.css'],
  imports: [CommonModule]
})
export class DropdownSeriesComponent implements AfterViewInit {

  @ViewChildren('categoryButton') categoryButtons!: QueryList<ElementRef>;
  @ViewChildren('dropdownMenu') dropdownMenus!: QueryList<ElementRef>;

  categories = [
    {
      name: 'Elettronica',
      icon: 'fas fa-tags',
      subcategories: ['Smartphone', 'Laptop', 'Fotocamere', 'Televisori', 'Console']
    },
    {
      name: 'Moda',
      icon: 'fas fa-tshirt',
      subcategories: ['Uomo', 'Donna', 'Scarpe', 'Accessori', 'Gioielli']
    },
    {
      name: 'Casa',
      icon: 'fas fa-couch',
      subcategories: ['Mobili', 'Decorazioni', 'Elettrodomestici', 'Illuminazione', 'Giardino']
    },
    {
      name: 'Sport',
      icon: 'fas fa-basketball-ball',
      subcategories: ['Calcio', 'Tennis', 'Ciclismo', 'Palestra', 'Nuoto']
    },
    {
      name: 'Libri',
      icon: 'fas fa-book',
      subcategories: ['Romanzi', 'Saggi', 'Bambini', 'Biografie', 'Manga']
    },
    {
      name: 'Auto',
      icon: 'fas fa-car',
      subcategories: ['Accessori Auto', 'Moto', 'Ricambi', 'Elettriche', 'SUV']
    },
    {
      name: 'Alimenti',
      icon: 'fas fa-seedling',
      subcategories: ['Frutta', 'Verdura', 'Carne', 'Dolci', 'Bevande']
    }
  ];


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateNavbarEntrance();
      this.setupButtonHoverAnimations();
    }
  }

  /**
   * Animazione avanzata di entrata con GSAP Timeline
   */
  animateNavbarEntrance(): void {
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

    timeline
      .from('.navbar', { y: -100, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" })
      .from(this.categoryButtons.toArray().map(button => button.nativeElement), {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2
      });
  }

  /**
   * Effetto avanzato di Hover con Elasticità
   */
  setupButtonHoverAnimations(): void {
    this.categoryButtons.forEach((buttonRef) => {
      const button = buttonRef.nativeElement;

      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.15,
          rotation: 10,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          rotation: 0,
          duration: 0.5
        });
      });
    });
  }

  /**
   * Animazione avanzata al click con Rimbalzo e Rotazione
   */
  animateButtonClick(button: HTMLElement): void {
    gsap.to(button, {
      scale: 1.2,
      rotation: 360,
      backgroundColor: "#FFD700",
      duration: 0.8,
      yoyo: true,
      repeat: 1,
      ease: "bounce.out"
    });
  }

  /**
   * Apertura Dropdown con Animazione GSAP (con controllo per evitare chiusura immediata)
   */
  openDropdownMenu(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const menu = this.dropdownMenus.toArray()[index].nativeElement;
      gsap.to(menu, {
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power1.out"
      });
    }
  }

  /**
   * Chiusura Dropdown con Animazione GSAP
   */
  closeDropdownMenu(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const menu = this.dropdownMenus.toArray()[index].nativeElement;
      gsap.to(menu, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.5,
        ease: "power1.in"
      });
    }
  }
}


/*
import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

/// GRAPHQL SERVIZIO CATEGORIE
import { CategorieState } from '../../../store/graphql/categoriaRel/categoriaRelGraphQL.state';
import { loadCategorie } from '../../../store/graphql/categoriaRel/categoriaRelGraphQL.actions';
import { selectCategorie, selectLoading, selectError } from '../../../store/graphql/categoriaRel/categoriaRelGraphQL.selectors';
import { Categorie } from '../../../store/graphql/categoriaRel/categoriaRelGraphQL.state';
///

@Component({
  selector: 'app-dropdown-series',
  standalone: true,
  templateUrl: './dropdown-series.component.html',
  styleUrls: ['./dropdown-series.component.css'],
  imports: [CommonModule]
})
export class DropdownSeriesComponent implements AfterViewInit {

  @ViewChildren('categoryButton') categoryButtons!: QueryList<ElementRef>;
  @ViewChildren('dropdownMenu') dropdownMenus!: QueryList<ElementRef>;

  /// Stato Categorie (GraphQL) ///
  categorie$: Observable<Categorie[]>;
  categorieLoading$: Observable<boolean>;
  categorieError$: Observable<string | null>;
  ///

  constructor(
    private store: Store<CategorieState>,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    /// Inizializzazione dello stato delle categorie ///
    this.categorie$ = this.store.select(selectCategorie);
    this.categorieLoading$ = this.store.select(selectLoading);
    this.categorieError$ = this.store.select(selectError);
    ///
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateNavbarEntrance();
      this.setupButtonHoverAnimations();
    }

    /// Carica le categorie al montaggio del componente ///
    this.store.dispatch(loadCategorie({ paramQuery: {}, categorie: {} }));
  }

  /**
   * Animazione avanzata di entrata con GSAP Timeline
   */
  /* animateNavbarEntrance(): void {
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

    timeline
      .from('.navbar', { y: -100, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" })
      .from(this.categoryButtons.toArray().map(button => button.nativeElement), {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2
      });
  } */

  /**
   * Effetto avanzato di Hover con Elasticità
   */
  /* setupButtonHoverAnimations(): void {
    this.categoryButtons.forEach((buttonRef) => {
      const button = buttonRef.nativeElement;

      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.15,
          rotation: 10,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          rotation: 0,
          duration: 0.5
        });
      });
    });
  } */

  /**
   * Navigazione alla lista dei prodotti filtrata per categoria
   */
  /* navigateToCategory(categoryName: string): void {
    this.router.navigate(['/prodotti', categoryName]);
  } */

  /**
   * Apertura Dropdown con Animazione GSAP
   */
 /*  openDropdownMenu(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const menu = this.dropdownMenus.toArray()[index].nativeElement;
      gsap.to(menu, {
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power1.out"
      });
    }
  } */

  /**
   * Chiusura Dropdown con Animazione GSAP
   */
  /* closeDropdownMenu(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const menu = this.dropdownMenus.toArray()[index].nativeElement;
      gsap.to(menu, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.5,
        ease: "power1.in"
      });
    }
  }
} */





