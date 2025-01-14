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


@Component({
  selector: 'app-root',
  imports: [/* HomeComponent */ /* ListProductsComponent */ /* DetailsProductComponent */ /* ProfileComponent */ /* LoginComponent */ RegistrazioneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nome-progetto';
}


