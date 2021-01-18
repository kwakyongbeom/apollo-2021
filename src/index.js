import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/App';
import client from "./apollo";
import {ApolloProvider} from "@apollo/client"; 


ReactDOM.render(
<ApolloProvider client={client}>
<App />
</ApolloProvider>,
document.getElementById('root'));


