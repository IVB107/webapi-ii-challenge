const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <div>
      <h1>Lambda Server-Side Routing</h1>
      <h2>Webapi II Challenge</h2>
    </div>
  `);
});

module.exports = server;