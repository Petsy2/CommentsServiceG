const express = require('express');
const router = express.Router;
const { getReviewsForPet, postReviewForPet } = require('../database/controllers');

router.get('/reviews/:petid', (req, res) => {
  // getReviewsForPet();
  res.send('A list of reviews');
});

router.post('/review/:petid', express.json(), (req, res) => {
  // postReviewForPet();
  res.send('Got a request to POST this review: ' + req.json());
});

module.exports = router;