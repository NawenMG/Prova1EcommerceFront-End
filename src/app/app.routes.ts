import { Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { ListProductsComponent } from './ui/list-products/list-products.component';
import { DetailsProductComponent } from './ui/details-product/details-product.component';
import { ProfileComponent } from './ui/profile/profile.component';
import { RegistrazioneComponent } from './ui/registrazione/registrazione.component';
import { LoginComponent } from './ui/login/login.component';
import { VenditaProdottiComponent } from './ui/vendita-prodotti/vendita-prodotti.component';
import { ChatComponent } from './ui/chat/chat.component';
import { AdminUiComponent } from './ui/admin-ui/admin-ui.component';
import { ControlleruiComponent } from './ui/controllerui/controllerui.component';
import { TransizioniUiComponent } from './ui/transizioni-ui/transizioni-ui.component';
import { DeliveryUiComponent } from './ui/delivery-ui/delivery-ui.component';

export const routes: Routes = [
  {
    path: '', // Percorso principale (homepage)
    component: HomeComponent
  },
  {
    path: 'list', // Lista dei prodotti
    component: ListProductsComponent
  },
  {
    path: 'product', // Dettagli del prodotto
    component: DetailsProductComponent
  },
  {
    path: 'profile', // Profilo utente
    component: ProfileComponent
  },
  {
    path: 'registrazione', // Registrazione
    component: RegistrazioneComponent
  },
  {
    path: 'login', // Login
    component: LoginComponent
  },
  {
    path: 'vendita', // Vendita di prodotti
    component: VenditaProdottiComponent
  },
  {
    path: 'chat', // Chat
    component: ChatComponent
  },
  {
    path: 'admin', // Interfaccia Admin
    component: AdminUiComponent
  },
  {
    path: 'controller', // Controller UI
    component: ControlleruiComponent
  },
  {
    path: 'transizioni', // Transizioni UI
    component: TransizioniUiComponent
  },
  {
    path: 'delivery', // Consegna UI
    component: DeliveryUiComponent
  },
  {
    path: '**', // Wildcard per route non trovate
    component: HomeComponent // Puoi sostituire con un componente "Not Found"
  }
];
