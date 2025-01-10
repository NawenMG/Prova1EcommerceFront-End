import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import * as AOS from 'aos';
import { DropdownSeriesComponent } from "../components/dropdown-series/dropdown-series.component";
import { CardsSeriesComponent } from "../components/cards-series/cards-series.component";
import { SliderOrizzontaleComponent } from "../components/slider-orizzontale/slider-orizzontale.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeaderComponent, DropdownSeriesComponent, CardsSeriesComponent, SliderOrizzontaleComponent, FooterComponent]
})
export class HomeComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200,
        once: false,
        easing: 'ease-in-out'
      });
    }
  }
}
