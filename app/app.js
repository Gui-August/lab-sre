const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

const counter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total de requisições'
});

app.get('/', (req, res) => {
  counter.inc();
  res.send('App SRE rodando 🚀');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});