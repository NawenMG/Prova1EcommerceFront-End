import { Component, AfterViewInit, Inject, PLATFORM_ID, Output, EventEmitter } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  imports: [FormsModule, CommonModule]
})
export class FilterComponent implements AfterViewInit {

  @Output() filtriCambiati = new EventEmitter<any>(); // Output per inviare filtri al ListComponent

  // Oggetto che contiene tutti i parametri del filtro
  filtri = {
    ordine: '', // Nuova proprietà per il tipo di ordinamento
    minPrice: '',
    maxPrice: '',
    categoria: '',
    brand: '',
    numeroDiRecensioni: '',
    ratingRecensioniPositive: ''
  };

  // Opzioni per categorie e brand (simulati)
  categorie: string[] = ['Elettronica', 'Moda', 'Casa', 'Sport', 'Libri', 'Auto', 'Alimenti'];
  brands: string[] = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'Xiaomi', 'LG'];

  // Controllo per SSR
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Metodo per inviare i filtri selezionati al componente List
  applicaFiltri() {
    this.filtriCambiati.emit(this.filtri);
  }

  // Animazioni GSAP dopo il rendering del DOM
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.title', { duration: 1, x: -100, opacity: 0, ease: 'power3.out' });
      gsap.from('.filter-button', { duration: 1, x: 100, opacity: 0, ease: 'power3.out' });
    }
  }
}
