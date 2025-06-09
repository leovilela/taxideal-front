// src/apollo/client.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: import.meta.env.VITE_API_URL,   // ex: http://localhost:3000/graphql
    credentials: 'include',               // se precisar de cookies; senão remova
  }),
  cache: new InMemoryCache(),
});

export default client;
