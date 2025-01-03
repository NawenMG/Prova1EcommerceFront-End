import { provideHttpClient } from '@angular/common/http';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { provideApollo } from 'apollo-angular';

export const graphqlProviders = [
  provideHttpClient(),
  provideApollo(() => ({
    uri: 'https://your-graphql-endpoint.com/graphql',
    cache: new InMemoryCache(),
  })),
];
