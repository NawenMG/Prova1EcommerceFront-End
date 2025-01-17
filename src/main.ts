import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { graphqlProviders } from './graphql.module';
import AOS from 'aos'; // Importa AOS
import 'aos/dist/aos.css'; // Importa il CSS di AOS
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    ...graphqlProviders,
    provideRouter(routes)
  ],
}).then(() => {
  // Inizializza AOS dopo che l'applicazione è stata avviata
  AOS.init({
    duration: 1000, // Durata dell'animazione in millisecondi
    offset: 200, // Distanza in pixel dal viewport per attivare le animazioni
    once: false, // L'animazione si ripete
  });
});
