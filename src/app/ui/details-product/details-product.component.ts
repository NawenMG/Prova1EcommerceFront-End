import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { DropdownSeriesComponent } from "../components/dropdown-series/dropdown-series.component";
import { FooterComponent } from "../components/footer/footer.component";
import { IntroductionProductComponent } from '../components/introduction-product/introduction-product.component';
import { DescriptionComponent } from "../components/description/description.component";
import { SchedaTecnicaComponent } from '../components/scheda-tecnica/scheda-tecnica.component';
import { AziendaComponent } from "../components/azienda/azienda.component";
import { SliderOrizzontaleComponent } from '../components/slider-orizzontale/slider-orizzontale.component';
import { ReviewsComponent } from "../components/reviews/reviews.component";
import { DomandeRisposteComponent } from "../components/domande-risposte/domande-risposte.component";

@Component({
  selector: 'app-details-product',
  imports: [HeaderComponent, DropdownSeriesComponent, FooterComponent, IntroductionProductComponent, DescriptionComponent, SchedaTecnicaComponent, AziendaComponent, SliderOrizzontaleComponent, ReviewsComponent, DomandeRisposteComponent],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css',
  standalone: true
})
export class DetailsProductComponent {

}
