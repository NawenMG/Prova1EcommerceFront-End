import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { HomeComponent } from './ui/home/home.component';
import { HeaderComponent } from './ui/components/header/header.component';
import { ListProductsComponent } from "./ui/list-products/list-products.component";
import { DetailsProductComponent } from "./ui/details-product/details-product.component";
import { ProfileComponent } from "./ui/profile/profile.component";
import { LoginComponent } from "./ui/login/login.component";
import { RegistrazioneComponent } from "./ui/registrazione/registrazione.component";
import { VenditaProdottiComponent } from "./ui/vendita-prodotti/vendita-prodotti.component";
import { AdminUiComponent } from "./ui/admin-ui/admin-ui.component";
import { DeliveryUiComponent } from "./ui/delivery-ui/delivery-ui.component";
import { TransizioniUiComponent } from './ui/transizioni-ui/transizioni-ui.component';
import { ControlleruiComponent } from "./ui/controllerui/controllerui.component";
import { ChatComponent } from "./ui/chat/chat.component";


@Component({
  selector: 'app-root',
  imports: [/* HomeComponent */ /* ListProductsComponent */ /* DetailsProductComponent */ /* ProfileComponent */ /* LoginComponent */ /* RegistrazioneComponent */ /* VenditaProdottiComponent */ /*  AdminUiComponent */ /* DeliveryUiComponent */ /* TransizioniUiComponent */ /* ControlleruiComponent */ ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nome-progetto';
}


