import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [FormsModule, CommonModule]
})
export class HeaderComponent implements AfterViewInit {
  isAuthenticated = false;
  selectedLanguage = 'it';
  searchQuery = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.set('.logo i', { rotation: 0 });
    }
  }

  animateLogo(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.logo i', {
        rotation: "+=360", // Rotazione continua ogni passaggio del mouse
        duration: 1,
        ease: 'power1.inOut'
      });
    }
  }

  animateDropdown(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.language-selector', { scale: 1.1, duration: 0.3 });
    }
  }

  resetDropdownAnimation(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.language-selector', { scale: 1, duration: 0.3 });
    }
  }

  changeLanguage(): void {
    console.log('Lingua selezionata:', this.selectedLanguage);
  }

  toggleLogin(): void {
    this.isAuthenticated = !this.isAuthenticated;
    console.log(this.isAuthenticated ? 'Utente autenticato' : 'Utente disconnesso');
  }

  searchProducts(): void {
    console.log('Ricerca:', this.searchQuery);
  }
}
