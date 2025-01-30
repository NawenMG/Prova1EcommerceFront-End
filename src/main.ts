import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { graphqlProviders } from './graphql.module';
import AOS from 'aos'; // Importa AOS
import 'aos/dist/aos.css'; // Importa il CSS di AOS
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// NgRx
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

// Importa lo Store globale
import { appReducers } from './app/store/app.reducer';
import { appEffects } from './app/store/app.effects';

bootstrapApplication(AppComponent, {
  providers: [
    ...graphqlProviders,  // GraphQL Providers
    provideRouter(routes), // Router Angular

    // NgRx Store
    provideStore(appReducers),
    provideEffects(appEffects),

    // Abilita Redux DevTools solo in sviluppo
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ],
}).then(() => {
  // Inizializza AOS dopo che l'applicazione è stata avviata
  AOS.init({
    duration: 1000, // Durata dell'animazione in millisecondi
    offset: 200, // Distanza in pixel dal viewport per attivare le animazioni
    once: false, // L'animazione si ripete
  });
});
