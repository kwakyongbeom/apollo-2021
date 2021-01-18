import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/App';
import client from "./apoolo";
import {ApolloProvider} from "@apollo/client"; 


ReactDOM.render(
<ApolloProvider client={client}>
<App />
</ApolloProvider>,
document.getElementById('root'));


