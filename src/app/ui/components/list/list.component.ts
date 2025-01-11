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


