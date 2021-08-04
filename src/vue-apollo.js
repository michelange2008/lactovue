import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
// Ajout pour l'identification vis-à-vis de sanctum
import { setContext } from 'apollo-link-context';

// XSRF token is required to make post requests to your Laravel backend
const authLink = setContext((_, { headers }) => {
    let token = RegExp('XSRF-TOKEN[^;]+').exec(document.cookie)
    token = decodeURIComponent(token ? token.toString().replace(/^[^=]+./, '') : '')
    return {
        headers: {
            ...headers,
            'X-XSRF-TOKEN': token,
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials" : true
        },
    };
});

const httplink = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_URL,
  // identif sanctum
  credentials: 'same-origin'
})

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  // identif sanctum
  link: authLink.concat(httplink),

  // A la place de
  // link: httplink,
  cache
});

export default apolloClient;
