const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('res.end hit in `/`');
});

app.use(express.json());

module.exports = app;
