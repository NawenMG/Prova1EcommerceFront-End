import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class ReviewsComponent {
  // Dati statici per rating e recensioni
  ratings = [
    { stars: 5, percentage: 60 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 5 }
  ];

  reviews = [
    {
      stars: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      stars: 4,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ];

  // Generatore di stelle per la visualizzazione
  generateStars(starCount: number): number[] {
    return Array(starCount).fill(0);
  }

  // Metodo per aggiungere recensione
  addReview() {
    alert('Funzione per aggiungere una recensione!');
  }

  // Metodo per visualizzare tutte le recensioni
  seeAllReviews() {
    alert('Visualizzazione di tutte le recensioni!');
  }
}
