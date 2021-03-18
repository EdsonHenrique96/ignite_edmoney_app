import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Fone',
          price: 'R$ 1.000,00',
          category: 'Eletronicos',
          date: new Date(), 
        }
      ]
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);