import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements AfterViewInit {

  // Controllo per SSR
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Metodo per filtrare
  applyFilter(filterType: string) {
    alert(`Filtro selezionato: ${filterType}`);
  }

  // Implementazione di GSAP dopo il rendering del DOM
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.title', { duration: 1, x: -100, opacity: 0, ease: 'power3.out' });
      gsap.from('.filter-button', { duration: 1, x: 100, opacity: 0, ease: 'power3.out' });
    }
  }
}
