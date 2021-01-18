import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({  //client 설정 
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });

export default client;