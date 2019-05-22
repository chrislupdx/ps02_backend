const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.end('res.end hit in `/`');
});


module.exports = app;
