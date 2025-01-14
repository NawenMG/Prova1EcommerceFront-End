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
