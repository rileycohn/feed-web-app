import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

/*const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});
client
.query ({
  query: gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`
})
.then(result => console.log(result)); */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();