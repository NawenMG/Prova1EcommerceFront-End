import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-domande-risposte',
  imports: [],
  templateUrl: './domande-risposte.component.html',
  styleUrl: './domande-risposte.component.css',
  standalone: true
})
export class DomandeRisposteComponent implements AfterViewInit {
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

  // Metodo per aggiungere recensione
  addReview() {
    alert('Funzione per aggiungere una recensione!');
  }

  // Metodo per visualizzare tutte le recensioni
  seeAllReviews() {
    alert('Visualizzazione di tutte le recensioni!');
  }

}
