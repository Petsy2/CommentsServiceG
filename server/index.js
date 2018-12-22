const express = require('express');
const app = express();
const router = require('./router.js');

app.use(express.static('public'));
app.use(router);

const port = process.env.PORT || 3003;
app.listen(port);