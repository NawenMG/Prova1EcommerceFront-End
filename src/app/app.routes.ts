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
    path: '', component: HomeComponent
  },
  {
    path: '**', component: HomeComponent
  },
  {
    path: '/list', component: ListProductsComponent
  },
  {
    path: '/product', component: DetailsProductComponent
  },
  {
    path: '/profile', component: ProfileComponent
  },
  {
    path: '/registrazione', component: RegistrazioneComponent
  },
  {
    path: '/login', component: LoginComponent
  },
  {
    path: '/vendita', component: VenditaProdottiComponent
  },
  {
    path: '/chat', component: ChatComponent
  },
  {
    path: '/admin', component: AdminUiComponent
  },
  {
    path: '/controller', component: ControlleruiComponent
  },
  {
    path: '/transizioni', component: TransizioniUiComponent
  },
  {
    path: '/delivery', component: DeliveryUiComponent
  }

];
