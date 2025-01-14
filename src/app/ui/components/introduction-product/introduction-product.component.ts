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
