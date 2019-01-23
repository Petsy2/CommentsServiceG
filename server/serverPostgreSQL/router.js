/* eslint-disable camelcase */
const express = require('express');
const router = express.Router();
const knex = require('../../dbpostgreSQL/knex.js');

router.get('/reviews/:review_id', (req, res, next) => {
  let review_id = req.params.review_id;

  knex.select().from('reviews').where({ review_id })
    .then((entry) => res.status(200).send(entry))
    .catch(err => {
      next(err);
      res.status(404).send('Review not found');
    });
});

router.post('/reviews/:review_id', (req, res, next) => {
  let reviewItem = { review: req.body.review };
  let review_id = req.params.review_id;
  knex('reviews').where({ review_id }).update(reviewItem).into('reviews')
    .then(() => res.status(201).send('Review posted!'))
    .catch((err) => {
      next(err);
      res.status(500).send('Error: Unable to post review');
    });
});

module.exports = router;