/* eslint-disable camelcase */
const express = require('express');
const router = express.Router();
// const { getReviewsForPet, postReviewForPet } = require('../database/controllers');
const { reviews, db } = require('../../dbMongo/mongoDB.js');

router.get('/reviews/:review_id', (req, res) => {
  reviews.findOne({ review_id: req.params.review_id })
    .then((entry) => {
      res.status(200).send(entry);
    })
    .catch(err => {
      console.log('Error fetching review', err);
      res.status(500).send(err);
    });
});

router.post('/reviews/:review_id', (req, res) => {
  const reviewItem = { review: req.body.review };
  reviews.findOneAndUpdate({ review_id: req.params.review_id }, reviewItem, { new: true })
    .then((entry) => {
      res.status(201).send('Review posted');
    })
    .catch(err => {
      console.log('Error updating content to server.', err);
    });
});

module.exports = router;