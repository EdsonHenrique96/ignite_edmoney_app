import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Front End',
          type: 'deposit',
          category: 'Renda extra',
          amount: 8000,
          createdAt: new Date('2021-03-04 08:50:30')
        },
        {
          id: 2,
          title: 'Iphone',
          type: 'withdraw',
          category: 'Eletronicos',
          amount: 4300,
          createdAt: new Date('2021-03-24 20:53:00')
        }
      ]
    });
  },

  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      const createdAt = new Date();

      return schema.create('transaction', { ...data, createdAt });
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);