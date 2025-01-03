import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { graphqlProviders } from './graphql.module';

bootstrapApplication(AppComponent, {
  providers: [
    ...graphqlProviders,
  ],
});
