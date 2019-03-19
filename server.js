const express = require('express');

const postsRouter = require('./posts/posts-router');

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

server.use('/api/posts', postsRouter);

module.exports = server;