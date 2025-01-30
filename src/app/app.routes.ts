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
import { AuthGuard } from './security/auth-guard.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListProductsComponent },
  { path: 'product', component: DetailsProductComponent },

  // 🔹 Routes che richiedono autenticazione con ruoli specifici
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: { roles: ['USERS'] } },
  { path: 'vendita', component: VenditaProdottiComponent, canActivate: [AuthGuard], data: { roles: ['USERS'] } },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard], data: { roles: ['USERS', 'ADMIN', 'CONTROLLER', 'USERDELIVERY', 'USERMONITORING', 'USERAI', 'USERTRANSITION'] } },
  { path: 'admin', component: AdminUiComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'controller', component: ControlleruiComponent, canActivate: [AuthGuard], data: { roles: ['CONTROLLER'] } },
  { path: 'transizioni', component: TransizioniUiComponent, canActivate: [AuthGuard], data: { roles: ['USERTRANSITION'] } },
  { path: 'delivery', component: DeliveryUiComponent, canActivate: [AuthGuard], data: { roles: ['USERDELIVERY'] } },

  // 🔹 Routes pubbliche
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'login', component: LoginComponent },

  // 🔹 Route wildcard per gestire pagine non trovate (deve stare alla fine)
  { path: '**', redirectTo: 'login' }
];
