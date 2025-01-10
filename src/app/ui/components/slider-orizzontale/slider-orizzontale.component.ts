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
