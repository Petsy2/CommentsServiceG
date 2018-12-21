const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const router = require('./router');

app.use(express.static('public'));

app.use(router);

app.listen(port);