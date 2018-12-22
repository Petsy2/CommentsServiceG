const express = require('express');
const router = express.Router();
const { getReviewsForPet, postReviewForPet } = require('../database/controllers');

router.get('/reviews/:pet_id', (req, res) => {
  getReviewsForPet(req.params.pet_id)
    .then(results => res.status(200).send(results))
    .catch(err => {
      console.log('Database error retrieving reviews for pet_id ', req.params.pet_id, err);
      res.status(500).send('Retrieving reviews failed.');
    });
});

router.post('/review/:pet_id', express.json(), (req, res) => {
  postReviewForPet(req.params.pet_id, 'user_id', req.json()) // FIXME: user_id needs to be gotten somehow
    .then(success => res.status(201).send('POSTed review', req.json()))
    .catch(err => {
      console.log('Database error inserting new review for pet_id', req.params.pet_id, req.json(), err);
      res.status(500).send('Posting review failed.')
    });
});

module.exports = router;