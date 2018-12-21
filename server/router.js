const express = require('express');
const router = express.Router;

router.get('/reviews', (req, res) => {
  res.send('A list of reviews');
});

router.post('/review', express.json(), (req, res) => {
  res.send('Got a request to POST this review: ' + req.json());
});

module.exports = router;