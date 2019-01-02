const express = require('express');
const app = express();
const router = require('./router.js');
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(express.static('public'));
app.use(router);

const port = process.env.PORT || 3003;
const server = app.listen(port);

module.exports = {
  app,
  server
};