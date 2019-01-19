const express = require('express');
const app = express();
const router = require('./router.js');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


app.use(cors());
app.use(bodyparser.json());
app.use(express.static('public'));
app.use(router);
app.use(morgan('dev'));
const port = process.env.PORT || 3003;
const server = app.listen(port, console.log(`Server running on port ${port}`));

module.exports = {
  app,
  server
};