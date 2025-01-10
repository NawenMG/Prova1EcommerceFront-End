import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-series.component.html',
  styleUrls: ['./cards-series.component.css']
})
export class CardsSeriesComponent {

  // Immagini casuali da Unsplash (400x300 pixel per ottimizzazione)
  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // Descrizioni comuni per i prodotti
  descriptions = {
    smartphone: 'Un dispositivo all’avanguardia con fotocamera ultra HD, processore a 8 core e un display AMOLED incredibilmente nitido.',
    smartTV: 'Esperienza visiva senza pari con la nostra Smart TV 4K. Colori vividi e funzioni smart integrate per uno streaming perfetto.',
    laptop: 'Prestazioni straordinarie con un design elegante e minimalista. Ideale per professionisti e creativi.'
  };

  // Prodotti simulati per le offerte a tempo con immagini diverse da Unsplash
  offers = [
    { title: 'Smartphone Ultra HD', image: this.defaultImage, description: this.descriptions.smartphone, link: '#' },
    { title: 'Smart TV 4K', image: this.defaultImage, description: this.descriptions.smartTV, link: '#' },
    { title: 'Laptop Pro', image: this.defaultImage, description: this.descriptions.laptop, link: '#' }
  ];

  // Prodotti con più recensioni positive
  topRated = [
    { title: 'Auricolari Wireless', image: this.defaultImage, description: this.descriptions.smartphone, link: '#' },
    { title: 'Orologio Smart', image: this.defaultImage, description: this.descriptions.smartphone, link: '#' },
    { title: 'Fotocamera Reflex', image: this.defaultImage, description: this.descriptions.smartphone, link: '#' }
  ];

  // Prodotti cercati di recente
  recentlySearched = [
    { title: 'Console Gaming', image: this.defaultImage, description: this.descriptions.smartTV, link: '#' },
    { title: 'Stampante Wireless', image: this.defaultImage, description: this.descriptions.smartTV, link: '#' },
    { title: 'Frigorifero Smart', image: this.defaultImage, description: this.descriptions.smartTV, link: '#' }
  ];

  // Prodotti consigliati
  recommended = [
    { title: 'Macchina da Caffè', image: this.defaultImage, description: this.descriptions.laptop, link: '#' },
    { title: 'Aspirapolvere Robot', image: this.defaultImage, description: this.descriptions.laptop, link: '#' },
    { title: 'Set di Padelle Antiaderenti', image: this.defaultImage, description: this.descriptions.laptop, link: '#' }
  ];



}
